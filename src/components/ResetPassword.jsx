import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  
  // Get the token from the URL using useLocation
  const location = useLocation();
  const [token, setToken] = useState("");

  useEffect(() => {
    // Extract the token from the URL path
    const path = location.pathname;
    const tokenFromUrl = path.split('/reset-password/')[1];
    setToken(tokenFromUrl);
  }, [location]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let showErrorMsg = {};

    // Password validation
    if (data.password === "") {
      showErrorMsg.password = "Please enter password";
    } else if (data.password.length < 8) {
      showErrorMsg.password = "Password should contain at least 8 characters";
    } else if (data.password.search(/[@#$&*]/) === -1) {
      showErrorMsg.password = "Password should contain at least one special character";
    } else if (data.password.search(/[0-9]/) === -1) {
      showErrorMsg.password = "Password should contain at least one digit";
    }

    // Confirm password validation
    if (data.confirmPassword === "") {
      showErrorMsg.confirmPassword = "Please confirm password";
    } else if (data.confirmPassword !== data.password) {
      showErrorMsg.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(showErrorMsg).length === 0) {
      // SEND DATA using POST, including the token in the URL
      axios
        .post(`http://localhost:4000/api/reset-password/${token}`, data)
        .then((response) => {
          console.log("Password reset successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
      
      setData({ password: "", confirmPassword: "" });
    } else {
      setError(showErrorMsg);
    }
  };

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center gap-20">
      <div className="font-bold text-2xl text-gray-600">
        <h2 className="tracking-widest">Reset Password</h2>
      </div>

      <div className="bg-gray-300 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* Password */}
          <div className="my-4">
            <div className="flex items-center">
              <label className="font-bold mr-2 w-20 sm:w-24">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Enter your password"
              />
            </div>
            {error.password && (
              <p className="text-red-500 mt-1 text-center text-sm">{error.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="my-4">
            <div className="flex items-center">
              <label className="font-bold mr-2 w-20 sm:w-24">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Confirm your password"
              />
            </div>
            {error.confirmPassword && (
              <p className="text-red-500 mt-1 text-center text-sm">{error.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex w-full h-12 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
