import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, userType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogoutModal = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  const LogoutModal = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>

      <div className="bg-white rounded-lg shadow-lg p-4 md:p-10 z-10 m-5">
        <h2 className="text-xl font-bold mb-4">
          Are you sure you want to logout ?
        </h2>
        <p className="mb-6">You will be redirected to the login page.</p>

        <div className="flex justify-around ">
          <button
            onClick={toggleLogoutModal}
            className="mr-4 px-4 py-2 bg-gray-400 hover:bg-gray-600 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );

  const LogoutButton = () => (
    <button
      onClick={toggleLogoutModal}
      className="text-white hover:text-green-200 transition duration-300 hover:font-bold"
    >
      Logout
    </button>
  );

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-400 to-indigo-800 shadow-lg p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-3xl">Fucturica</div>
            {isMobile ? (
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            ) : (
              <ul className="hidden lg:flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/aboutus"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contactus"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    Contact Us
                  </Link>
                </li>

                {!isLoggedIn && (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
                {isLoggedIn && userType === "admin" ? (
                  <li>
                    <Link
                      to="/admin-dashboard"
                      className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  isLoggedIn && (
                    <>
                      <li>
                        <Link
                          to="/user-dashboard"
                          className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                        >
                          User Details
                        </Link>
                      </li>
                      <li>
                        <LogoutButton />
                      </li>
                    </>
                  )
                )}
              </ul>
            )}
          </div>

          {isMobile && isOpen && (
            <div className="mt-4 flex justify-center">
              <ul className="space-y-2 text-center">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/aboutus"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contactus"
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    Contact Us
                  </Link>
                </li>

                {!isLoggedIn && (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/login"
                        className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/register"
                        className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
                {isLoggedIn && userType === "admin" ? (
                  <li>
                    <Link
                      to="/admin-dashboard"
                      className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  isLoggedIn && (
                    <>
                      <li>
                        <Link
                          to="/user-dashboard"
                          className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                        >
                          User Details
                        </Link>
                      </li>
                      <li>
                        <LogoutButton />
                      </li>
                    </>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
      {isLogoutModalOpen && <LogoutModal />}
    </>
  );
};

export default Navbar;
