import React from 'react';
import { SummaryProd } from './SummaryProd';

export const Summary = ({state, setState, handleQty, initialValues, /* handleRemove */}) => {
  
  const totalSum = products => {
    const total = products.reduce((acc, item) => acc + item.price* item.amount, 0);
    return total;
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name] : value})
  }

  //const dataStore

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('cliiiiiickkkkk enviar')
   // state.totalPrice = totalSum(state.products)
  }
  
  return (
<form className="orderList" onSubmit={handleSubmit}>
      <h3>Resumen del pedido</h3>
      <section className="customerInfo">
        <p>Cliente : </p>
        <input
          type="text"
          name="client"
          onChange={handleInputChange}
          value={state.client}
          required
        />
        {/* <p>Mesero: </p>
        <input
          type="text"
          name="server"
          onChange={handleInputChange}
          value={state.server}
          required
        /> */}
      </section>
      <section className="orderDetails">
        <div className="titles">
          <h4>Productos</h4>
          <h4>Precio</h4>
        </div>
        <aside className="sumary">
          {state.products.map((item) => (
            <SummaryProd
              key={item._id}
              item={item}
              handleQty={handleQty}
              //handleRemove={handleRemove}
            />
          ))}
          {
            state.products.length > 0 ?
            <h3 className="h3">Total:&nbsp;&nbsp;&nbsp;S/. {totalSum(state.products)}</h3>
            : <h5>No has agregado ningún producto :(</h5>
          }

        </aside>
      </section>
      <div>
        {
           state.products.length > 0 ?
           <>
            <button className="submitButton grey"
              onClick={e=> {
                e.preventDefault()
                setState(initialValues)
              }}>
              Borrar orden
            </button>
            <button className="submitButton" >
              Enviar a cocina
            </button>
          </>
         : ''
        }
      </div>
    </form>
  )
}
