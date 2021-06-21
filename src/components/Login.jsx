import React from 'react'
import burger from '../img/burger.png'
// import {postRequest} from '../services/auth.js'

export const Login = () => {

  const handleInputChange = (e) => {
    const {value} = e.target
    console.log(value)
    return value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="container row d-flex align-items-center vh-100 mx-auto bg-light text-dark">
      <figure className="col " >
        <img src={burger} className="img-fluid" alt="burger" />
      </figure>
      <form className="col text-center" onSubmit={handleSubmit}>
        <h1> Burger Queen </h1>
        <h6 className="mt-4 mb-3">Por favor, ingrese sus datos</h6>
        <div className="mb-3 px-3">
          <input type="email" className="form-control" placeholder="E-mail" aria-describedby="email"
            onChange={handleInputChange} />
        </div>
        <div className="mb-3 px-3">
          <input type="password" className="form-control" placeholder="Contraseña" onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-danger">Acceder</button>
      </form>
    </section>
  )
}
