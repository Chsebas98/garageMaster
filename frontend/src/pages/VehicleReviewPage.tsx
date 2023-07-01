import { VehicleInformation } from "../components/VehicleInformation";

export const VehicleReviewPage = () => {
  return (
    <div className="container mt-5">
      <VehicleInformation />
      <div>
        <h3 className="mb-3">Datos revisión del vehículo</h3>
        <div className="row mb-3">
          <div className="col-md-4">
            <span className="fw-bold">Motivo de ingreso</span>
          </div>
          <div className="col-md-8">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum numquam voluptas repellat pariatur non ad sint deserunt labore architecto cum, dolor quam accusamus hic fugit quo quisquam dignissimos eum.</p>
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
          <div className="col-md-8">
            <p>lslsl</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-3 mb-3">
            <label htmlFor="inputPassword6" className="col-form-label fw-bold">
              Extra
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
            <label htmlFor="inputPassword6" className="col-form-label fw-bold">
              Detalles extra
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
          <div className="">
            <button className="btn btn-primary mb-3">Calcular</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-auto">
            <span className="fw-bold">Precio</span>
          </div>
          <div className="col-auto">
            <p>$40</p>
          </div>
        </div>
        <button className="btn btn-secondary">Notificar al cliente</button>
      </div>
    </div>
  );
};
