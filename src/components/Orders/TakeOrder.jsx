import React from 'react'
import {Products} from './Products'
import { Summary } from './Summary'

export const TakeOrder = () => {

  const initialValues = {
    userId: "",     //Id usuaria que creó la orden - string
    client: "",     //Clienta para quien se creó la orden - string
    products: [],   //Productos - array
    status: "",
    dateEntry: new Date(),
    dateProcessed: new Date()
  }

  const [state, setState] = React.useState(initialValues);
  const chosenProduct = (product) => {
    setState((prev) => ({...prev, products: [...prev.products, product]}))
  }

  const handleQty = (id, sign) => {
    //console.log(id, sign)
    const filtering = state.products.map((item) => {
      if(item._id === id){
        if(sign === "+"){
          return {...item, qty: item.qty +1 }
        } else if(sign === "-" && item.qty > 1){
          return { ...item, qty: item.qty -1}
        }
      }
      return item;
    })
    setState((prev) => ({...prev, products: filtering}))
  }
  const handleRemove = (id) => {
    const newList = state.products.filter(item => item._id !== id)
    setState((prev) => ({...prev, products: newList}))
  }

  return (
    <section className="container-field p-2 w-100 d-flex justify-content-md-between justify-content-lg-start">
      <Products 
        chosenProduct={chosenProduct}
        state={state}
        handleQty={handleQty}
      />
      <p className="hr-style m-1" />
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
