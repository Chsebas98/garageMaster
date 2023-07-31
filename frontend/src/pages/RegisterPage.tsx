import { Link } from "react-router-dom";
import "../styles/Register.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserRegister } from "../interfaces/register";
import { useAuth } from "../hooks/useAuth";

export const RegisterPage = () => {
  const [user, setUser] = useState<UserRegister>({
    username: "",
    email: "",
    password: "",
  });

  const { register, message, setMessage } = useAuth();

  const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ([user.username, user.email, user.password].includes("")) {
      alert("Todos los campos son obligatorios");
      return;
    }
    console.log(message)
    register(user);

    

    if(message !== "") {
      alert(message);
      return
    }
    //setMessage("");
    

    
  };
  return (
    <div className="container-register">
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={handleRegisterSubmit}
            className="sign-in-form"
            id="form"
          >
            <h2 className="title">Registrate</h2>
            <div className="input-signup">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="input-signup">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="input-signup">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleRegisterChange}
              />
            </div>
            <input
              type="submit"
              value="Registrar"
              className="btn-login solid"
            />
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
            <Link to="/login" className="btn-login transparent">
              Login
            </Link>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};
