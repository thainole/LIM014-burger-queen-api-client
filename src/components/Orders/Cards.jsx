import React from 'react'
import moment from 'moment';
import { updateFn, deleteFn } from '../../services/crud';

const jwtDecode = require('jwt-decode')

export const Cards = ({order, getOrders}) => {

  const storedToken = localStorage.getItem('token');

  const setUser = () => {
    const decodedToken = jwtDecode.default(storedToken);
    return decodedToken.email
  };

  const sendingMeal = async(newStatus) => {
    order.status = newStatus;
    // eslint-disable-next-line no-unused-expressions
    order.status === 'delivered' ? order.dateProcessed = new Date() : null
    await updateFn(storedToken, 'orders', order);
    await getOrders();
  };
  
  const deleteOrder = async (obj) => {
    await deleteFn(storedToken, 'orders', obj);
    await getOrders();
  };

  return (
    <aside className="card ordersWidth m-3 py-2" >
      <div>
        <div className="card-body p-1 my-1 text-center">
          <h6 className="m-auto">Cliente: {order.client}</h6>
        </div>
        <div className="card-body p-2">
          <p className="fw-bold mb-0"><strong>Estado:</strong> {order.status}</p>
          <p className="fw-bold mb-0"><strong>Inicio:</strong> {moment(order.dateEntry).format('lll')}</p>
          {
            order.status === 'delivered'
            ? <p className="fw-bold mb-0"><strong>Fin:</strong> {moment(order.dateProcessed).format('lll')}</p>
            : <></>
          }
        </div>
      </div> 
      <hr />
      <div className="card-body p-2">
      { order.products ?
        order.products.map((prod) => (
          <div className="d-flex justify-content-between" key={prod.product._id}>
            <p>{prod.qty}&nbsp;{prod.product.name}</p>
            <p>S/.{prod.product.price}</p>
          </div>
        )): <></>
      }
      </div>
      <div className="d-flex text-center w-100">
      {
        order.status === 'delivered' || order.status === 'canceled'
        ? <button className="btn btn-secondary p-1 w-75 m-auto" 
            onClick={()=>deleteOrder(order)}>Eliminar</button>

        : order.status === 'pending'
          ? setUser() ==='chef@bq.com' 
              ? <button className="btn btn-danger p-1 m-auto w-75" 
                  onClick={()=>sendingMeal('delivering')}>Orden lista</button>
              : <button className="btn btn-secondary p-1 m-auto disabled w-75">Preparando</button>   

          : <button className="btn btn-danger p-1 w-75 m-auto"
              onClick={()=>sendingMeal('delivered')}>Entregar</button>
      } 
      </div>
    </aside>
  )
}
