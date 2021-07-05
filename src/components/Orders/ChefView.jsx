import React from 'react'
import { Cards } from './Cards'
import { getFn, deleteFn } from '../../services/crud'

export const ChefView = () => {
  const [orders, setOrders] = React.useState([]);
  const storedToken = localStorage.getItem('token');

  const getOrders = async() => {
    try {
      const response = await getFn(storedToken, 'orders');
      setOrders(response);
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteOrder = async (obj) => {
    try {
      await deleteFn(storedToken, 'orders', obj);
      await getOrders();
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container-field p-2 w-100">
      {
        orders.map(order => (
          order.status === 'pending' ? (
          < Cards order={order} deleteOrder={deleteOrder} />
        ): null ))
      }
      
    </div>
  )
}
