import React from "react";
import { productsRequest, deleteProduct, updateProduct } from "../../services/products";
import { AdminEachProduct } from "./AdminEachProduct";
import { ModalAddProduct } from "./ModalAddProduct";

export const AdminProducts = () => {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      const response = await productsRequest(storedToken);
      console.log(response)
      setProducts(response);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const deleteProducts = async(id) => {
    console.log(id);
    try {
      const storedToken = localStorage.getItem("token");
      await deleteProduct(storedToken, id);
      await getProducts();
    } catch (err) {
      console.log(err);
    }
  };



  const updateProducts = async(id) => {
    console.log(id);
    try {
      const storedToken = localStorage.getItem("token");
      await updateProduct(storedToken, id/* , obj */);
      await getProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="container-fluid p-3 w-100 col">
      <h3 className="w-100 text-center ">Lista de productos</h3>
      <div className="d-flex w-100 justify-content-end">
        <ModalAddProduct getProducts={getProducts}/>
      </div>
      <table className="table table-sm table-hover w-100 mt-3 mx-2">
        <thead>
          <tr>
            {/* <th>Id</th> */}
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
            <AdminEachProduct 
            product={product} 
            key={index}
            updateProducts={updateProducts}
            deleteProducts={deleteProducts}
        />
          ))}
        </tbody>
      </table>
    </section>
  );
};
