import {
  useEffect,
  useState,
  FormEvent,
  MutableRefObject,
  useRef,
} from "react";
import { SearchVehicle } from "../components/SearchPlate";
import emailjs from "@emailjs/browser";
import { useVehicle } from "../hooks/useVehicle";
import swal from "sweetalert";
const CalcularPrecio = (
  piezas: number,
  valorextra: number,
  valorNivel: number,
  setTotal: React.Dispatch<React.SetStateAction<number>>
) => {
  const total = piezas * valorNivel + valorextra;
  setTotal(total);
};

export const VehicleReviewPage = () => {
  const [piezas, setPiezas] = useState(0);
  const [valorextra, setExtra] = useState(0);
  const [detallesExtra, setDetallesExtra] = useState("Importe por servicio, ");
  const [valorNivel, setValorNivel] = useState(0);
  const [total, setTotal] = useState(0);
  const { searchResultVehicle } = useVehicle();
  const emailApiKey: string = import.meta.env.VITE_EMAIL_API_PUBLIC_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const message = useRef() as MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    emailjs.init(emailApiKey);
  }, [emailApiKey]);
  const AsignarValorNivel = () => {
    const nivel = localStorage.getItem("nivel");
    if (nivel === "Junior") {
      setValorNivel(5);
    } else if (nivel === "Mid") {
      setValorNivel(10);
    } else {
      setValorNivel(15);
    }
  };

  useEffect(() => {
    AsignarValorNivel();
    CalcularPrecio(piezas, valorextra, valorNivel, setTotal);
  }, [piezas, valorextra, valorNivel]);
  
  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const to_name = `${searchResultVehicle.attributes.clientes.data[0].attributes.nombre} ${searchResultVehicle.attributes.clientes.data[0].attributes.apellido}`;
    const user_email =
      searchResultVehicle.attributes.clientes.data[0].attributes.correo;

    try {
      await emailjs.send(serviceId, templateId, {
        to_name,
        user_email,
        message: message.current?.value,
      });
      swal("Email enviado correctamente!", "", "success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <SearchVehicle />
      <div>
        <h3 className="mb-3">Datos revisión del vehículo</h3>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Motivo de ingreso</span>
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              nostrum numquam voluptas repellat pariatur non ad sint deserunt
              labore architecto cum, dolor quam accusamus hic fugit quo quisquam
              dignissimos eum.
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Fecha de ingreso</span>
          </div>
          <div className="col-md-8">
            <p>2023-05-04</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Extraso</span>
          </div>
          <div className="col-md-8">
            <p>lslsl</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Título de revisión</span>
          </div>
          <div className="col-md-8">
            <p>lslsl</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Detalles de revisión</span>
          </div>
          <div className="col-md-8">
            <p>lslsl</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Operador a cargo</span>
          </div>
          <div className="col-md-8">
            <p>lslsl</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Tiempo de reparación</span>
          </div>
          <div className="col-md-8">
            <p>lslsl</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Piezas cambiadas</span>
          </div>
          <div className="col-md-1">
            <input
              type="number"
              name="piezas"
              id="piezas"
              className="form-control"
              value={piezas}
              onChange={(e) => setPiezas(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-3 mb-3">
            <label htmlFor="inputPassword6" className="col-form-label fw-bold">
              Extra
            </label>
          </div>
          <div className="col-md-1">
            <input
              type="number"
              name="extra"
              id="extra"
              className="form-control"
              value={valorextra}
              onChange={(e) => setExtra(Number(e.target.value))}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword6" className="col-form-label fw-bold">
              Detalles extra
            </label>
          </div>
          <div className="col-md-5">
            <textarea
              name="detalles_extra"
              id="detalles_extra"
              className="form-control"
              value={detallesExtra}
              onChange={(e) => setDetallesExtra(e.target.value)}
            />
          </div>
          <div className="">
            <button className="btn btn-primary mb-3">Calcular</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-auto">
            <span className="fw-bold">Precio</span>
          </div>
          <div className="col-auto">
            <p>${total}</p>
          </div>
        </div>
        <button className="btn btn-secondary">Notificar al cliente</button>
      </div>
    </div>
  );
};
