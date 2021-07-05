import React from 'react';
import { SummaryProd } from './SummaryProd';
import {postFn} from '../../services/crud'

export const Summary = ({state, setState, handleQty, initialValues, handleRemove }) => {
  const totalSum = (products) => {
    const total = products.reduce((acc, item) => acc + item.product.price * item.qty, 0);
    return total;
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name] : value})
  }

  let order = {
    userId: '60e24d1b393fb400152bef97', // aqui le metemos recién la función que necesitemos para obtener el userId
    client: state.client,
    products: state.products.map((item) => ({
      productId: item.product._id,
      qty: item.qty
    }))
  }
  const dataStore = async(order) => {
    const storedToken = localStorage.getItem('token');
    await postFn(storedToken, 'orders', order);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order)
    dataStore(state);
    setState(initialValues);
  };
  
  return (
    <form onSubmit={handleSubmit} className="my-1 me-1 pe-1 ms-lg-3 ">
      <h4>Resumen del pedido</h4>
      <section className="mb-3 mt-3 d-flex align-items-center">
        <label htmlFor="clientName" className="form-label me-2 mb-1">Cliente:</label>
        <input type="text" className="form-control" id="clientName" aria-describedby="clientName"
          name="client" onChange={handleInputChange} value={state.client} required />
      </section>
      <section>
        <div className="d-flex justify-content-between">
          <h6><u>Productos</u></h6>
          <h6><u>Precio</u></h6>
        </div>
        <aside>
          <SummaryProd
            products={state.products}
            handleQty={handleQty}
            handleRemove={handleRemove}
          />
          < br />
          {
            state.products.length > 0 ?
            <h6>Total:&nbsp;&nbsp;&nbsp;S/. { totalSum(state.products) }</h6>
            : <p>No has agregado ningún producto :(</p>
          }
        </aside>
      </section>
      <div>
        {
          state.products.length > 0 ?
          <div className="d-flex justify-content-around mt-3">
            <button className="btn btn-secondary"
              onClick={e=> {
                e.preventDefault()
                setState(initialValues)
              }}>
              Borrar orden
            </button>
            <button className="btn btn-danger">
              Enviar a cocina
            </button>
          </div>
        : ''
        }
      </div>
    </form>
  )
}
