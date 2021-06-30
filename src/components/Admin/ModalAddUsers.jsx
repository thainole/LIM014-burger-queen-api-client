import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { postUser } from "../../services/users";

export const ModalAddUsers = ({getUsers}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [option, setOption] = React.useState("");

  const sendNewUser = {
    email: email,
    password: password,
    roles: {
      admin: option === "true" ? true : false,
    },
  };

  const sendData = async() => {
    console.log(sendNewUser);
    const storedToken = localStorage.getItem("token");
    await postUser(storedToken, sendNewUser);
    handleClose();
    await getUsers()
  };
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
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
              <Form.Label className="me-2">Email: </Form.Label>
              <Form.Control
                size="sm"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
              <Form.Label className="me-2">Contraseña: </Form.Label>
              <Form.Control
                size="sm"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
              <Form.Label className="me-2">Administrador: </Form.Label>
              <select
                className="form-select"
                size="sm"
                aria-label="Default select example"
                onChange={(e) => setOption(e.target.value)}
              >
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
          <Button variant="danger" onClick={() => sendData()}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};