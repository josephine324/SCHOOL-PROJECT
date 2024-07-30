import React from 'react';

const featuresData = [
  {
    title: 'Personalized Career Guidance',
    description:
      'Receive tailored career advice and mentorship from industry experts to navigate your career path effectively.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12 text-blue-500 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8m4-4H8m10 4h.01M6 20h.01M4 10h16m-3 5h.01M3 5h18"
        />
      </svg>
    ),
  },
  {
    title: 'Job Board Access',
    description:
      'Access a curated list of job opportunities from leading companies across various industries and locations.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12 text-green-500 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12h4.5m0 0H21m-1.5 0v7.5m0 0V21m0-1.5H15m6-8.5h-5.25M3 3h4.5M7.5 3V7.5M7.5 3H3M9 15h5.25M3 3v18h18M3 3L21 21"
        />
      </svg>
    ),
  },
  {
    title: 'Skill Development Resources',
    description:
      'Explore resources and courses to develop new skills and enhance your existing ones for career growth.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12 text-yellow-500 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.95 3A7.97 7.97 0 0012 1.08 7.97 7.97 0 007.05 3 8 8 0 001.08 12a7.97 7.97 0 001.97 5.91 8.004 8.004 0 0011.41 1.97 7.97 7.97 0 005.91-5.91 8 8 0 00-1.97-11.41A7.97 7.97 0 0016.95 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Networking Opportunities',
    description:
      'Connect with peers and professionals through events and workshops to expand your professional network.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12 text-red-500 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17l4-4-4-4m10 8l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: 'Remote Externship Programs',
    description:
      'Participate in remote externship programs to gain practical experience and boost your career profile.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12 text-indigo-500 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6h4v4h-4zM6 10v4H2v-4zm4 4h4v4h-4zm8-4h4v4h-4zm-4 0V6h4v4zm0 0v4h4v-4zm0 0h-4v4h4zm0 0H6v4h4z"
        />
      </svg>
    ),
  },
  {
    title: 'Live Webinars and Workshops',
    description:
      'Attend live sessions and workshops conducted by industry leaders to learn and grow in your career.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-12 h-12 text-teal-500 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 17.5l4-4-4-4M17 6.5V10m0 0V7.5M7 6.5v7.5M7 10v3.5m0-7h4.5M17 3.5V7m0 0h-7.5"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <div className="bg-gray-100">
      <header className="py-10 bg-gradient-to-br from-purple-700 to-blue-500 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-lg mx-4">
          Explore the range of features that we offer to enhance your career journey and connect with opportunities.
        </p>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg max-w-sm p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-500 to-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 mx-4">
          Join us today and take the first step towards your dream career. Our team is here to support and guide you.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Join Now
        </button>
      </section>
    </div>
  );
}
