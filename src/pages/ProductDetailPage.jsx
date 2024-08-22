import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";

const dummyProducts = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 29.99,
    image: "https://via.placeholder.com/300x300.png?text=T-Shirt",
    description: "A comfortable and stylish t-shirt for everyday wear.",
  },
  {
    id: 2,
    name: "Designer Jeans",
    price: 79.99,
    image: "https://via.placeholder.com/300x300.png?text=Jeans",
    description: "High-quality jeans with a perfect fit and modern design.",
  },
  {
    id: 3,
    name: "Running Sneakers",
    price: 99.99,
    image: "https://via.placeholder.com/300x300.png?text=Sneakers",
    description:
      "Lightweight and durable sneakers ideal for running and exercising.",
  },
  {
    id: 4,
    name: "Trendy Hat",
    price: 24.99,
    image: "https://via.placeholder.com/300x300.png?text=Hat",
    description:
      "A fashionable hat to complete your look and protect from the sun.",
  },
];

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.name}
          </div>
          <p className="mt-2 text-gray-500">{product.description}</p>
          <p className="mt-2 text-gray-900">${product.price.toFixed(2)}</p>
          <div className="mt-4">
            <motion.button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mr-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
            <motion.button
              onClick={() => navigate("/")}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Products
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
