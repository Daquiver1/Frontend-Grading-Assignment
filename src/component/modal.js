// Modal.js
import React from 'react';
import './modal.css'; // Import your CSS file for modal styles

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
