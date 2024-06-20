import React from 'react';
import './style.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button onClick={onClose} className="close">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
