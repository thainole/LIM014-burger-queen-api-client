import React from 'react'
import {Products} from './Products'
import { Summary } from './Summary'

export const TakeOrder = () => {

  const initialValues = {
    userId: "",
    client: "",
    products: [],
    status: "",
    dateEntry: new Date(),
    dateProcessed: new Date()
  }

  const [state, setState] = React.useState(initialValues);
  const chosenProduct = (qty, product) => {
    setState((prev) => ({...prev, products: [...prev.products, qty, product]}))
  }
  const handleQty = (id, sign) => {
    const filtering = state.products.map((item) => {
      if(item._id === id){
        if(sign === "+"){
          return {...item, qty: item.qty +1 }
        } else if(sign === "-" && item.qty > 1){
          return { ...item, amount: item.qty -1}
        }
      }
      return item;
    })
    setState((prev) => ({...prev, products: filtering}))
  }

  return (
    <section className="container-field p-2 w-100 d-flex">
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
        // handleRemove={handleRemove}
        initialValues={initialValues}
      />
    </section>
  )
}
