import React from 'react';
import { motion } from 'framer-motion';
import { useFirestore } from 'hooks';
import 'components/ImageGrid/index.css';

const ImageGrid = ({ selectImage }) => {
  const { documents: images } = useFirestore('images');

  const renderImage = ({ id, url }) => (
    <motion.div 
      className="image-wrapper" 
      key={id}
      onClick={() => selectImage(url)}
      whileHover={{ opacity: 1 }}
      layout
    >
      <motion.img 
        src={url} 
        alt="" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </motion.div>
  )

  const renderImages = images => (
    images && images.map(renderImage)
  );

  return (
    <div className="image-grid">
      {renderImages(images)}
    </div>
  );
};

export default ImageGrid;
