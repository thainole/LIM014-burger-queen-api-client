import React from 'react';

export const SummaryProd = ({products, handleQty, handleRemove}) => {

  const handleItem = (e, item, sign) =>{
    e.preventDefault();
    handleQty(item.product._id, sign)
  };
  
  return (
    <>
      { products.map((item) =>(
        <section className="d-flex justify-content-between fontSummary" key={item.product._id}>
          <div>
            <p className="mb-1">{item.product.name}</p>
            <div className="d-flex align-items-center mb-2">
              <button type="button" className="btn btn-light btn-outline-secondary p-1 mx-1" 
                onClick={(e)=>handleItem(e, item, '-')}>-</button>
              <p className="mb-1">{item.qty}</p>
              <button type="button" className="btn btn-light btn-outline-secondary mx-1 p-1"
                onClick={(e)=>handleItem(e, item, '+')}>+</button>
              <button type="button" className="btn btn-light btn-outline-secondary p-1"
                onClick={(e) => {handleRemove(e, item.product._id)}}>🗑</button>
            </div>
          </div>
          <p className="mb-0">S/. {item.product.price * item.qty}</p>
        </section>
      ))}
    </>
  )
}
