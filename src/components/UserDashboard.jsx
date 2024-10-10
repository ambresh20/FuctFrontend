import React, { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    occupation: "",
    interest: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Full name must be at least 2 characters";
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)) {
      newErrors.dob = "Please enter a valid date in YYYY-MM-DD format";
    }
    if (!formData.occupation || formData.occupation.length < 2) {
      newErrors.occupation = "Occupation must be at least 2 characters";
    }
    if (!formData.interest || formData.interest.length < 3) {
      newErrors.interest = "Please enter at least one interest";
    }
    if (formData.bio.length > 500) {
      newErrors.bio = "Bio must not exceed 500 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://backend-25ro.onrender.com/user-store",
        formData
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: "",
        dob: "",
        occupation: "",
        interest: "",
        bio: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-10 px-2">
      {/* Welcome Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-800">
          Welcome to Your Dashboard
        </h2>
        <p className="text-gray-600 mt-2">Please fill in your details</p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full"
        >
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-6">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${
                errors.dob ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="YYYY-MM-DD"
            />
            {errors.dob && (
              <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
            )}
          </div>

          {/* Occupation */}
          <div className="mb-6">
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              id="occupation"
              name="occupation"
              type="text"
              value={formData.occupation}
              onChange={handleChange}
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${
                errors.occupation ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your current occupation"
            />
            {errors.occupation && (
              <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
            )}
          </div>

          {/* Interests */}
          <div className="mb-6">
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-gray-700"
            >
              Interests (comma-separated)
            </label>
            <input
              id="interest"
              name="interest"
              type="text"
              value={formData.interest}
              onChange={handleChange}
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${
                errors.interest ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., Reading, Traveling"
            />
            {errors.interest && (
              <p className="text-red-500 text-xs mt-1">{errors.interest}</p>
            )}
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              className={`mt-2 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200 ${
                errors.bio ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about yourself"
            />
            {errors.bio && (
              <p className="text-red-500 text-xs mt-1">{errors.bio}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition duration-200 ease-in-out ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
