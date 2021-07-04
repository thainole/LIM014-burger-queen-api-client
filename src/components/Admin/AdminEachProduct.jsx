import React from 'react';
import moment from 'moment';

export const AdminEachProduct = ({product, deleteProducts, updateProducts/* handleShow */}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>{product.price}</td>
      <td>{moment(product.dateEntry).format("Do MMM YY, h:mm:ss a")}</td>
      <td className="btn" onClick={()=> deleteProducts(product._id)}>🗑</td>
      <td className="btn" onClick={()=> updateProducts(product)}>✏</td> {/* onClick={handleShow} */}
    </tr>
  )
}
