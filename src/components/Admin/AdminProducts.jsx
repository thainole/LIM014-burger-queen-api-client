import React from "react";
import { getFn, updateFn, deleteFn } from "../../services/crud";
import { AdminEachProduct } from "./AdminEachProduct";
import { ModalAddProduct } from "./ModalAddProduct";

export const AdminProducts = () => {

  const [products, setProducts] = React.useState([]);
  
  //---------------- RENDERIZANDO PRODUCTOS ------------------

  const getProducts = async () => {
    try {
      const storedToken = localStorage.getItem('token');
      const response = await getFn(storedToken, 'products');
      setProducts(response);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  //-------------------- SETTEO PARA MODAL ---------------------
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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

  const updateProducts =(objProduct) => {
    handleShow();
    setValues(objProduct);
  }

  const saveModal = async (newObjProduct) => {
    try {
      const storedToken = localStorage.getItem('token');
      await updateFn(storedToken, 'products', newObjProduct);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProducts = async (obj) => {
    try {
      const storedToken = localStorage.getItem('token');
      await deleteFn(storedToken, 'products', obj);
      await getProducts();
    } catch (err) {
      console.log(err);
    }
  };


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
          show={show}
          handleClose={handleClose}
          saveModal={saveModal}
        />
      </div>
      <table className="table table-sm  table-hover mt-3 mx-2">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th className="text-center">Precio</th>
            <th className="text-center">Entrada</th>
            <th>Opciones</th>
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
