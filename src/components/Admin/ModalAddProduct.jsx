import React from 'react'
import { Modal, Form } from 'react-bootstrap';
import {postProduct} from '../../services/products'

export const ModalAddProduct = ({getProducts, show, handleClose, updateProducts}) => {

  const initialValues = {
    name: '',
    price: '',
    image: '',
    type: '',
    dateEntry: new Date()
  }
  const [values, setValues] = React.useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'price'
      ? setValues({...values, [name] : Number(value)})
      : setValues({...values, [name] : value})
  };

  const createProduct = async () => {
    const storedToken = localStorage.getItem('token');
    await postProduct(storedToken, values);
    await setValues(initialValues);
    await getProducts();
  }

<<<<<<< HEAD
  const sendProduct = async() => {
    await createProduct();
=======
  const createProduct = async () => {
    console.log(sendNewProduct);// mandamos objeto sin dateEntry
    const storedToken = localStorage.getItem('token');
    const response = await postProduct(storedToken, sendNewProduct);
    console.log(response); // recibimos con dateEntry
>>>>>>> 4136d105eec6b17fd907f4afbff391d113513eee
    handleClose();
    await getProducts()
  }

  return (
<<<<<<< HEAD
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
=======
    <>
      <Button variant="danger" onClick={handleShow}>
        Agregar producto
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput1">
              <Form.Label className="me-2">Nombre: </Form.Label>
              <Form.Control size="sm" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput2">
              <Form.Label className="me-4">Precio: </Form.Label>
              <Form.Control className="w-25 me-3" size="sm" type="number" min ="0" value={price} onChange={(e)=>setPrice(Number(e.target.value))}/>
              <Form.Label className="me-2">Tipo: </Form.Label>
              <select className="form-select w-50" aria-label="Default select example" onChange={(e)=>setType(e.target.value)}>
                <option>Seleccionar</option>
                <option value="Desayuno">Desayuno</option>
                <option value="Hamburguesas">Hamburguesa</option>
                <option value="Acompañamientos">Acompañamiento</option>
                <option value="Bebidas">Bebida</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput3">
              <Form.Label className="me-2">Imagen: </Form.Label>
              <Form.Control className="" size="sm" type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Descartar
          </Button>
          <Button variant="danger" onClick={()=>createProduct()}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
>>>>>>> 4136d105eec6b17fd907f4afbff391d113513eee
  )
}
