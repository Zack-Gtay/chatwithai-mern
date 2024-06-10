import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Logo from ".//../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" text-white px-4 md:px-12 lg:px-12 py-4 shadow-md flex justify-between items-center ">
      <Link to={"/"}>
        <div className="text-2xl font-bold flex flex-row gap-2 justify-center items-center">
          <motion.img
            src={Logo}
            className="w-16 h-16"
            animate={{ y: ["0%", "-20%", "0%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeOut",
            }}
          />

          <h1 className="font-medium">TaskEase</h1>
        </div>
      </Link>
      <nav className="hidden md:flex space-x-4 text-white ">
        <Link to={"/sign-in"}>Sign In</Link>
        <Link to={"/sign-up"}>Sign Up</Link>
      </nav>
      <div className="md:hidden  ">
        <button onClick={toggleMenu}>
          {menuOpen ? "" : <FaBarsStaggered size={24} />}
        </button>
      </div>
      <div
        style={{ backgroundColor: "#ff735d" }}
        className={`fixed w-[40%] z-10 top-0 right-0 h-full opacity-90 text-white flex flex-col items-center space-y-4 pt-20 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <FaTimes size={24} color="black" />
        </button>
        <Link to={"/sign-in"} className="text-black">
          Sign In
        </Link>
        <Link to={"/sign-up"} className="text-black">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
