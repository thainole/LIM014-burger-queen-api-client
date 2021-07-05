import React from "react";
import { Modal, Form } from "react-bootstrap";
import { postFn } from "../../services/crud";

export const ModalAddUsers = (props) => {

  const createUser = async () => {
    await postFn(props.storedToken, 'users', props.values);
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
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="me-2">Email: </Form.Label>
            <Form.Control
              size="sm"
              type="email"
              name="email"
              value={props.values.email}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="me-2">Contraseña: </Form.Label>
            <Form.Control
              size="sm"
              type="password"
              name="password"
              value={props.values.password}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="me-2">Administrador: </Form.Label>
            <select
              className="form-select"
              size="sm"
              aria-label="Default select example"
              name="roles"
              onChange={props.handleChange}
            >
              <option value="false">False</option> 
              <option value="true">True</option>               
            </select>
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