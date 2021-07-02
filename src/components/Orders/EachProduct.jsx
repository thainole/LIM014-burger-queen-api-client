import React from 'react'

export const EachProduct = ({product, chosenProduct, state, handleQty}) => {
  //console.log(state)

  const addProducts = (id) => {
    console.log(id)//60dd318c2bd131001725860e cafe con leche
    const findProduct = state.products.find(obj => obj._id === id)
    //console.log(findProduct)
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
