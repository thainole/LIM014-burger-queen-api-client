import React from 'react';

export const SummaryProd = ({products, handleQty, handleRemove}) => {
  return (
    <>
      { products.map((item) => console.log(item) || (
        <section className="d-flex justify-content-between" key={item.product._id}>
          <div>
            <p className="mb-0">{item.product.name}</p>
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-light btn-outline-secondary p-1 me-1"
                onClick={(e) => {
                  e.preventDefault()
                  handleQty(item.product._id, "-")}}>-</button>
              <p>{item.qty}</p>
              <button type="button" className="btn btn-light btn-outline-secondary mx-1 p-1"
                onClick={(e) => {
                  e.preventDefault()
                  handleQty(item.product._id, "+")}}>+</button>
              <button type="button" className="btn btn-light btn-outline-secondary p-1"
                onClick={(e) => {
                  e.preventDefault()
                  handleRemove(item.product._id)}}>🗑</button>
            </div>
          </div>
          <p className="mb-0">S/. {item.product.price * item.qty}</p>
        </section>
      ))}
    </>
  )
}
