import React from 'react';
import { motion } from 'framer-motion';
import { useFirestore } from 'hooks';
import 'components/ImageGrid/index.css';

const ImageGrid = ({ selectImage }) => {
  const { documents: images } = useFirestore('images');

  return (
    <div className="image-grid">
      {images && images.map(({ id, url }) => (
        <motion.div 
          className="image-wrapper" 
          key={id}
          onClick={() => selectImage(url)}
          whileHover={{
            opacity: 1
          }}
          layout
        >
          <motion.img 
            src={url} 
            alt="" 
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
