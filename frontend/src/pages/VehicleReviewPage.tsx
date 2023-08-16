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
import { useAuth } from "../hooks/useAuth";
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
  //const [reviewVehicle, setReviewVehicle] = useState({});
  const { searchResultVehicle } = useVehicle();
  const { mechanic } = useAuth();
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
        parts_replaced: piezas,
        extra: valorextra,
        details_extra: detallesExtra,
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
            {searchResultVehicle.attributes ? (
              <p>{searchResultVehicle.attributes.motivo_ingreso}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Fecha de ingreso</span>
          </div>
          <div className="col-md-8">
            {searchResultVehicle.attributes ? (
              <p>{String(searchResultVehicle.attributes.fecha_ingreso)}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Extras</span>
          </div>
          <div className="col-md-8">
            <textarea
              id="inputPassword6"
              className="form-control"
              placeholder="Motor"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Título de revisión</span>
          </div>
          <div className="col-md-8">
            <input type="text" id="inputPassword6" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Detalles de revisión</span>
          </div>
          <div className="col-md-8">
            <textarea
              id="inputPassword6"
              className="form-control"
              placeholder="Motor"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Operador a cargo</span>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              value={mechanic.user.username}
              disabled
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Tiempo de reparación</span>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="tres horas"
            />
          </div>
        </div>
        <form onSubmit={handleSendEmail}>
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
            <div className="col-md-3">
              <label
                htmlFor="inputPassword6"
                className="col-form-label fw-bold"
              >
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
              <label
                htmlFor="inputPassword6"
                className="col-form-label fw-bold"
              >
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
            
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-auto">
              <span className="fw-bold">Precio</span>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputPassword6"
                className="form-control"
                value={`$${total}`}
                ref={message}
                disabled
              />
            </div>
          </div>
          <button className="btn btn-secondary mb-3" type="submit">
            Notificar al cliente
          </button>
        </form>
      </div>
    </div>
  );
};
