import React from 'react';

const features = [
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology solutions tailored to your business needs. We focus on innovation and efficiency.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6M9 8h6M12 2v2m0 18v2M2 12h2m18 0h2m-2 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Scalability",
    description: "Our solutions are designed to grow with your business, ensuring long-term success and sustainability.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v4h4M21 21v-4h-4m-2 5h-8v-5H4v-8h5V4h8v5h5v8z"></path>
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Work with a team of experienced professionals dedicated to delivering high-quality results.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
      </svg>
    ),
  },
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology solutions tailored to your business needs. We focus on innovation and efficiency.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6M9 16h6M9 8h6M12 2v2m0 18v2M2 12h2m18 0h2m-2 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: "Scalability",
    description: "Our solutions are designed to grow with your business, ensuring long-term success and sustainability.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v4h4M21 21v-4h-4m-2 5h-8v-5H4v-8h5V4h8v5h5v8z"></path>
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Work with a team of experienced professionals dedicated to delivering high-quality results.",
    icon: (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
      </svg>
    ),
  },
];

const Feature = () => {
  return (
    <section id="features" className="bg-gray-600 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:bg-blue-50 transition duration-300">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
