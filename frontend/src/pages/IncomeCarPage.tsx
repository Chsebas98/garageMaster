export const IncomeCarPage = () => {
  return (
    <div className="container mt-5">
      <form>
        <div className="row g-2">
          <h3>Datos del propietario</h3>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputGrid">Nombre</label>
            </div>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputGrid">Correo</label>
            </div>
          </div>
        </div>
        <div className="row g-2 mt-3">
          <div className="col-md">
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputGrid">Célular</label>
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
              <label htmlFor="floatingInputGrid">Dirección</label>
            </div>
          </div>
        </div>
        <div className="row g-2 mt-3">
          <h3>Datos del vehículo</h3>
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
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Extras</label>
        </div>
        <div className="form-floating">
          <input
            type="datetime-local"
            className="form-control"
            id="floatingPassword"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingPassword">Fecha y hora de ingreso</label>
        </div>
        <div className="mt-3">
          <h3>Descripción del problema o servicio requerido</h3>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingPassword">Motivo de ingreso</label>
          </div>
          <div className="form-floating mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingPassword">Comportamiento inusual</label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};
