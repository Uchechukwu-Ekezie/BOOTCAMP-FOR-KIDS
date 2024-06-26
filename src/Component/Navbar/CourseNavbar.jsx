import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../Navbar/Navbar.css";
import Button from "../Button/Button";

function CourseNavbar({ Enroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Web Design", link: "/" },
    { id: 3, text: "UI/UX Design", link: "/courses" },
    { id: 4, text: "Digital Marketing", link: "/contact" },
    { id: 4, text: "Cyber security", link: "/contact" },
  ];

  return (
    <header className="fixed z-50 w-full bg-yellow-500 shadow-md ">
      <div className="container flex items-center justify-between mx-auto my-2 md:px-6">
        <Link to="/" className="flex items-center">
          <img
            src="/Assets/Image/Colorful_Brain_Human_Technology_Logo-removebg-preview.png"
            alt="logo"
            className="w-16 h-16 md:w-24 md:h-24"
          />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8" />
            ) : (
              <AiOutlineMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-2/4 h-full bg-yellow-500 transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:h-auto md:bg-transparent md:translate-x-0`}
        >
          <ul className="flex flex-col items-start justify-center h-full p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-8 md:p-0">
            {navItems.map((item) => (
              <li key={item.id} className="md:border-none">
                <NavLink
                  to={item.link}
                  className="block font-extrabold text-black transition-all hover:text-white md:text-base"
                  onClick={toggleMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
            <li className="mt-4 md:hidden">
              <Button txt="Speak With Us" className="bg-white rounded-xl " />
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button txt="Speak With Us" className="text-black bg-white rounded-xl" />
        </div>
      </div>
    </header>
  );
}

export default CourseNavbar;
