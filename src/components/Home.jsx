import React from 'react';
import Banner from '../Assets/banner.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="relative text-white h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${Banner})`, // Corrected this line
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Fucturica Technologies</h1>
        <p className="text-lg md:text-2xl mb-10">
          Crafting Innovative Solutions for the Future. Empower your business with cutting-edge technology.
        </p>
        <a
          href="#about-us"
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 no-underline"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Home;
