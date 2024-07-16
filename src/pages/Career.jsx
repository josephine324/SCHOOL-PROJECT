import React from 'react';

const careerAdvices = [
  {
    title: 'Software Engineering',
    content: 'Learn about software development, coding languages, and becoming a successful software engineer.',
  },
  {
    title: 'Data Science',
    content: 'Explore the world of data analysis, machine learning, and statistical methods to drive decision-making.',
  },
  {
    title: 'Product Management',
    content: 'Understand how to manage products, lead teams, and deliver successful products to market.',
  },
  {
    title: 'Product Management',
    content: 'Understand how to manage products, lead teams, and deliver successful products to market.',
  },
  // Add more career advice as needed
];

export default function career() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-8">Career Guidance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {careerAdvices.map((advice, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4">{advice.title}</h2>
            <p className="text-gray-700">{advice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
