import React from 'react';
import { motion } from 'framer-motion';
import 'components/Modal/index.css';

const Modal = ({ image, unselectImage }) => {
  const baseClassOfComponent = 'backdrop';

  const handleBackdropClick = ({ target }) => {
    target.classList.contains(baseClassOfComponent) && unselectImage();
  };

  return (
    <motion.div 
      className={`${baseClassOfComponent}`}
      onClick={handleBackdropClick}  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img 
        src={image} 
        alt="" 
        initial={{ y: `-100vh` }}  
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
