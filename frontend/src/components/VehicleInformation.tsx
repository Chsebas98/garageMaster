import { FormEvent, useState } from "react";
import { useVehicle } from "../hooks/useVehicle";

export const VehicleInformation = () => {
  const [searchPlate, setSearchPlate] = useState<string>("");
  const { searchForPlate } = useVehicle();

  console.log(searchPlate);

  const handleSearchSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(searchPlate === "") {
      alert("El campo es obligatorio");
      return
    }
    searchForPlate(searchPlate);
  }
  return (
    <>
      <form className="mb-4" onSubmit={handleSearchSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Búsqueda por placa
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              onChange={(event) => setSearchPlate(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
      <div className="row g-4">
        <h3>Información del vehículo</h3>
        <div className="col-md-3 mb-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Placa
          </label>
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Año
          </label>
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            disabled
          />
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-3 mb-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Kilometraje
          </label>
        </div>
        <div className="col-md-3 mb-3">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Color
          </label>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            disabled
          />
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-3 mb-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Marca
          </label>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            disabled
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputPassword6" className="col-form-label">
            Combustible
          </label>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            disabled
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-auto">
          <span>Modelo</span>
        </div>
        <div className="col-auto">
          <p>lslsl</p>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <span>Dueño</span>
        </div>
        <div className="col-auto">
        <input
            type="text"
            id="inputPassword6"
            className="form-control"
            defaultValue="Robinson Ruilova"
            disabled
          />
        </div>
      </div>
    </>
  );
};
