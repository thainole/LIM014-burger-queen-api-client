import React from "react";
import { Modal, Form } from "react-bootstrap";
import { postProduct } from "../../services/products";

export const ModalAddProduct = (props) => {

  const createProduct = async () => {
    await postProduct(props.storedToken, props.values);
    await props.getProducts();
  };

  const sendProduct = async (fn) => {
    await fn;
    props.handleClose();
    props.setValues(props.initialValues);
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>{props.values._id ? 'Editar producto' : 'Nuevo producto'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3 d-inline-flex align-items-center w-100"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label className="me-2">Nombre: </Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="name"
              value={props.values.name}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-inline-flex align-items-center w-100"
            controlId="exampleForm.ControlInput2"
          >
            <Form.Label className="me-4">Precio: </Form.Label>
            <Form.Control
              className="w-25 me-3"
              size="sm"
              type="number"
              min="0"
              name="price"
              value={props.values.price}
              onChange={props.handleChange}
            />
            <Form.Label className="me-2">Tipo: </Form.Label>
            <select
              className="form-select w-50"
              aria-label="Default select example"
              name="type"
              onChange={props.handleChange}
            >
              <option>Seleccionar</option>
              <option value="Desayuno">Desayuno</option>
              <option value="Hamburguesas">Hamburguesa</option>
              <option value="Acompañamientos">Acompañamiento</option>
              <option value="Bebidas">Bebida</option>
            </select>
          </Form.Group>
          <Form.Group
            className="mb-3 d-inline-flex align-items-center w-100"
            controlId="exampleForm.ControlInput3"
          >
            <Form.Label className="me-2">Imagen: </Form.Label>
            <Form.Control
              className=""
              size="sm"
              type="text"
              name="image"
              value={props.values.image}
              onChange={props.handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          onClick={() => {
            props.handleClose();
            props.setValues(props.initialValues)}}>
          Descartar
        </button>
        {
          props.values._id ? 
          <button className="btn btn-danger" onClick={() => sendProduct(props.saveModal(props.values))}>
            Modificar
          </button>:
          <button className="btn btn-danger" onClick={() => sendProduct(createProduct())}>
            Crear
          </button>
        }
      </Modal.Footer>
    </Modal>
  );
};
