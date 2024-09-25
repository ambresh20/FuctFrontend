import React, { useState } from "react";

const UserDashboard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    occupation: "",
    interests: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dateOfBirth)) {
      newErrors.dateOfBirth = "Please enter a valid date in YYYY-MM-DD format";
    }

    if (!formData.occupation || formData.occupation.length < 2) {
      newErrors.occupation = "Occupation must be at least 2 characters";
    }

    if (!formData.interests || formData.interests.length < 3) {
      newErrors.interests = "Please enter at least one interest";
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(formData);
    setIsSubmitting(false);

    alert(
      "Profile Updated: Your profile information has been successfully updated."
    );
  };

  return (
    <div className="my-5 mx-2 md:mx-4">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-gray-300 p-5 rounded-lg ">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="dateOfBirth" className="block font-medium">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-red-500">{errors.dateOfBirth}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="occupation" className="block font-medium">
            Occupation
          </label>
          <input
            id="occupation"
            name="occupation"
            type="text"
            value={formData.occupation}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.occupation && (
            <p className="text-sm text-red-500">{errors.occupation}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="interests" className="block font-medium">
            Interests (comma-separated)
          </label>
          <input
            id="interests"
            name="interests"
            type="text"
            value={formData.interests}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.interests && (
            <p className="text-sm text-red-500">{errors.interests}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="bio" className="block font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.bio && <p className="text-sm text-red-500">{errors.bio}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 bg-blue-500 font-semibold text-white rounded-md p-2 w-full ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserDashboard;
