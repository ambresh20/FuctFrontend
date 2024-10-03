import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const menuItems = [
    { href: "#home", text: "Home" },
    { href: "#features", text: "Features" },
    { href: "#about-us", text: "About Us" },
    { href: "#services", text: "Services" },
    { href: "#gallery", text: "Gallery" },
    { href: "#team", text: "Team" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-indigo-800 shadow-lg p-4 ">
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
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white hover:text-green-200 transition duration-300 hover:font-bold no-underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {isMobile && isOpen && (
          <div className="mt-4 flex justify-center">
            <ul className="space-y-2 text-center">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300 no-underline"
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
