import React from 'react'

export const AdminEachProduct = ({product, deleteProducts, updateProducts}) => {
  return (
    <tr>
      {/* <td>{product.id}</td> */}
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>{product.price}</td>
      {/* <td>{product.image}</td> */}
      <td>{product.dateEntry}</td>
      <td onClick={()=> deleteProducts(product._id)}>🗑</td>
      <td onClick={()=> updateProducts(product._id)}>✏</td>
    </tr>
  )
}
