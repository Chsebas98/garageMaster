import { Link } from "react-router-dom";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Garage Master
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-opt navbar-nav me-auto mb-3 mt-2">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Cars</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">Reviews</Link>
              </li>
            </ul>
            <Link to="/login" className="navbar-btn-login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
