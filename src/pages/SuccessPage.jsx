import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">Back to Shopping</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default SuccessPage;
