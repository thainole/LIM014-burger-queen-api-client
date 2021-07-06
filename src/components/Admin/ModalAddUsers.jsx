import React from "react";
import { Modal, Form } from "react-bootstrap";
import { postFn } from "../../services/crud";

export const ModalAddUsers = (props) => {

  const createUser = async () => {
    const storedToken = localStorage.getItem('token');
    await postFn(storedToken, 'users', props.values);
  }

  const sendUser = async (fn) => {
    await fn;
    await props.getUsers();
    props.handleClose();
    props.setValues(props.initialValues);
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>{props.values._id ? 'Editar usuario' : 'Nuevo usuario'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-4">
        <Form>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="mx-1 mb-1">Email: </Form.Label>
            <Form.Control
              className="mx-1"
              type="email"
              name="email"
              value={props.values.email}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="mx-1 mb-1">Contraseña: </Form.Label>
            <Form.Control
              className="mx-1"
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="mx-1 mb-1">Administrador: </Form.Label>
            <Form.Control 
              as="select" name="roles" className="mx-1" onChange={props.handleChange}>
                <option value="false">False</option> 
                <option value="true">True</option>               
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={() => {
          props.handleClose();
          props.setValues(props.initialValues)}}>
          Descartar
        </button>
        {
          props.values._id ? 
          <button className="btn btn-danger" onClick={() => sendUser(props.saveModal(props.values))}>
            Modificar
          </button>:
          <button className="btn btn-danger" onClick={() => sendUser(createUser())}>
            Crear
          </button>
        }
      </Modal.Footer>
    </Modal>
  );
};
