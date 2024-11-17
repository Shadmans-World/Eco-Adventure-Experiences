import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg text-gray-500 mt-2">It looks like you've reached a dead-end. Let's get you back on track.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
