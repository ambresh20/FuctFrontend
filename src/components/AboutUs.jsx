import React from "react";
import aboutImage from "../Assets/aboutImage.jpg";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gray-300 py-12 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-5 ">
          <h2 className="text-3xl font-bold  mb-4">Who We Are</h2>
          <p className="mb-6">
            At <strong>Fucturica Technologies</strong>, we believe in creating
            tomorrow's solutions today. With our innovative approach and
            tech-driven strategies, we’ve been pushing boundaries and
            transforming industries 🌍💻.
          </p>
          <p className="mb-6">
            From humble beginnings to a dynamic team of forward-thinkers, we
            thrive on building cutting-edge solutions that make an impact. We
            don’t just follow trends; we set them! 🚀🔥
          </p>
          <NavLink
            to="/aboutus"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
