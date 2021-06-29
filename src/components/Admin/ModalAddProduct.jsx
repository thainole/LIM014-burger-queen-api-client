import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import {postProduct} from '../../services/products'

export const ModalAddProduct = () => {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [type, setType] = React.useState('')
  const [image, setImage] = React.useState('')

  const sendNewProduct = {
    name: name,
    price: price,
    image: image,
    type: type,
  }

  const sendData = async () => {
    console.log(sendNewProduct);
    const storedToken = localStorage.getItem('token');
    const response = await postProduct(storedToken, sendNewProduct);
    console.log(response);
    handleClose();
  }

  return (
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
          <Button variant="danger" onClick={()=>sendData()}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
