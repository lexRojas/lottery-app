import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function ModalDialog(props) {
  const [isShow, invokeModal] = React.useState(false)

  useEffect(() => {

    console.log("se cambio el estado de IsOpen")
    console.log(props.isOpen)

    if (props.isOpen === true) {
      invokeModal(true);
    } else {
      invokeModal(false);
    }
  }, [props]);

  return (
    <>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={props.closeModal}>
          <Modal.Title>{props.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.mensaje}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog;
