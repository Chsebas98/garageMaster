import { useState } from "react";
import { CardOptionsInterface } from "../interfaces/Card-Options.interface";
import { Link } from "react-router-dom";
import "./styles/CardOptions.css";

const CardOptions = ({ title, icon, dir }: CardOptionsInterface) => {
	const [titulo] = useState(title);
	const [icono] = useState(icon);
	return (
		<>
			<div className="card ccO">
				<div className="card-body">
					<div className="card-container">
						<div className="row align-items-center imgbg">
							<div className="col-6">
								<h3>{titulo}</h3>
							</div>
							<div className="col-6 text-center">
								<Link to={dir}>
									<i className={icono}></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardOptions;
