import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div 
      className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-5xl text-white font-bold">Welcome to Your Amazing Site!</h1>
    </motion.div>
  );
}

export default Hero;
