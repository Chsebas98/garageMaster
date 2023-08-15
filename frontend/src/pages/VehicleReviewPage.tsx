import { FormEvent, MutableRefObject, useEffect, useRef } from "react";
import { SearchVehicle } from "../components/SearchPlate";
import emailjs from "@emailjs/browser";
import { useVehicle } from "../hooks/useVehicle";
import swal from "sweetalert";

export const VehicleReviewPage = () => {
  const { searchResultVehicle } = useVehicle();
  const emailApiKey: string = import.meta.env.VITE_EMAIL_API_PUBLIC_KEY;
  const serviceId: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId: string = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

  const message = useRef() as MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    emailjs.init(emailApiKey);
  }, [emailApiKey]);

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
  console.log(searchResultVehicle);

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
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="choque"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Fecha de ingreso</span>
          </div>
          <div className="col-md-8">
            <input
              type="date"
              name=""
              id="inputPassword6"
              className="form-control"
            />
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
            <textarea name="" id="inputPassword6" className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Operador a cargo</span>
          </div>
          <div className="col-md-8">
            <select
              className="form-select mt-3"
              aria-label="Default select example"
            >
              <option value="">Primer</option>
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
              className="form-control"
              placeholder="tres horas"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Piezas cambiadas</span>
          </div>
          <div className="col-md-8">
            <textarea id="inputPassword6" className="form-control" />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-3 mb-3">
            <label htmlFor="inputPassword6" className="col-form-label fw-bold">
              Extra
            </label>
          </div>
          <div className="col-md-3">
            <input type="text" id="inputPassword6" className="form-control" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputPassword6" className="col-form-label fw-bold">
              Detalles extra
            </label>
          </div>
          <div className="col-md-3">
            <input type="text" id="inputPassword6" className="form-control" />
          </div>
          <div className="">
            <button className="btn btn-primary mb-3">Calcular</button>
          </div>
        </div>
        <form className="form-control" onSubmit={handleSendEmail}>
          <div className="row mb-3">
            <div className="col-auto">
              <span className="fw-bold">Precio</span>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputPassword6"
                className="form-control"
                value="El precio es $40"
                ref={message}
              />
            </div>
          </div>
          <button className="btn btn-secondary" type="submit">
            Notificar al cliente
          </button>
        </form>
      </div>
    </div>
  );
};
