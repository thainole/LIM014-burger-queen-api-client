import React from 'react';
import moment from 'moment';

export const AdminEachProduct = ({product, deleteProducts, updateProducts}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td className="text-center">{product.price}</td>
      <td className="text-center">{moment(product.dateEntry).format("Do MMM YY, h:mm:ss a")}</td>
      <td className="btn ms-2" onClick={()=> deleteProducts(product)}>🗑</td>
      <td className="btn ms-1" onClick={()=> updateProducts(product)}>✏</td>
    </tr>
  )
}
