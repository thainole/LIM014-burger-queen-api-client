import React from 'react'
import burger from '../img/burger.png'

export const Login = () => {
  return (
    <section className="container row d-flex align-items-center vh-100 mx-auto bg-light text-dark">
      <figure className="col " >
        <img src={burger} className="img-fluid" alt="burger" />
      </figure>
      <form className="col text-center ">
          <h1> Burger Queen </h1>
          <h6 className="mt-4 mb-3">Por favor, ingrese sus datos</h6>
          {/* <input type="email" placeholder="E-mail" className="mt-3 border border-1 rounded-pill" required />
          <input type="password" placeholder="Contraseña" className="mt-3 border border-1 rounded-pill" required />
          <button type="submit" class="btn btn-outline-danger">Ingresar</button> */}
          <div class="mb-3 px-3">
            <input type="email" class="form-control" /* id="exampleInputEmail1" */ placeholder="E-mail" aria-describedby="email" />
          </div>
          <div class="mb-3 px-3">
            <input type="password" class="form-control" placeholder="Contraseña" /* id="exampleInputPassword1" */ />
          </div>
          <button type="submit" class="btn btn-danger">Acceder</button>
      </form>
    </section>
  )
}
