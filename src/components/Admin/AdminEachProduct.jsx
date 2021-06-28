import React from 'react'

export const AdminEachProduct = ({product}) => {
  return (
    <tr>
      {/* <td>{product.id}</td> */}
      <td>{product.name}</td>
      <td>{product.type}</td>
      <td>{product.price}</td>
      {/* <td>{product.image}</td> */}
      <td>{product.dateEntry}</td>
      <td>🗑</td>
      <td>✏</td>
    </tr>
  )
}
