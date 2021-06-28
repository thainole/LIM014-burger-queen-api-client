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
    ? history.push("/admin/usuarios")
    : history.push("/pedidos/hacer-pedidos")
  }

  return (
    <main className="vw-100 vh-100 bg-light d-flex align-items-center">   
      <section className="container row d-flex align-items-center mx-auto text-dark flexWrap">
        <figure className="col text-center mt-3">
          <img src={burger} className="img-fluid" alt="burger" width="70%"/>
        </figure>
        <form className="col text-center my-3 px-4" onSubmit={(e) => handleSubmit(e)}>
          <h1> BURGER QUEEN </h1>
          <h6 className="mt-5 mb-4">Por favor, ingrese sus datos</h6>
          <div className="mb-3 px-3 mb-lg-4 px-lg-5">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              aria-describedby="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 px-3 mb-lg-4 px-lg-5">
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
    </main>
  );
};
