import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../Assets/login.jpg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userdata, [name]: value });
  };

  const loginWithGoogle = () => {
    window.open("https://backend-fuct.vercel.app/google/callback", "_self");
  };

  const handlesubmit = (e) => {
    let showerrormsg = {};

    // emai validation
    if (userdata.email === "") {
      showerrormsg.email = "Please Enter Email";
    } else if (userdata.email.indexOf("@") === 0) {
      showerrormsg.email = "Invalud position of @";
    } else if (!userdata.email.includes("@")) {
      showerrormsg.email = "Invalid Email";
    } else if (
      userdata.email.charAt(userdata.email.length - 4) !== "." &&
      userdata.email.charAt(userdata.email.length - 3) !== "."
    ) {
      showerrormsg.email = "Invalid Email";
    } else {
      setError({ email: "" });
    }

    // password validation
    if (userdata.password === "") {
      showerrormsg.password = "Please Enter your Password";
    } else if (userdata.password.length < 8) {
      showerrormsg.password = "Password should contain 8 character";
    } else if (userdata.password.search(/["@","#"."$","&","*"]/) === -1) {
      showerrormsg.password =
        "Password should contain at least one special character";
    } else if (userdata.password.search(/[0-9]/) === -1) {
      showerrormsg.password = "Password Should Contain at least one digit";
    } else {
      setError({ password: "" });
    }

    setError(showerrormsg);

    e.preventDefault();

    // SEND DATA using POST
    axios
      .post("https://backend-fuct.vercel.app/login", userdata)
      .then((response) => {
        console.log("Login successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // console.log(userdata);
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {/* welcome content */}
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcom Back to{" "}
          <span className="text-orange-500 "> Fucturica Technologies</span>
        </h2>
      </div>

      {/* form Container  */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 sm:flex-row lg:px-16">
        {/* side design of images */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-[300px] h-[300px] "
            src={login}
            alt="login design"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handlesubmit}>
            {/* Email Box  */}
            <div>
              <label
                htmlFor="email"
                className="block text-2xl font-medium leading-6 text-gray-900"
              >
                Email address
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  placeholder="Enter Email "
                  value={userdata.email}
                  onChange={handlechange}
                  className="block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
                <span className="text-xl text-red-500 ">{error.email}</span>
              </div>
            </div>

            {/* Password input box  */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-2xl font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter Password"
                  value={userdata.password}
                  onChange={handlechange}
                  className="block w-full h-12 ps-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-base focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"
                />
                <span
                  className="absolute right-3 top-[15px] cursor-pointer "
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>

                <span className="text-xl text-red-500 ">{error.password}</span>
              </div>
            </div>

            <div>
              {/* submit button  */}
              <button
                type="submit"
                className="flex w-full h-12 justify-center items-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          {/* FORGOT password  */}
          <div className="flex justify-center items-center mt-4">
            <NavLink to="/forgot-password" className="text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-500  " >
              Forgot Password 
            </NavLink>
          </div>

          {/* Sign Up or Registation Navigate  */}
          <div>
            <p className="mt-5 text-center text-xl text-gray-500">
              Not a Regester or Sign Up?{" "}
              <NavLink
                to="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 text-xl"
              >
                Register here
              </NavLink>
            </p>
          </div>

          {/* OR option  */}
          <div className="flex items-center justify-center my-4">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="mx-4 text-gray-900">OR</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          {/* Sign in with GOOGLE  */}
          <div>
            <button
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-800 my-4 w-full font-bold"
              onClick={loginWithGoogle}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
