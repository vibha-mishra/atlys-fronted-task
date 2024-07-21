import React from "react";
import closeButton from "../../assets/images/closeButton.png";
import "./styles.css";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div
          onClick={onClose}
          className="modal-close-button"
        >
          <img src={closeButton} alt="close" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
