import React from 'react'
import { Modal, Form } from 'react-bootstrap';
import {postProduct} from '../../services/products'

export const ModalAddProduct = ({getProducts, show, handleClose, updateProducts}) => {

  const initialValues = {
    name: '',
    price: '',
    image: '',
    type: '',
    dataEntry: ''
  }
  const [values, setValues] = React.useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'price'
      ? setValues({...values, [name] : Number(value)})
      : setValues({...values, [name] : value, dataEntry: new Date()})
    // no muestra la fecha :( pero sí la envía lol 
  };

  // si mando la fecha en el createProduct o sendProduct, la manda como ''
  const createProduct = async () => {
    const storedToken = localStorage.getItem('token');
    // setValues({...values, dataEntry: new Date()})
    await postProduct(storedToken, values);
    await setValues(initialValues);
    await getProducts();
  }

  const sendProduct = async() => {
    await createProduct();
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>Nuevo producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput1">
            <Form.Label className="me-2">Nombre: </Form.Label>
            <Form.Control size="sm" type="text" name="name" value={values.name} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput2">
            <Form.Label className="me-4">Precio: </Form.Label>
            <Form.Control className="w-25 me-3" size="sm" type="number" min ="0" name="price" value={values.price} onChange={handleChange}/>
            <Form.Label className="me-2">Tipo: </Form.Label>
            <select className="form-select w-50" aria-label="Default select example" name="type" onChange={handleChange}>
              <option>Seleccionar</option>
              <option value="Desayuno">Desayuno</option>
              <option value="Hamburguesas">Hamburguesa</option>
              <option value="Acompañamientos">Acompañamiento</option>
              <option value="Bebidas">Bebida</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput3">
            <Form.Label className="me-2">Imagen: </Form.Label>
            <Form.Control className="" size="sm" type="text" name="image" value={values.image} onChange={handleChange}/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary"  onClick={() => {
          handleClose();
          setValues(initialValues);
        }}>
          Descartar
        </button>
        <button className="btn btn-danger"  onClick={()=>sendProduct()}>
          Guardar
        </button>
      </Modal.Footer>
    </Modal>
  )
}
