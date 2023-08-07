import { ChangeEvent, FormEvent, useState } from "react";
import { useClient } from "../hooks/useClient";
import { RegisterVehicle } from "../interfaces/vehicle";
import { useVehicle } from "../hooks/useVehicle";

export const VehicleRegisterPage = () => {
  const [vehicle, setVehicle] = useState<RegisterVehicle>({
    placa: "",
    color: "",
    kilometraje: 0,
    anio: 0,
    marca: "",
    modelo: "",
    combustible: "",
    fecha_ingreso: new Date(),
    hora_ingreso: "",
    motivo_ingreso: "",
    clientes: [],
  });

  const { clients } = useClient();
  const { registerVehicle } = useVehicle();

  const handleVehicleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setVehicle({
      ...vehicle,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitVehicle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(vehicle);
    
    
    registerVehicle(vehicle);
  };

  return (
    <div className="container-register">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmitVehicle}>
            <div className="row g-2 mt-3">
              <h3>Registro de Vehiculo</h3>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    name="placa"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
                  />
                  <label htmlFor="floatingInputGrid">Placa</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    name="color"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
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
                    name="kilometraje"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
                  />
                  <label htmlFor="floatingInputGrid">Kilometraje</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    name="anio"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
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
                    name="marca"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
                  />
                  <label htmlFor="floatingInputGrid">Marca</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    name="modelo"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
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
                    name="combustible"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
                  />
                  <label htmlFor="floatingInputGrid">Combustible</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="date"
                    name="fecha_ingreso"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
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
                    name="hora_ingreso"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="name@example.com"
                    onChange={handleVehicleChange}
                  />
                  <label htmlFor="floatingInputGrid">Hora de Ingreso</label>
                </div>
              </div>
            </div>
            <div className="form-floating mt-3">
              <input
                type="text"
                name="motivo_ingreso"
                className="form-control"
                id="floatingPassword"
                placeholder="name@example.com"
                onChange={handleVehicleChange}
              />
              <label htmlFor="floatingPassword">Motivo de ingreso</label>
            </div>
            <select
              className="form-select mt-3"
              aria-label="Default select example"
              name="clientes"
              onChange={handleVehicleChange}
            >
              <option selected disabled>
                Cliente
              </option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
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
