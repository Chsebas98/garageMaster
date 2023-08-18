import {
  useEffect,
  useState,
  FormEvent,
  MutableRefObject,
  useRef,
  ChangeEvent,
} from "react";
import { SearchVehicle } from "../components/SearchPlate";
import emailjs from "@emailjs/browser";
import { useVehicle } from "../hooks/useVehicle";
import swal from "sweetalert";
import { useAuth } from "../hooks/useAuth";
import { RegisterVehicleReview } from "../interfaces/vehicle";
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
  const [valorNivel, setValorNivel] = useState(0);
  const [total, setTotal] = useState(0);
  const { searchResultVehicle, registerVehicleReview } = useVehicle();
  const { mechanic } = useAuth();
  const [reviewVehicle, setReviewVehicle] = useState<RegisterVehicleReview>({
    detalles_revision: "Importe por servicio",
    fecha_salida: new Date(),
    tiempo_reparacion: "",
    peizas_cambiadas: "",
    extras: "",
    detalles_extra: "",
    precio: 0,
    vehiculos: [],
    users_permissions_users: [mechanic.user.id],
  });

  const emailApiKey: string = import.meta.env.VITE_EMAIL_API_PUBLIC_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const message = useRef() as MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    emailjs.init(emailApiKey);
  }, [emailApiKey, searchResultVehicle]);
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

  const handleReviewChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setReviewVehicle({
      ...reviewVehicle,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    AsignarValorNivel();
    CalcularPrecio(
      Number(reviewVehicle.peizas_cambiadas),
      Number(reviewVehicle.extras),
      valorNivel,
      setTotal
    );
  }, [reviewVehicle.peizas_cambiadas, reviewVehicle.extras, valorNivel]);

  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const to_name = `${searchResultVehicle.attributes.clientes.data[0].attributes.nombre} ${searchResultVehicle.attributes.clientes.data[0].attributes.apellido}`;
    const user_email = searchResultVehicle.attributes.clientes.data[0].attributes.correo;

    try {
      await emailjs.send(serviceId, templateId, {
        to_name,
        user_email,
        parts_replaced: reviewVehicle.peizas_cambiadas,
        extra: reviewVehicle.extras,
        details_extra: reviewVehicle.detalles_extra,
        message: message.current?.value,
      });
      setReviewVehicle({
        ...reviewVehicle,
        vehiculos: [searchResultVehicle.id],
      });
      registerVehicleReview(reviewVehicle);
      swal("Email y registro enviado correctamente!", "", "success");
    } catch (error) {
      console.error(error);
    }
  };
  //console.log(searchResultVehicle.attributes.clientes.data[0].attributes.correo);
  

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
        <form onSubmit={handleSendEmail}>
          <div className="row mb-3">
            <div className="col-md-4">
              <span className="fw-bold">Detalles de revisión</span>
            </div>
            <div className="col-md-8">
              <textarea
                id="inputPassword6"
                className="form-control"
                name="detalles_revision"
                onChange={handleReviewChange}
                placeholder="Motor"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <span className="fw-bold">Fecha de salida</span>
            </div>
            <div className="col-md-8">
              <input
                type="date"
                id="inputPassword6"
                className="form-control"
                placeholder="Motor"
                name="fecha_salida"
                onChange={handleReviewChange}
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
                //name="users_permissions_users"
                className="form-control"
                onChange={handleReviewChange}
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
                name="tiempo_reparacion"
                onChange={handleReviewChange}
                className="form-control"
                placeholder="tres horas"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <span className="fw-bold">Piezas cambiadas</span>
            </div>
            <div className="col-md-1">
              <input
                type="number"
                name="peizas_cambiadas"
                id="piezas"
                className="form-control"
                value={reviewVehicle.peizas_cambiadas}
                //onChange={(e) => setPiezas(Number(e.target.value))}
                onChange={handleReviewChange}
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
                name="extras"
                id="extra"
                className="form-control"
                value={reviewVehicle.extras}
                //onChange={(e) => setExtra(Number(e.target.value))}
                onChange={handleReviewChange}
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
                //onChange={(e) => setDetallesExtra(e.target.value)}
                onChange={handleReviewChange}
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
                name="precio"
                className="form-control"
                value={`$${total}`}
                ref={message}
                disabled
              />
            </div>
          </div>
          <button className="btn btn-secondary mb-3" type="submit">
            Notificar y registrar al cliente
          </button>
        </form>
      </div>
    </div>
  );
};
