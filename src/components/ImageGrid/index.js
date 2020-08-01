import React from 'react';
import { useFirestore } from 'hooks';
import 'components/ImageGrid/index.css';

const ImageGrid = ({ selectImage }) => {
  const { documents: images } = useFirestore('images');

  return (
    <div className="image-grid">
      {images && images.map(({ id, url }) => (
        <div 
          className="image-wrapper" 
          key={id}
          onClick={() => selectImage(url)}
        >
          <img src={url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
