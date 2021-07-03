import React from 'react'

export const EachProduct = ({product, chosenProduct, state, handleQty}) => {

  const addProducts = (id) => {
    // console.log(id)
    const findProduct = state.products.find(obj => obj._id === id)
    if (findProduct) {
      return handleQty(id, '+')
    } else {
      return chosenProduct({ ...product, qty: 1  });
    }
  }

  return (
    <div className="card cardsWidth m-2" >  
      <img src={product.image} className="card-img-top imgCardSize" alt="" />
      <div className="card-body p-1 text-center">
        <p className="m-auto fw-bold">{product.name}</p>
        <p className="m-auto">S/. {product.price}</p>
      </div>
      <button className="btn btn-danger p-1 m-1" onClick={()=> addProducts(product._id) }>Agregar</button>
    </div>
  )
}
