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
  const [selectedService, setSelectedService] = useState("");
  const [block, setBlock] = useState(false);
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
  }, [emailApiKey, reviewVehicle]);
  const AsignarValorNivel = () => {
    const nivel = localStorage.getItem("nivel");
    if (nivel === "Junior") {
      setValorNivel(2);
    } else if (nivel === "Mid") {
      setValorNivel(4);
    } else {
      setValorNivel(6);
    }
  };

  const services = [
    { value: "1", label: "Revisión de motor" },
    { value: "2", label: "Cambio de aceite" },
    { value: "3", label: "Revisión de frenos" },
    { value: "4", label: "Alineación y balanceo" },
    { value: "5", label: "Cambio de batería" },
    { value: "6", label: "Reparación de transmisión" },
    { value: "7", label: "Revisión de sistema eléctrico" },
    { value: "8", label: "Cambio de neumáticos" },
    { value: "9", label: "Limpieza de inyectores" },
    { value: "10", label: "Reparación de suspensión" },
  ];

  const llenarCampos = (selectedValue: string) => {
    if (selectedValue === "1") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por revisión de motor",
        tiempo_reparacion: "3 horas",
        peizas_cambiadas: "1",
        extras: "40",
        detalles_extra: "Revisión de motor",
        precio: 40,
      });
    } else if (selectedValue === "2") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por cambio de aceite",
        tiempo_reparacion: "1 hora",
        peizas_cambiadas: "1",
        extras: "10",
        detalles_extra: "Cambio de aceite",
        precio: 10,
      });
    } else if (selectedValue === "3") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por revisión de frenos",
        tiempo_reparacion: "45 minutos",
        peizas_cambiadas: "4",
        extras: "15",
        detalles_extra: "Cambio de frenos",
        precio: 25,
      });
    } else if (selectedValue === "4") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por alineación y balanceo",
        tiempo_reparacion: "1 hora",
        peizas_cambiadas: "0",
        extras: "10",
        detalles_extra: "Alineación y balanceo de neumáticos",
        precio: 15,
      });
    } else if (selectedValue === "5") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por cambio de batería",
        tiempo_reparacion: "30 minutos",
        peizas_cambiadas: "1",
        extras: "25",
        detalles_extra: "Cambio de batería",
        precio: 30,
      });
    } else if (selectedValue === "6") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por reparación de transmisión",
        tiempo_reparacion: "2 horas",
        peizas_cambiadas: "6",
        extras: "30",
        detalles_extra: "Reparación de transmisión",
        precio: 40,
      });
    } else if (selectedValue === "7") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por revisión de sistema eléctrico",
        tiempo_reparacion: "1.5 horas",
        peizas_cambiadas: "2",
        extras: "20",
        detalles_extra: "Revisión de sistema eléctrico",
        precio: 30,
      });
    } else if (selectedValue === "8") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por cambio de neumáticos",
        tiempo_reparacion: "1.5 horas",
        peizas_cambiadas: "4",
        extras: "30",
        detalles_extra: "Cambio de neumáticos",
        precio: 35,
      });
    } else if (selectedValue === "9") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por limpieza de inyectores",
        tiempo_reparacion: "45 minutos",
        peizas_cambiadas: "0",
        extras: "20",
        detalles_extra: "Limpieza de inyectores",
        precio: 20,
      });
    } else if (selectedValue === "10") {
      setReviewVehicle({
        ...reviewVehicle,
        detalles_revision: "Importe por reparación de suspensión",
        tiempo_reparacion: "2 horas",
        peizas_cambiadas: "4",
        extras: "25",
        detalles_extra: "Reparación de suspensión",
        precio: 35,
      });
    }
  };

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    if (selectedValue != "") {
      setBlock(true);
      llenarCampos(selectedValue);
    } else setBlock(false);
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
    setReviewVehicle({
      ...reviewVehicle,
      vehiculos: [searchResultVehicle?.id],
    });
  }, [reviewVehicle.peizas_cambiadas, reviewVehicle.extras, valorNivel]);

  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const to_name = `${searchResultVehicle.attributes.clientes.data[0].attributes.nombre} ${searchResultVehicle.attributes.clientes.data[0].attributes.apellido}`;
    const user_email =
      searchResultVehicle.attributes.clientes.data[0].attributes.correo;

      if ([reviewVehicle.detalles_revision, reviewVehicle.fecha_salida].includes("")) {
        swal("Todos los campos deben ser llenados", "", "error");
        return;
      }

    try {
      await emailjs.send(serviceId, templateId, {
        to_name,
        user_email,
        parts_replaced: reviewVehicle.peizas_cambiadas,
        extra: reviewVehicle.extras,
        details_extra: reviewVehicle.detalles_extra,
        message: message.current?.value,
      });

      registerVehicleReview(reviewVehicle);
      const res = await swal("Email y registro enviado correctamente!", "", "success");
      if(res) {
        window.location.reload();
      }
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
              <span className="fw-bold">Servicios Disponibles</span>
            </div>
            <div className="col-md-8">
              <select
                className="form-select"
                aria-label="Seleccione un servicio"
                onChange={handleServiceChange}
                value={selectedService}
              >
                <option value="">-----Seleccione un servicio-----</option>
                {services.map((services) => (
                  <option key={services.value} value={services.value}>
                    {services.label}
                  </option>
                ))}
              </select>
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
                value={reviewVehicle.tiempo_reparacion}
                disabled={block}
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
                disabled={block}
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
                value={reviewVehicle.detalles_extra}
                disabled={block}
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
