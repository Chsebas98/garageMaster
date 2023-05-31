import { Link } from "react-router-dom";
import "../styles/Register.css";

export const RegisterPage = () => {
  return (
    <div className="container-register">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" id="form">
            <h2 className="title">Registrate</h2>
            <div className="input-signup">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-signup">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-signup">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Registrar" className="btn-login solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <Link to="/login" className="btn-login transparent">Login</Link>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
