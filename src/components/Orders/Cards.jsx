import React from 'react'
import { updateFn } from '../../services/crud';

export const Cards = ({order/* , deleteOrder */}) => {
  const mealCooked = async() => {
    const storedToken = localStorage.getItem('token');
    order.status = 'delivering';
    console.log(order)
    await updateFn(storedToken, 'orders', order);
  }

  return (
    <> 
    {/* { order.status === 'pending'
    ?  */}<aside className="card ordersWidth m-1 py-2">
        {/* <button onClick={()=>deleteOrder(order)}>Borrar orden </button> */}
        <div className="card-body p-1 my-1 text-center">
          <h6 className="m-auto">Cliente: {order.client}</h6>
        </div>
        <div className="card-body p-2">
          <p className="fw-bold mb-0">Estado: {order.status}</p>
          <p className="fw-bold mb-0">Fecha: {order.dateEntry}</p>
        </div>
        <div className="card-body p-2 d-flex">
        { order.products ?
          order.products.map((prod) => (
            <>
              <p>{prod.qty}&nbsp;&nbsp; {prod.product.name}</p>
              <p>S/. {prod.product.price}</p>
            </>
          )): null}
        </div>

        <button className="btn btn-danger p-1 mx-2 my-1" onClick={()=>mealCooked()}>Pedido Listo</button>
      </aside>
  {/* : null
  } */}
    </>
  )
}
