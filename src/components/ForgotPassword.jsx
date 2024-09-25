import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
	const [data, setData] = useState({
		email: ""
	}) ;
	const [error, setError] = useState({});
	
	const handlechange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setData({ ...data, [name]: value });
	};

	const handlesubmit = (e) => {
		let showerrormsg = {};
	
		// emai validation
		if (data.email === "") {
		  showerrormsg.email = "Please Enter Email";
		} else if (data.email.indexOf("@") === 0) {
		  showerrormsg.email = "Invalud position of @";
		} else if (!data.email.includes("@")) {
		  showerrormsg.email = "Invalid Email";
		} else if (
		  data.email.charAt(data.email.length - 4) !== "." &&
		  data.email.charAt(data.email.length - 3) !== "."
		) {
		  showerrormsg.email = "Invalid Email";
		} else {
		  setError({ email: "" });
		}
	
		setError(showerrormsg);
		e.preventDefault();
	
		// SEND DATA using POST
		axios
		  .post("https://backend-fuct.vercel.app/forgot-password", data)
		  .then((response) => {
			console.log("Login successfully:", response.data);
		  })
		  .catch((error) => {
			console.error("Error submitting form:", error);
		  });
	
		// console.log(data);
		setData({email: ""});
	  };

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center gap-20">
      <div className="font-bold text-2xl text-gray-600">
        <h2 className="tracking-widest">Forgot Password</h2>
      </div>

      <div>
        <form onSubmit={handlesubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-2xl font-medium leading-6 text-gray-900"
            >
              Email address
            </label>

            <div className="mt-4 mb-8">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                placeholder="Enter Email "
                value={data.email}
                onChange={handlechange}
                className="block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
              />
              <span className="text-xl text-red-500 ">{error.email}</span>
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full h-12 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>

        </form>
      </div>
	  
    </div>
  );
};

export default ForgotPassword;
