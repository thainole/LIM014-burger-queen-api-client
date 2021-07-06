import React from 'react'
import { Cards } from './Cards'
import { getFn } from '../../services/crud'

export const ChefView = () => {

  const [orders, setOrders] = React.useState([]);
  
  const getOrders = async() => {
    try {
      const storedToken = localStorage.getItem('token');
      const response = await getFn(storedToken, 'orders');
      setOrders(response);
    }
    catch (err) {
      console.log(err)
    }
  };

  React.useEffect(() => {
    getOrders();
  }, []);
 
  return (
    <div className="container-field d-flex flexWrap p-2 w-100">
      {
        orders
        .filter(order => order.status === 'pending')
        .map((order, index) => (
          < Cards order={order} key={index} getOrders={getOrders}/>
        ))
      }
    </div>
  )
}
