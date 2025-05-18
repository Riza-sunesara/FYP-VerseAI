import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiUser, FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const DefaultNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/community" },
    { name: "Profile", path: "/profile" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavOpen(false);
        setProfileDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    setProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-lg font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          VERSE AI
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-white">
          {navLinks
            .filter(link => link.name !== "Profile")
            .map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="hover:text-cyan-400 transition duration-300">
                  {name}
                </Link>
              </li>
            ))}

          {/* Profile Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDesktopDropdown(!desktopDropdown)}
              className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-white text-lg"
            >
              <FaUserCircle size={24} />
            </button>

            {desktopDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-2 z-50">
                {navLinks
                  .filter(link => link.name === "Profile" || link.name === "Home")
                  .sort((a, b) => b.name.localeCompare(a.name))
                  .map(({ name, path }) => (
                    <Link
                      key={name}
                      to={path}
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDesktopDropdown(false)}
                    >
                      {name === "Profile" ? (
                        <>
                          <FiUser className="mr-2 text-cyan-700" /> My Profile
                        </>
                      ) : (
                        <>
                          <FiLogOut className="mr-2 text-red-600" /> Sign Out
                        </>
                      )}
                    </Link>
                  ))}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none z-50"
          onClick={toggleNav}
        >
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {navOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center text-white text-2xl space-y-6 z-40">
          {navLinks
            .filter(link => link.name !== "Profile")
            .map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="hover:text-cyan-400"
                onClick={() => setNavOpen(false)}
              >
                {name}
              </Link>
            ))}

          {/* Mobile Profile Dropdown */}
          <div className="flex flex-col items-center">
            <button className="hover:text-cyan-400" onClick={toggleProfileDropdown}>
              Profile
            </button>
            {profileDropdown && (
              <div className="mt-3 flex flex-col text-lg space-y-3 items-center">
                {navLinks
                  .filter(link => link.name === "Profile" || link.name === "Home")
                  .sort((a, b) => b.name.localeCompare(a.name))
                  .map(({ name, path }) => (
                    <Link
                      key={name}
                      to={path}
                      className="hover:text-cyan-400"
                      onClick={() => {
                        setNavOpen(false);
                        setProfileDropdown(false);
                      }}
                    >
                      {name === "Profile" ? "My Profile" : "Sign Out"}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DefaultNav;
