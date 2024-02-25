import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of links
  const links = [
    { text: "Home", url: "#" },
    { text: "About", url: "#" },
    { text: "Contact", url: "#" },
    { text: "Services", url: "#" },
    { text: "Events", url: "#" }
  ];

  return (
    <nav className="bg-white shadow-sm shadow-bottom">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-gray-600 text-lg font-semibold">Logo</span>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Map over the links array to render the links */}
              {links.map((link, index) => (
                <a key={index} href={link.url} className="text-gray-600 hover:bg-gray-200 hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">{link.text}</a>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Map over the links array to render the links */}
            {links.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-600 hover:bg-gray-200 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">{link.text}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
