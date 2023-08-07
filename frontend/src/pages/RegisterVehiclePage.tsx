import { useState } from "react";
import { useClient } from "../hooks/useClient";
import { RegisterVehicle } from "../interfaces/vehicle";

export const VehicleRegisterPage = () => {

  const [vehicle, setVehicle] = useState<RegisterVehicle>({
    placa: "",
    color: "",
    kilometraje: 0,
    anio: 0,
    marca: "",
    combustible: "",
    fecha_ingreso: "",
    hora_ingreso: "",
    motivo_ingreso: "",
    clients: []
  });

  const { clients } = useClient();

  return (
    <div className="container-register">
      <div className="forms-container">
        <div className="signin-signup">
          <form>
            <div className="row g-2 mt-3">
              <h3>Registro de Vehiculo</h3>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Placa</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Color</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mt-3">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Kilometraje</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Año</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mt-3">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Marca</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Modelo</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mt-3">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Combustible</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Fecha de Ingreso</label>
                </div>
              </div>
            </div>
            <div className="row g-2 mt-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="time"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputGrid">Hora de Ingreso</label>
                </div>
              </div>
            </div>
            <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingPassword">Motivo de ingreso</label>
            </div>
            <select
              className="form-select mt-3"
              aria-label="Default select example"
            >
              <option selected disabled>
                Cliente
              </option>
              {clients.map((client) => (
                <option
                  key={client.id}
                  value={client.id}
                >
                  {client.attributes.nombre} {client.attributes.apellido}
                </option>
              ))}
            </select>
            <button className="btn btn-custom my-3" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel"></div>
      </div>
    </div>
  );
};
