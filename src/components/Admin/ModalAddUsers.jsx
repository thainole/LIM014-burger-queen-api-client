import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export const ModalAddUsers = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Agregar usuario
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput1">
              <Form.Label className="me-2">Email: </Form.Label>
              <Form.Control size="sm" type="email"/>
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput2">
              <Form.Label className="me-2">Contraseña: </Form.Label>
              <Form.Control size="sm" type="password"/>
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100" controlId="exampleForm.ControlInput2">
              <Form.Label className="me-2">Administrador: </Form.Label>
              <select className="form-select" size="sm" aria-label="Default select example">
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
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
