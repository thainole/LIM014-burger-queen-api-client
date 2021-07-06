import React from 'react'
import { Modal } from "react-bootstrap";

export const ModalOrderSent = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Pedido enviado</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-4"> 
        Tu pedido se envió con éxito
      </Modal.Body>
    </Modal>
  )
}
