import React from 'react';

const careerAdvices = [
  {
    title: 'Software Engineering',
    description: 'A journey to becoming a successful software engineer.',
    steps: [
      {
        stepTitle: 'Learn Programming Languages',
        stepContent:
          'Start with languages like Python, Java, or JavaScript. Understand the fundamentals of programming, including variables, data structures, algorithms, and object-oriented programming.',
      },
      {
        stepTitle: 'Understand Software Development',
        stepContent:
          'Learn about software development methodologies like Agile, Scrum, and Waterfall. Understand the software development lifecycle (SDLC) and the importance of version control systems like Git.',
      },
      {
        stepTitle: 'Build Projects',
        stepContent:
          'Apply your skills by building real-world projects. Use GitHub to showcase your work and contribute to open-source projects to gain practical experience.',
      },
      {
        stepTitle: 'Master Algorithms and Data Structures',
        stepContent:
          'Deepen your understanding of algorithms and data structures, as they are essential for solving complex problems and performing well in technical interviews.',
      },
      {
        stepTitle: 'Prepare for Interviews',
        stepContent:
          'Practice coding problems on platforms like LeetCode, HackerRank, or CodeSignal. Learn how to communicate your thought process effectively during technical interviews.',
      },
    ],
    resources: [
      {
        name: 'Coursera: Python for Everybody',
        link: 'https://www.coursera.org/specializations/python',
      },
      {
        name: 'Udemy: The Complete JavaScript Course 2024: From Zero to Expert!',
        link: 'https://www.udemy.com/course/the-complete-javascript-course/',
      },
      {
        name: 'MIT OpenCourseWare: Introduction to Computer Science',
        link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
      },
      {
        name: 'GitHub: Open Source Projects',
        link: 'https://github.com/explore',
      },
      {
        name: 'Cracking the Coding Interview by Gayle Laakmann McDowell',
        link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850',
      },
      {
        name: 'YouTube: Traversy Media - Web Development Tutorials',
        link: 'https://www.youtube.com/user/TechGuyWeb',
      },
    ],
  },
  {
    title: 'Data Science',
    description: 'An exploration into the world of data analysis and machine learning.',
    steps: [
      {
        stepTitle: 'Learn Statistics and Mathematics',
        stepContent:
          'Understand the basics of statistics, probability, and linear algebra, which are crucial for data analysis and building machine learning models.',
      },
      {
        stepTitle: 'Master Data Manipulation',
        stepContent:
          'Gain proficiency in Python libraries like Pandas and NumPy for data manipulation, cleaning, and preprocessing.',
      },
      {
        stepTitle: 'Explore Machine Learning',
        stepContent:
          'Study machine learning algorithms and frameworks such as Scikit-learn, TensorFlow, or PyTorch. Understand supervised, unsupervised, and reinforcement learning.',
      },
      {
        stepTitle: 'Work with Data Visualization Tools',
        stepContent:
          'Learn to visualize data using tools like Matplotlib, Seaborn, or Tableau to communicate insights effectively.',
      },
      {
        stepTitle: 'Engage in Data Science Projects',
        stepContent:
          'Apply your skills in projects and competitions on platforms like Kaggle to build a strong portfolio and gain hands-on experience.',
      },
    ],
    resources: [
      {
        name: 'Coursera: Data Science Specialization',
        link: 'https://www.coursera.org/specializations/jhu-data-science',
      },
      {
        name: 'Kaggle: Data Science and Machine Learning Competitions',
        link: 'https://www.kaggle.com/',
      },
      {
        name: 'YouTube: StatQuest with Josh Starmer - Statistics and Data Science',
        link: 'https://www.youtube.com/user/joshstarmer',
      },
      {
        name: 'Udacity: Data Scientist Nanodegree',
        link: 'https://www.udacity.com/course/data-scientist-nanodegree--nd025',
      },
      {
        name: 'Python for Data Analysis by Wes McKinney',
        link: 'https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1491957662',
      },
      {
        name: 'TensorFlow Documentation',
        link: 'https://www.tensorflow.org/tutorials',
      },
    ],
  },
  {
    title: 'Product Management',
    description: 'A guide to managing products and leading teams effectively.',
    steps: [
      {
        stepTitle: 'Understand Product Life Cycle',
        stepContent:
          'Learn about the stages of the product life cycle from development to decline, and how to manage each phase effectively.',
      },
      {
        stepTitle: 'Develop User-Centric Products',
        stepContent:
          'Learn to prioritize user needs through user research, personas, and customer feedback to create products that solve real problems.',
      },
      {
        stepTitle: 'Master Agile and Scrum',
        stepContent:
          'Understand Agile methodologies and Scrum frameworks to manage product development efficiently and adapt to changing requirements.',
      },
      {
        stepTitle: 'Gain Business Acumen',
        stepContent:
          'Acquire skills in market analysis, competitive analysis, and financial modeling to make informed decisions about product strategy.',
      },
      {
        stepTitle: 'Build Leadership and Communication Skills',
        stepContent:
          'Develop strong communication and leadership skills to lead cross-functional teams and stakeholders toward a common goal.',
      },
    ],
    resources: [
      {
        name: 'Coursera: Digital Product Management',
        link: 'https://www.coursera.org/specializations/digital-product-management',
      },
      {
        name: 'Scrum.org: Scrum Guide',
        link: 'https://www.scrum.org/resources/scrum-guide',
      },
      {
        name: 'Udemy: Become a Product Manager | Learn the Skills & Get the Job',
        link: 'https://www.udemy.com/course/product-management-course/',
      },
      {
        name: 'Product School: Free Product Management Resources',
        link: 'https://www.productschool.com/resources/',
      },
      {
        name: 'Product Management in Practice by Matt LeMay',
        link: 'https://www.amazon.com/Product-Management-Practice-Techniques-Product/dp/1491982224',
      },
      {
        name: 'Mind the Product: Community and Events',
        link: 'https://www.mindtheproduct.com/',
      },
    ],
  },
  {
    title: 'Digital Marketing',
    description: 'A roadmap to excel in digital marketing strategies.',
    steps: [
      {
        stepTitle: 'Learn SEO and SEM',
        stepContent:
          'Understand search engine optimization (SEO) and search engine marketing (SEM) to increase website visibility and drive traffic.',
      },
      {
        stepTitle: 'Master Social Media Marketing',
        stepContent:
          'Learn to engage audiences on social media platforms by creating compelling content and using analytics to measure engagement.',
      },
      {
        stepTitle: 'Understand Content Marketing',
        stepContent:
          'Develop content strategies that deliver value to your audience, and learn how to use blogs, videos, and other content forms effectively.',
      },
      {
        stepTitle: 'Gain Expertise in Email Marketing',
        stepContent:
          'Learn how to build and manage email marketing campaigns that nurture leads and convert them into customers.',
      },
      {
        stepTitle: 'Utilize Analytics Tools',
        stepContent:
          'Use tools like Google Analytics and Facebook Insights to measure the performance of your marketing efforts and make data-driven decisions.',
      },
    ],
    resources: [
      {
        name: 'Coursera: Digital Marketing Specialization',
        link: 'https://www.coursera.org/specializations/digital-marketing',
      },
      {
        name: 'HubSpot: Free Marketing Courses',
        link: 'https://academy.hubspot.com/courses/marketing',
      },
      {
        name: 'YouTube: Neil Patel - Digital Marketing Advice',
        link: 'https://www.youtube.com/user/neilvkpatel',
      },
      {
        name: 'Udemy: The Complete Digital Marketing Course - 12 Courses in 1',
        link: 'https://www.udemy.com/course/learn-digital-marketing-course/',
      },
      {
        name: 'Google Analytics Academy',
        link: 'https://analytics.google.com/analytics/academy/',
      },
      {
        name: 'Moz: Beginner’s Guide to SEO',
        link: 'https://moz.com/beginners-guide-to-seo',
      },
    ],
  },
  // Add more career advice as needed
];

export default function Career() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Career Guidance Pathways</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {careerAdvices.map((advice, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4">{advice.title}</h2>
            <p className="text-gray-700 mb-4">{advice.description}</p>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Pathway to Success:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {advice.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>
                    <strong className="text-gray-800">{step.stepTitle}:</strong> {step.stepContent}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Key Resources:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {advice.resources.map((resource, resourceIndex) => (
                  <li key={resourceIndex}>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
