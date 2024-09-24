import React, { useState } from "react";
import axios from "axios";

const ContactUsPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // console.log(userData);

    axios.post('https://fuct-backend.vercel.app/api/contact-store', userData)
    .then(response => {
      console.log('Contact Form submitted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });


    // Clear the form after submission
    setUserData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="bg-custom-gradient h-[100vh] flex justify-center items-center flex-col gap-20">
        <h2 className="text-6xl font-bold text-center mb-8 text-gray-100">
          Contact Us
        </h2>
        <p className="text-xl font-semibold text-center mb-10 text-gray-200">
          We'd love to hear from you! Please fill out the form below and we'll
          get back to you as soon as possible
        </p>
      </div>

      <section id="contact-form" className="bg-gray-200 py-14 px-1 md:px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between ">
            {/* form container  */}
            <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 mb-8 md:mb-0 mx-1 md:mx-6">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-lg font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={userData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-800 transition duration-300"
                  >
                    {isSubmitted ? "Message Sent!" : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="md:w-1/2 p-4 md:pl-8 pt-10 md:pt-0 mx-1 md:mx-6 bg-white rounded-lg ">
              <h3 className="text-3xl font-bold my-6 text-gray-800 text-center">
                Contact Information
              </h3>
              <ul className="text-lg text-gray-700 space-y-4 py-5">
                <li>
                  <strong>Address:</strong> 123 Tech Lane, Bhopal, India 486886
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@fucturicatechnologies.com"
                    className="text-blue-500"
                  >
                    info@fucturicatechnologies.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919907179311" className="text-blue-500">
                    +91 9907179311
                  </a>
                </li>
              </ul>

              {/* Google Map */}
              <div className="mt-8 pb-5 pr-4">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Find Us Here:
                </h4>
                <iframe
                  title="contact-map"
                  className="w-full h-64 rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7287.274539312265!2d82.58550134228841!3d24.043853167376103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1726746379167!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
