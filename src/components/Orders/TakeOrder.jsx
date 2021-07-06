import React from 'react'
import { Products } from './Products'
import { Summary } from './Summary'

export const TakeOrder = () => {

  const initialValues = { client: "", products: [] }

  const [state, setState] = React.useState(initialValues);
  const chosenProduct = (product) => {
    setState((prev) => ({...prev, products: [...prev.products, product]}))
  }

  const handleQty = (id, sign) => {
    const filtering = state.products.map((item) => {
      if(item.product._id === id){
        if(sign === "+"){
          return {product:{...item.product}, qty: item.qty +1 }
        } else if(sign === "-" && item.qty > 1){
          return {product:{...item.product}, qty: item.qty -1}
        }
      }
      return item;
    })
    setState((prev) => ({...prev, products: filtering}))
  }
  const handleRemove = (e, id) => {
    e.preventDefault();
    const newList = state.products.filter(item => item.product._id !== id)
    setState((prev) => ({...prev, products: newList}))
  }

  return (
    <section className="container-field p-2 w-100 d-flex justify-content-around ">
      <Products 
        chosenProduct={chosenProduct}
        state={state}
        handleQty={handleQty}
      />
      <p className="hr-style" />
      <Summary 
        state={state}
        setState={setState}
        handleQty={handleQty}
        handleRemove={handleRemove}
        initialValues={initialValues}
      />
    </section>
  )
}
