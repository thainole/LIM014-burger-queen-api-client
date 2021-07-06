import React from "react";
import { Modal, Form } from "react-bootstrap";
import { postFn } from "../../services/crud";

export const ModalAddProduct = (props) => {

  const createProduct = async () => {
    const storedToken = localStorage.getItem('token');
    await postFn(storedToken, 'products', props.values);
  };

  const sendProduct = async (fn) => {
    await fn;
    await props.getProducts();
    props.handleClose();
    props.setValues(props.initialValues);
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header>
        <Modal.Title>{props.values._id ? 'Editar producto' : 'Nuevo producto'}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-4">
        <Form>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="mx-1 mb-1">Nombre: </Form.Label>
            <Form.Control 
              className="mx-1"
              type="text"
              name="name"
              value={props.values.name}
              onChange={props.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="mx-1 mb-1">Precio: </Form.Label>
            <Form.Control 
              className="mx-1"
              type="number"
              min="0"
              name="price"
              value={props.values.price}
              onChange={props.handleChange}
            />
            <Form.Label className="mx-1 mb-1">Tipo: </Form.Label>
            <Form.Control 
              as="select" name="type" onChange={props.handleChange} className="mx-1">
                <option>Seleccionar</option>
                <option value="Desayuno">Desayuno</option>
                <option value="Hamburguesas">Hamburguesa</option>
                <option value="Acompañamientos">Acompañamiento</option>
                <option value="Bebidas">Bebida</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 d-inline-flex align-items-center w-100">
            <Form.Label className="mx-1 mb-1">Imagen: </Form.Label>
            <Form.Control  
              className="mx-1"
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
