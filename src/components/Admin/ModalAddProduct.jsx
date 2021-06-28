import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export const ModalAddProduct = () => {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Form.Control size="sm" type="text"/>
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput2">
              <Form.Label className="me-4">Precio: </Form.Label>
              <Form.Control className="w-25 me-3" size="sm" type="number" min ="0" />
              <Form.Label className="me-2">Tipo: </Form.Label>
              <select className="form-select w-50" aria-label="Default select example">
                <option>Seleccionar</option>
                <option value="1">Desayuno</option>
                <option value="2">Hamburguesa</option>
                <option value="3">Acompañamiento</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput3">
              <Form.Label className="me-2">Imagen: </Form.Label>
              <Form.Control className="" size="sm" type="text"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Descartar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
