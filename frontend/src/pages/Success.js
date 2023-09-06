import React from "react";
import "animate.css"; 
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md animate__animated animate__fadeInUp">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Payment Success
        </h1>
        <p className="text-gray-600">
          Thank you for your payment. Your order has been successfully
          processed.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="text-blue-500 hover:underline hover:text-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;


