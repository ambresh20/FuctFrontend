import React from "react";
// import aboutImage from "../Assets/aboutpage.jpg";
import missionGif from "../Assets/aboutmission.jpg";
import visionImage from "../Assets/aboutvision.jpg";
import teamImage from "../Assets/aboutteam.jpg";
import aboutBack from "../Assets/aboutbackground.jpg";

const AboutUsPage = () => {
  return (
    <div className="mb-8 overflow-x-hidden bg-gray-100 ">
      {/* About Section */}
      <section
        id="about-company"
        className="py-16 px-6 lg:px-20 md:px-10 h-[100vh] flex justify-evenly items-center "
        style={{
          backgroundImage: `url(${aboutBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-8xl font-bold mb-6 text-white leading-tight pl-1 md:pl-14">
              About Us
            </h2>
          </div>

          <div>
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              Fucturica Technologies is dedicated to delivering top-tier
              technology solutions. We specialize in developing innovative
              software, hardware, and digital services that empower businesses
              worldwide to adapt and grow in the modern digital era. Our passion
              for excellence drives us to push the boundaries of what’s
              possible.
            </p>
          </div>

          {/* <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="About Company"
              className="w-full h-auto max-w-lg rounded-lg shadow-xl object-cover transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            />
          </div> */}
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-gray-300 py-16 px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-1 order-2">
            <img
              src={missionGif}
              alt="Mission"
              className="w-full h-auto max-w-lg rounded-lg shadow-xl object-cover transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            />
          </div>

          <div className="text-left md:order-2 order-1">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to develop cutting-edge, sustainable solutions that
              improve efficiency and help businesses thrive. We aim to bridge
              the gap between technology and businesses to ensure they stay
              competitive in a rapidly changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="bg-gray-100 py-16 px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We envision a future where businesses, large and small, have equal
              access to innovative technologies, enabling them to operate more
              efficiently and sustainably. Fucturica Technologies strives to be
              the leader in driving this change.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={visionImage}
              alt="Vision"
              className="w-full h-auto max-w-lg rounded-lg shadow-xl object-cover transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="bg-gray-300 py-16 px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-1 order-2">
            <img
              src={teamImage}
              alt="Values"
              className="w-full h-auto max-w-lg rounded-lg shadow-xl object-cover transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            />
          </div>

          <div className="text-left md:order-2 order-1">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Our Values
            </h2>
            <ul className="text-lg text-gray-700 space-y-4 leading-relaxed">
              <li>
                <strong>Innovation:</strong> We are driven by creativity and
                constantly seek out new ideas.
              </li>
              <li>
                <strong>Integrity:</strong> We value honesty, trustworthiness,
                and transparency in all our actions.
              </li>
              <li>
                <strong>Collaboration:</strong> We believe in teamwork and the
                power of collective effort to achieve our goals.
              </li>
              <li>
                <strong>Customer Focus:</strong> Our clients’ success is our
                success. We strive to exceed their expectations.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
