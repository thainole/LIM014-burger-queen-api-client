import React from 'react'
import moment from 'moment';
import { updateFn, deleteFn } from '../../services/crud';

export const Cards = ({order, getOrders}) => {

  const storedToken = localStorage.getItem('token');

  const sendingMeal = async(newStatus) => {
    order.status = newStatus;
    await updateFn(storedToken, 'orders', order);
    await getOrders()
  }
  const deleteOrder = async (obj) => {
    await deleteFn(storedToken, 'orders', obj);
    await getOrders();
  };

  return (
    <aside className="card ordersWidth m-3 py-2" >
      <div>
        {/* {
          order.status === 'delivered' || order.status === 'canceled'
          ? <div className="w-100 d-flex justify-content-end">
              <button className="btn btn-light  p-1 mx-2" onClick={()=>deleteOrder(order)}>x</button>
            </div>
          : null
        } */}
        <div className="card-body p-1 my-1 text-center">
          <h6 className="m-auto">Cliente: {order.client}</h6>
        </div>
        <div className="card-body p-2">
          <p className="fw-bold mb-0"><strong>Estado:</strong> {order.status}</p>
          <p className="fw-bold mb-0"><strong>Fecha:</strong> {moment(order.dateEntry).format('lll')}</p>
        </div>
      </div> 
      <hr />
      <div className="card-body p-2">
      { order.products ?
        order.products.map((prod) => (
          <div className="d-flex justify-content-between" key={prod.product._id}>
            <p>{prod.qty}&nbsp;{prod.product.name}</p>
            <p>S/. {prod.product.price}</p>
          </div>
        )): null}
      </div>
      <div className="d-flex text-center w-100">
      {
        order.status === 'delivered' || order.status === 'canceled'
        ? <button className="btn btn-secondary p-1 w-75 m-auto" 
            onClick={()=>deleteOrder(order)}>Eliminar</button>
        : order.status === 'pending' 
          ? <>
              <button className="btn btn-danger p-1 mx-2  w-50" 
                  onClick={()=>sendingMeal('delivering')}>Preparando</button>
              <button className="btn btn-secondary p-1 mx-2 w-50"
                onClick={()=>sendingMeal('canceled')}>Cancelar</button>
            </>     
          : <button className="btn btn-danger p-1 w-75 m-auto"
              onClick={()=>sendingMeal('delivered')}>Entregar</button>
      } 
      </div>
    </aside>
  )
}
