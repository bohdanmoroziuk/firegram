import React from 'react';
import 'components/Modal/index.css';

const Modal = ({ image, unselectImage }) => {
  const handleBackdropClick = ({ target }) => {
    if (target.classList.contains('backdrop')) {
      unselectImage();
    }
  };

  return (
    <div 
      className="backdrop"
      onClick={handleBackdropClick}  
    >
      <img src={image} alt="" />
    </div>
  );
};

export default Modal;
