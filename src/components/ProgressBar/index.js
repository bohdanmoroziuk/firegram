import React from 'react';
import 'components/ProgressBar/index.css';

const ProgressBar = ({ progress }) => {

  return (
    <div 
      className="progress-bar"
      style={{
        width: `${progress}%`
      }}  
    />
  );
};

export default ProgressBar;
