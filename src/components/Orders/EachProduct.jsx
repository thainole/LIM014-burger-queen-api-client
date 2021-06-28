import React from 'react'

export const EachProduct = ({product, index}) => {
  return (
    <div className="card cardsWidth m-2" width="9rem" key={index}>  
      <img src={product.image} className="card-img-top imgCardSize" alt="" />
      <div className="card-body p-1 text-center">
        <p className="m-auto fw-bold">{product.name}</p>
        <p className="m-auto">S/. {product.price}</p>
      </div>
      <button className="btn btn-danger p-1 m-1">Agregar</button>
    </div>
  )
}
