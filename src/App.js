import React, { useState } from 'react';
import { Title, UploadForm, ImageGrid, Modal } from 'components';
import 'App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const unselectImage = () => setSelectedImage(null);

  return (
    <div className="app">
      <Title />
      <UploadForm />
      <ImageGrid selectImage={setSelectedImage} />
      {selectedImage && (
        <Modal 
          image={selectedImage} 
          unselectImage={unselectImage}  
        />
      )}
    </div>
  );
};

export default App;
