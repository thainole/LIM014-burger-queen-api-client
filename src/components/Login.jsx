import React from "react";
import burger from "../img/burger.png";
import {postRequest} from '../services/auth.js';
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  let history = useHistory();

  const response = postRequest(email, password);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password);
    await response;
    await handleClick();
  };
  
  const handleClick = () => {
    response === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGM5MmMxM2NjNTMzNTBmMzkwNDk5ZGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNzk2ODg0LCJleHAiOjE2MjM4MDA0ODR9.8tDX3i4afFU7TAFfvg11ngvIJOYgZZ2oQDpLu0xYrpg"
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
