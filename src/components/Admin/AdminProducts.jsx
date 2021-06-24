import React from 'react'
import { productsRequest } from '../../services/products'
import { AdminEachProduct } from './AdminEachProduct'

export const AdminProducts = () => {

  const [products, setProducts] = React.useState([])

  productsRequest().then(res => setProducts(res.products))

  return (
    <section className="container-fluid p-3 w-100 col">
      <h3 className="w-100 text-center ">Lista de productos</h3>
      <div className="d-flex w-100 justify-content-end">
        <button className="btn btn-danger me-3">Agregar producto</button>
      </div>
      <table className="table table-sm table-hover w-100 mt-3 mx-2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio</th>
            {/* <th>Imagen</th> */}
            <th>Entrada</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <AdminEachProduct product={product} key={index}/>
          ))}
        </tbody>
      </table>
    </section>
  )
}
