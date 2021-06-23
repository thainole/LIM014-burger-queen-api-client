import React from "react";
import burger from "../img/burger.png";
import { getToken } from '../services/auth.js';
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const user = {
    email: email,
    password: password,
  }

  let history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await getToken(user);
      changingPage(response);
    }
    catch (err) {
      console.log(err)
    }
  };

  const changingPage = (response) => {
    response.roles.admin === true
    ? history.push("/admin")
    : history.push("/pedidos")
  }

  return (
    <section className="container row d-flex align-items-center vh-100 mx-auto bg-light text-dark">
      <figure className="col ">
        <img src={burger} className="img-fluid" alt="burger" />
      </figure>
      <form className="col text-center" onSubmit={(e) => handleSubmit(e)}>
        <h1> Burger Queen </h1>
        <h6 className="mt-4 mb-3">Por favor, ingrese sus datos</h6>
        <div className="mb-3 px-3">
          <input
            type="email"
            className="form-control"
            placeholder="E-mail"
            aria-describedby="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 px-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Acceder
        </button>
      </form>
    </section>
  );
};
