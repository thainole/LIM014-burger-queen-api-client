import React from "react";
import {
  productsRequest,
  deleteProduct,
  updateProduct,
} from "../../services/products";
import { AdminEachProduct } from "./AdminEachProduct";
import { ModalAddProduct } from "./ModalAddProduct";

export const AdminProducts = () => {
  const [products, setProducts] = React.useState([]);
  const storedToken = localStorage.getItem('token');

  const getProducts = async () => {
    try {
      //TRAE TODOS LOS PRODUCTOS AGREGADOS EN EL MODAL ADD PRODUCTS
      const response = await productsRequest(storedToken);
      setProducts(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProducts = async (id) => {
    try {
      await deleteProduct(storedToken, id);
      await getProducts();
    } catch (err) {
      console.log(err);
    }
  };
  //---------------------- SETTEO MODAL ---------------------
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //--------------- TRAYENDO VALUES DEL MODAL.ADD ---------------
  const initialValues = {
    name: "",
    price: "",
    image: "",
    type: "",
  };
  const [values, setValues] = React.useState(initialValues);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "price"
      ? setValues({ ...values, [name]: Number(value) })
      : setValues({ ...values, [name]: value });
  };
  //--------------------------------------------------------

  const updateProducts =(objProduct) => {
    console.log(objProduct);
    handleShow();
    setValues(objProduct);// muestra los valores al modal
  }

  const saveModal = async (newObjProduct) => {
    try {//newObjectProduct es el objeto 
      await updateProduct(storedToken, newObjProduct);
      await getProducts();
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section className="container-fluid p-3 w-100 col">
      <h3 className="w-100 text-center ">Lista de productos</h3>
      <div className="d-flex w-100 justify-content-end">
        <button className="btn btn-danger" onClick={handleShow}>
          Agregar producto
        </button>
        <ModalAddProduct
          initialValues={initialValues}
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          getProducts={getProducts}
          storedToken={storedToken}
          show={show}
          handleClose={handleClose}
          saveModal={saveModal}
        />
      </div>
      <table className="table table-sm table-hover w-100 mt-3 mx-2">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio</th>
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
              deleteProducts={deleteProducts}
              handleShow={handleShow}
              updateProducts={updateProducts}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};