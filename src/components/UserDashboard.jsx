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
    }
  };

  return (
    <div className="container py-5">
      {/* welcome  */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Welcome to Your Dashboard</h2>
        <p className="text-muted">
          Please fill in your details for more information
        </p>
      </div>

      <div className="row justify-content-center">
        {/* form containers  */}
        <div className="col-md-8 col-lg-6">
          <form
            onSubmit={handleSubmit}
            className="bg-dark-subtle p-4 rounded shadow"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className={`form-control ${errors.dob ? "is-invalid" : ""}`}
              />
              {errors.dob && (
                <div className="invalid-feedback">{errors.dob}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="occupation" className="form-label">
                Occupation
              </label>
              <input
                id="occupation"
                name="occupation"
                type="text"
                value={formData.occupation}
                onChange={handleChange}
                className={`form-control ${
                  errors.occupation ? "is-invalid" : ""
                }`}
              />
              {errors.occupation && (
                <div className="invalid-feedback">{errors.occupation}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="interest" className="form-label">
                Interests (comma-separated)
              </label>
              <input
                id="interest"
                name="interest"
                type="text"
                value={formData.interest}
                onChange={handleChange}
                className={`form-control ${
                  errors.interest ? "is-invalid" : ""
                }`}
              />
              {errors.interest && (
                <div className="invalid-feedback">{errors.interest}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                rows="4"
              />
              {errors.bio && (
                <div className="invalid-feedback">{errors.bio}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary w-100 ${
                isSubmitting ? "opacity-75" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
















// import React, { useState } from "react";
// import axios from "axios";

// const UserDashboard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     dob: "",
//     occupation: "",
//     interest: "",
//     bio: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name || formData.name.length < 2) {
//       newErrors.name = "Full name must be at least 2 characters";
//     }

//     if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)) {
//       newErrors.dob = "Please enter a valid date in YYYY-MM-DD format";
//     }

//     if (!formData.occupation || formData.occupation.length < 2) {
//       newErrors.occupation = "Occupation must be at least 2 characters";
//     }

//     if (!formData.interest || formData.interest.length < 3) {
//       newErrors.interest = "Please enter at least one interest";
//     }

//     if (formData.bio.length > 500) {
//       newErrors.bio = "Bio must not exceed 500 characters";
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }

//     setIsSubmitting(true);

//     await axios
//     .post('https://backend-25ro.onrender.com/user-store', formData)
//     .then((response) => {
//       console.log('Response from server:', response.data);
//     })
//     .catch((error) => {
//       console.error('Error submitting form:', error);
//     })
//     .finally(() => {
//       setIsSubmitting(false);
//     });

//   };

//   return (
//     <div className=" mx-2 md:mx-4 h-[100vh]">
//       <div className="text-center my-6">
//         <h2 className="font-semibold text-lg">Welcome to Your Dashboard</h2>
//         <p>Please fill your details of more informations</p>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 max-w-md mx-auto bg-gray-300 p-5 rounded-lg"
//       >
//         {/* Form fields remain the same */}
//         <div className="space-y-2">
//           <label htmlFor="name" className="block font-medium">
//             Full Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           {errors.name && (
//             <p className="text-sm text-red-500">{errors.name}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="dob" className="block font-medium">
//             Date of Birth
//           </label>
//           <input
//             id="dob"
//             name="dob"
//             type="date"
//             value={formData.dob}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           {errors.dob && (
//             <p className="text-sm text-red-500">{errors.dob}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="occupation" className="block font-medium">
//             Occupation
//           </label>
//           <input
//             id="occupation"
//             name="occupation"
//             type="text"
//             value={formData.occupation}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           {errors.occupation && (
//             <p className="text-sm text-red-500">{errors.occupation}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="interest" className="block font-medium">
//             Interests (comma-separated)
//           </label>
//           <input
//             id="interest"
//             name="interest"
//             type="text"
//             value={formData.interest}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           {errors.interest && (
//             <p className="text-sm text-red-500">{errors.interest}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="bio" className="block font-medium">
//             Bio
//           </label>
//           <textarea
//             id="bio"
//             name="bio"
//             value={formData.bio}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-md p-2 w-full"
//           />
//           {errors.bio && <p className="text-sm text-red-500">{errors.bio}</p>}
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`mt-4 bg-blue-500 font-semibold text-white rounded-md p-2 w-full ${
//             isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </button>

//       </form>
//     </div>
//   );
// };

// export default UserDashboard;
