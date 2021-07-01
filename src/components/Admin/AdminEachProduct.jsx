import React from 'react'

export const AdminEachProduct = ({product, deleteProducts, handleShow}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>{product.price}</td>
      <td>{product.dateEntry}</td>
      <td className="btn" onClick={()=> deleteProducts(product._id)}>🗑</td>
      <td className="btn" onClick={handleShow}>✏</td>
    </tr>
  )
}
