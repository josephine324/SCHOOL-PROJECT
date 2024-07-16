import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  function handleCareer() {
    console.log("Hello World!!");
    navigate('/career');
  }

  function handleBoard() {
    console.log("Job Board");
    navigate('/home');
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-4xl mb-4">Welcome!!</p>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            onClick={handleCareer}
          >
            Career Guidance
          </button>
          <button
            type="button"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            onClick={handleBoard}
          >
            Job Board
          </button>
        </div>
      </div>
    </div>
  );
}
