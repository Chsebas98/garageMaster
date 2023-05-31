import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</BrowserRouter>
	);
};
