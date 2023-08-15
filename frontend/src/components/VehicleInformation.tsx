import { VehicleWithClientsDatum } from "../interfaces/vehicle";

interface Props {
  searchResultVehicle: VehicleWithClientsDatum;
}

export const VehicleInformation = ({ searchResultVehicle }: Props) => {

  return (
    <>
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
            value={searchResultVehicle.attributes.placa}
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
            value={searchResultVehicle.attributes.anio}
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
            value={searchResultVehicle.attributes.kilometraje}
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
            value={searchResultVehicle.attributes.color}
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
            value={searchResultVehicle.attributes.marca}
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
            value={searchResultVehicle.attributes.combustible}
            disabled
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-auto">
          <span>Modelo</span>
        </div>
        <div className="col-auto">
          <p>{searchResultVehicle.attributes.modelo}</p>
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
            defaultValue={`${searchResultVehicle.attributes.clientes.data[0].attributes.nombre} ${searchResultVehicle.attributes.clientes.data[0].attributes.apellido}`}
            disabled
          />
        </div>
      </div>
    </>
  );
};
