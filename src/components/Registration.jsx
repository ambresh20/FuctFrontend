import React, { useState } from "react";
import RegistrationImg from "../Assets/Regestation.jpg";
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    pin: "",
  });

  const [error, setError] = useState({});

  // validation of input box and showing error
  const validateInput = (name, value) => {
    let showError = "";

    if (name === "firstName") {
      if (value === "") {
        showError = "Enter first name";
      } else if (value.length <= 3) {
        showError = "should have at least 3 characters";
      } else {
        showError = "";
      }
    } else if (name === "lastName") {
      if (value === "") {
        showError = "Enter last name";
      } else if (value.length <= 3) {
        showError = "should have at least 3 characters";
      } else {
        showError = "";
      }
    } else if (name === "phone") {
      if (value === "") {
        showError = "Enter phone number";
      } else if (isNaN(value)) {
        showError = "number must contain only digits";
      } else if (value.length !== 10) {
        showError = "number should be 10 digits";
      } else {
        showError = "";
      }
    } else if (name === "email") {
      if (value === "") {
        showError = "Please Enter Email";
      } else if (value.indexOf("@") === 0) {
        showError = "Invalid position of @";
      } else if (!value.includes("@")) {
        showError = "Invalid Email";
      } else if (
        value.charAt(value.length - 4) !== "." &&
        value.charAt(value.length - 3) !== "."
      ) {
        showError = "Invalid Email";
      } else {
        showError = "";
      }
    } else if (name === "password") {
      if (value === "") {
        showError = "Please enter password";
      } else if (value.length < 8) {
        showError = "Password should contain at least 8 characters";
      } else if (value.search(/[@#$&*]/) === -1) {
        showError = "Password should contain at least one special character";
      } else if (value.search(/[0-9]/) === -1) {
        showError = "Password should contain at least one digit";
      } else {
        showError = "";
      }
    } else if (name === "confirmPassword") {
      if (value === "") {
        showError = "Please enter password";
      } else if (value !== formData.password) {
        showError = "Passwords do not match";
      } else {
        showError = "";
      }
    } else if (name === "gender") {
      if (value === "") {
        showError = "Please select gender";
      } else {
        showError = "";
      }
    } else if (name === "dob") {
      if (value === "") {
        showError = "Please date of birth";
      } else {
        showError = "";
      }
    } else if (name === "address") {
      if (value === "") {
        showError = "Please enter address";
      } else {
        showError = "";
      }
    } else if (name === "city") {
      const containsNumber = /\d/;
      if (value === "") {
        showError = "Please enter city";
      } else if (!isNaN(value)) {
        showError = "Number not allowed";
      } else if (containsNumber.test(value)) {
        showError = "City should not contain numbers";
      } else {
        showError = "";
      }
    } else if (name === "pin") {
      if (value === "") {
        showError = "Please enter pin code";
      } else if (isNaN(value)) {
        showError = "Pin code must contain only digits";
      } else if (value.length !== 6) {
        showError = "Pin code should be 6 digits";
      } else {
        showError = "";
      }
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: showError,
    }));
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    //It is optional Validation --> because we are before validate when user are filling the value --> function validateInput() methods

    e.preventDefault();
    // backend-fuct.vercel.app/registration 
    axios.post('https://backend-25ro.onrender.com/registration', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });

    // console.log("Form submitted:", formData);

    // Clear all input fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      dob: "",
      address: "",
      city: "",
      pin: "",
    });
  };

  return (
    <div id="register">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center mr-5">
        Registration Form
      </h2>

      <div className="w-full h-full my-4 mb-10 pb-5 flex flex-col justify-evenly items-center sm:flex-row ">
        <div>
          <img src={RegistrationImg} alt="design" className="h-full w-full" />
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="max-[500px]:h-[130vh] max-w-3xl mx-auto  p-4 sm:p-4 lg:p-6 xl:p-7 bg-slate-300 rounded shadow-md  "
          >
            {/* First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your first name"
                  />
                </div>

                {error.firstName && (
                  <p className="text-red-500 mt-1 text-center pl-2 text-sm">
                    {error.firstName}
                  </p>
                )}
              </div>

              {/* Last name  */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your last name"
                  />
                </div>

                {error.lastName && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.lastName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className=" ">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your phone number"
                  />
                </div>

                {error.phone && (
                  <p className="text-red-500 mt-1 text-center text-sm ">
                    {error.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your email address"
                  />
                </div>

                {error.email && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className=" ">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your password"
                  />
                </div>

                {error.password && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Confirm your password"
                  />
                </div>

                {error.confirmPassword && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.confirmPassword}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {error.gender && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.gender}
                  </p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                  />
                </div>

                {error.dob && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.dob}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your address"
                  />
                </div>

                {error.address && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.address}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your city"
                  />
                </div>

                {error.city && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.city}
                  </p>
                )}
              </div>

              {/* Pin code  */}
              <div className="">
                <div className="flex items-center">
                  <label className="font-bold mr-2 w-20 sm:w-24">
                    Pin Code
                  </label>
                  <input
                    type="tel"
                    name="pin"
                    value={formData.pin}
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded w-full md:w-3/4"
                    placeholder="Enter your pin code"
                  />
                </div>
                {error.pin && (
                  <p className="text-red-500 mt-1 text-center text-sm">
                    {error.pin}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded  hover:bg-blue-800"
              >
                Submit
              </button>
            </div>

          </form>

          {/* Login Navigate  */}
          <div>
            <p className="mt-5 text-center text-xl text-gray-500">
              Already Registration ?{" "}
              <NavLink
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl"
              >
                Login here
              </NavLink>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Registration;
