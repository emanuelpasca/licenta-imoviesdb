import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1E1B1B",
  padding: "20px",
  zIndex: 1000,
};

const OVERLAY_STYLE = {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
};

const Modal = (props) => {
  if (props.isOpen) {
    return ReactDOM.createPortal(
      <div>
        <div
          style={OVERLAY_STYLE}
          className="modal-backdrop"
          onClick={() => props.closeModal}
        />
        <div style={MODAL_STYLES} className="modal-child">
          <div
            className="btn-square btn-close btn-grad"
            onClick={() => props.closeModal()}
          >
            <i style={{ position: "absolute" }} className="fas fa-times"></i>
          </div>
          {props.children}
        </div>
      </div>,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
};

export default Modal;
