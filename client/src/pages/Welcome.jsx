import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  function handleCareer() {
    console.log("Navigating to Career Guidance");
    navigate('/career');
  }

  function handleBoard() {
    console.log("Navigating to Job Board");
    navigate('/home');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white shadow-lg rounded-lg max-w-lg mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Skill Link!
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Discover exciting career opportunities and connect with top companies.
          Get personalized career guidance to navigate your professional journey.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
            onClick={handleCareer}
          >
            Career Guidance
          </button>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
            onClick={handleBoard}
          >
            Job Board
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Looking for more features?{' '}
            <Link to="/features" className="text-blue-600 hover:underline">
              Explore now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
