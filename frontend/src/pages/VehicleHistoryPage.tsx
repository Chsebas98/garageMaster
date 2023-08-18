import { SearchVehicle } from "../components/SearchPlate";
import { useVehicle } from "../hooks/useVehicle";

export const VehicleHistoryPage = () => {
  const {  vehicleHistory } = useVehicle();
  console.log(vehicleHistory);
  
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
                <th scope="col">Ver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>2023-04-05</td>
                <td>2023-04-07</td>
                <td>Cambio bujías</td>
                <td>logo ver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
