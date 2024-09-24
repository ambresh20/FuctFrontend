import React from 'react';
import bannerImage from "../Assets/banner.jpg" ;

const Home = () => {
  return (
    <section id="home" className="relative bg-gray-800 text-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Fucturica Technologies</h1>
        <p className="text-lg md:text-2xl mb-6">
          Crafting Innovative Solutions for the Future. Empower your business with cutting-edge technology.
        </p>
        <a
          href="#about-us"
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;
