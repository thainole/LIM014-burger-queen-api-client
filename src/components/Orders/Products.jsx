import React from 'react'
import { productsRequest } from '../../services/products'

export const Products = () => {

  const [state, setState] = React.useState([])

   productsRequest().then(res => setState(res.products))

  
  return (
    <section className="containerProd">
      <h5>Hi soy productitos</h5>
       <article className="d-flex flexWrap ">
          {state.map((product) => (
            <div className="card cardsWidth m-2" width="9rem" key={product.id}>  
              <img src={product.image} className="card-img-top imgCardSize" alt="" />
              <div className="card-body p-1 text-center">
                <p className="m-auto fw-bold">{product.name}</p>
                <p className="m-auto">S/. {product.price}</p>
              </div>
              <button className="btn btn-danger p-1 m-1">Agregar</button>
            </div>
          ))}
      </article>
    </section>
  )
}
