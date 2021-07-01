import React from 'react'

export const EachProduct = ({product, chosenProduct, state, handleQty}) => {
  //console.log(key)

  const addProducts = (id) => {
    const findProduct = state.products.find(item => item.id === id)
    if (findProduct) {
      return handleQty(id, '+')
    } else {
      return chosenProduct({ ...product, amount: 1 });
    }
  }

  return (
    <div className="card cardsWidth m-2" width="9rem" >  
      <img src={product.image} className="card-img-top imgCardSize" alt="" />
      <div className="card-body p-1 text-center">
        <p className="m-auto fw-bold">{product.name}</p>
        <p className="m-auto">S/. {product.price}</p>
      </div>
      <button className="btn btn-danger p-1 m-1" onClick={()=> addProducts(product._id) }>Agregar</button>
    </div>
  )
}
