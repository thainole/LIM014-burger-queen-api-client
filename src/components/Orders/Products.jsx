import React from 'react'

export const Products = () => {
    const addProducts =()=>{
        console.log('clickkk each product card')
    }
    return (
        <div className="div">
        <img /* src={product.img} */ alt="" />
        <div>
          <li>{/* {product.name} */}Café con leche</li>
          <p>S/. {/* {product.price} */}</p>
        </div>
        <button
          onClick={() => addProducts(/* product.id */)}
        >
          Agregar
        </button>
    </div>
    )
}
