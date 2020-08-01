import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'components';
import { useStorage } from 'hooks';
import 'components/UploadForm/index.css';

const allowedImageTypes = [
  'image/png',
  'image/jpeg',
];

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (progress === 100 && url) {
      setFile(null);
    }
  }, [progress, url]);

  const handleFileChange = (event) => {
    const [file] = event.target.files;

    if (file && allowedImageTypes.includes(file.type)) {
      setFile(file);
      setError(null);
    } else {
      setFile(null);
      setError('Select an image file (png or jpeg)');
    }
  };

  return (
    <form className="upload-form">
      <label>
        <input type="file" onChange={handleFileChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <p className="error">{error}</p>}
        {file && <ProgressBar progress={progress} />}
      </div>
    </form>
  );
};

export default UploadForm;
