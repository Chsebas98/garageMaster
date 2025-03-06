import { FormEvent, useState } from "react";
import { useVehicle } from "../hooks/useVehicle";
import { VehicleInformation } from "./VehicleInformation";
import swal from "sweetalert";

export const SearchVehicle = () => {
	const [searchPlate, setSearchPlate] = useState<string>("");
	const { searchForPlate, searchResultVehicle, listReviewsVehicle } =
		useVehicle();

	const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (searchPlate === "") {
			swal("La placa a buscar no debe estar vacía.", "", "error");
			return;
		}
		searchForPlate(searchPlate);
		listReviewsVehicle(searchPlate);
		setSearchPlate("");
	};
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
							value={searchPlate}
						/>
					</div>
					<div className="col-auto">
						<button className="btn btn-primary" type="submit">
							Buscar
						</button>
					</div>
				</div>
			</form>
			{Object.keys(searchResultVehicle).length === 0 ? null : (
				<VehicleInformation searchResultVehicle={searchResultVehicle} />
			)}
		</>
	);
};
