// File: src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center p-8"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to UYIH</h1>
      <p className="text-lg text-gray-700 mb-6">
        UYIH empowers youth through training, ICT skills, and advocacy for equality.
      </p>
      <img
        src="https://images.unsplash.com/photo-1581093588401-0c3f7e3c00d2"
        alt="Youth Empowerment"
        className="w-full max-w-3xl mx-auto rounded shadow"
      />
    </motion.div>
  );
}
