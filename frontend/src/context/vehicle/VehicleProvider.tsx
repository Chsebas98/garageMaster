import { ReactNode, useEffect, useState } from "react";
import { VehicleContext } from "./VehicleContext";
import { axiosClient } from "../../apis";
import {
	ListVehicleReview,
	ListVehicleReviewDatum,
	RegisterVehicle,
	RegisterVehicleReview,
	VehicleResponse,
	VehicleWithClients,
	VehicleWithClientsDatum,
} from "../../interfaces/vehicle";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface VehicleProviderProps {
	children: ReactNode;
}

export const VehicleProvider = ({ children }: VehicleProviderProps) => {
	const [vehicleInformation, setVehicleInformation] = useState<
		VehicleWithClientsDatum[]
	>([]);
	const [searchResultVehicle, setsearchResultVehicle] =
		useState<VehicleWithClientsDatum>({} as VehicleWithClientsDatum);

	const [vehicleHistory, setVehicleHistory] = useState<ListVehicleReviewDatum[]>(
		[]
	);

	const [historyVehicle, setHistoryVehicle] = useState<ListVehicleReviewDatum[]>(
		[]
	);
	const navigate = useNavigate();
	const { tokenApi } = useAuth();

	const registerVehicle = async ({
		placa,
		color,
		kilometraje,
		anio,
		marca,
		modelo,
		combustible,
		fecha_ingreso,
		hora_ingreso,
		motivo_ingreso,
		clientes,
	}: RegisterVehicle): Promise<void> => {
		try {
			await axiosClient.post<VehicleResponse>(
				"/api/vehiculos",
				{
					data: {
						placa,
						color,
						kilometraje,
						anio,
						marca,
						modelo,
						combustible,
						fecha_ingreso,
						hora_ingreso: `${hora_ingreso}:00`,
						motivo_ingreso,
						clientes: [clientes],
					},
				},
				{ headers: { Authorization: `Bearer ${tokenApi}` } }
			);
			const res = await swal("Vehiculo registrado!", "", "success");
			if (res) {
				window.location.reload();
				navigate("/home");
			}
			window.location.href = "/home";
		} catch (error) {
			console.error(error);
		}
	};

	const registerVehicleReview = async ({
		detalles_revision,
		fecha_salida,
		tiempo_reparacion,
		peizas_cambiadas,
		extras,
		detalles_extra,
		precio,
		vehiculos,
		users_permissions_users,
	}: RegisterVehicleReview): Promise<void> => {
		try {
			await axiosClient.post<RegisterVehicleReview>(
				"/api/revisions",
				{
					data: {
						detalles_revision,
						fecha_salida,
						tiempo_reparacion,
						peizas_cambiadas,
						extras,
						detalles_extra,
						precio,
						vehiculos,
						users_permissions_users,
					},
				},
				{
					headers: {
						Authorization: `Bearer ${tokenApi}`,
					},
				}
			);
			navigate("/home");
		} catch (error) {
			console.error(error);
		}
	};

	const getVehicleInformationWithClients = async (): Promise<void> => {
		try {
			const { data } = await axiosClient.get<VehicleWithClients>(
				"api/vehiculos?populate=*",
				{ headers: { Authorization: `Bearer ${tokenApi}` } }
			);
			setVehicleInformation(data.data);
			console.log(data.data);
		} catch (error) {
			console.error(error);
		}
	};

	const getReviewVehicle = async (): Promise<void> => {
		try {
			const { data } = await axiosClient.get<ListVehicleReview>(
				"/api/revisions?populate=*",
				{
					headers: { Authorization: `Bearer ${tokenApi}` },
				}
			);
			setVehicleHistory(data.data);
		} catch (error) {
			console.error(error);
		}
	};
	console.log(vehicleHistory);

	const listReviewsVehicle = (plate: string) => {
		const listReviews = vehicleHistory.filter((list) =>
			list?.attributes.vehiculos.data[0]?.attributes.placa.includes(plate)
		);
		setHistoryVehicle(listReviews);
	};

	useEffect(() => {
		if (tokenApi) {
			getVehicleInformationWithClients();
			getReviewVehicle();
		}
	}, [tokenApi]);

	const searchForPlate = (plate: string): void => {
		const informationVehicle = vehicleInformation.find(
			(search) => search.attributes.placa === plate
		);

		if (informationVehicle) {
			setsearchResultVehicle(informationVehicle as VehicleWithClientsDatum);
		} else {
			swal("Placa no encontrada", "", "error");
		}
	};

	return (
		<VehicleContext.Provider
			value={{
				registerVehicle,
				registerVehicleReview,
				searchForPlate,
				searchResultVehicle,
				listReviewsVehicle,
				vehicleHistory,
				historyVehicle,
			}}
		>
			{children}
		</VehicleContext.Provider>
	);
};
