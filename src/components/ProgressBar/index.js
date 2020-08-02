import React from 'react';
import { motion } from 'framer-motion';
import 'components/ProgressBar/index.css';

const ProgressBar = ({ progress }) => (
  <motion.div 
    className="progress-bar"
    initial={{ width: 0 }}
    animate={{ width: `${progress}%` }}
  />
);

export default ProgressBar;
