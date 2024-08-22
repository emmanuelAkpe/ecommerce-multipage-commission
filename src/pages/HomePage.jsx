import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";

const dummyProducts = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/300x300.png?text=T-Shirt",
  },
  {
    id: 2,
    name: "Designer Jeans",
    price: 79.99,
    image: "https://via.placeholder.com/300x300.png?text=Jeans",
  },
  {
    id: 3,
    name: "Running Sneakers",
    price: 99.99,
    image: "https://via.placeholder.com/300x300.png?text=Sneakers",
  },
  {
    id: 4,
    name: "Trendy Hat",
    price: 24.99,
    image: "https://via.placeholder.com/300x300.png?text=Hat",
  },
];

function HomePage() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {dummyProducts.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <Link
              to={`/product/${product.id}`}
              className="text-lg font-semibold text-gray-800 hover:text-blue-500"
            >
              {product.name}
            </Link>
            <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            <motion.button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HomePage;
