import { SearchVehicle } from "../components/SearchPlate";
import { useVehicle } from "../hooks/useVehicle";

export const VehicleHistoryPage = () => {
  const { historyVehicle, searchResultVehicle } = useVehicle();
console.log(historyVehicle);

  return (
    <div className="container mt-5">
      <SearchVehicle />
      <div>
        <h3>Historial de revisiones del vehículo</h3>
        <div className="table-responsive">
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Operardor</th>
                <th scope="col">Fecha ingreso</th>
                <th scope="col">Fecha salida</th>
                <th scope="col">Revisión</th>
                <th scope="col">Motivo de ingreso</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(searchResultVehicle).length > 0 &&
                historyVehicle.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {
                        item?.attributes.users_permissions_users.data[0]
                          ?.attributes.username
                      }
                    </td>
                    <td>
                      {String(
                        item?.attributes.vehiculos.data[0]?.attributes
                          .fecha_ingreso
                      )}
                    </td>
                    <td>{String(item?.attributes.fecha_salida)}</td>
                    <td>{item?.attributes.detalles_revision}</td>
                    <td>{item?.attributes.vehiculos.data[0]?.attributes.motivo_ingreso}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
