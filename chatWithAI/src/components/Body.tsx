import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";

const placeholders = [
  "Facing an issue? Let's find the solution together...",
  "Stuck on something? Let's solve it together...",
  "Need help? Let's conquer it together...",
];

const headings = [
  "Your Reliable Partner in Every Task!",
  "Your Trusted Ally in Every Endeavor!",
  "Your Dependable Guide in Every Challenge!",
];

const Body = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [headingIndex, setHeadingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typeNextLetter = () => {
      if (letterIndex < headings[headingIndex].length) {
        setDisplayText((prev) => prev + headings[headingIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setHeadingIndex((prev) => (prev + 1) % headings.length);
          setDisplayText("");
          setLetterIndex(0);
        }, 100); // Change phrase every 3 seconds
      }
    };

    const typingInterval = setInterval(typeNextLetter, 100);

    return () => clearInterval(typingInterval);
  }, [letterIndex, headingIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen md:h-[800px] flex flex-col lg:mt-0 md:mt-0 lg:flex-row md:flex-row justify-between lg:h-[500px] mt-0 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col justify-center h-full gap-6  md:gap-6 lg:gap-8">
        <h2 className="text-white text-5xl font-medium h-[30%]  lg:h-[30%] md:h-[25%]">
          <motion.span key={displayText} animate={{ opacity: 1 }}>
            {displayText}
          </motion.span>
        </h2>
        <p className="text-white mt-3 text-2xl font-light w-[100%] lg:w-[100%]">
          Whether you're tackling a complex project, navigating a challenging
          market, or seeking reliable support for daily tasks.
        </p>
        <div className="drop-shadow-md shadow-sm  px-3 flex flex-row justify-between bg-gradient-to-r from-orange-300 to-purple-600 lg:w-[100%] rounded-xl w-full items-center">
          <motion.input
            className="w-[100%] lg:w-[100%] text-white outline-none bg-transparent p-4 placeholder-white placeholder-opacity-95"
            placeholder={placeholders[placeholderIndex]}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.2 }}
          ></motion.input>
          <Link to={"sign-in"}>
            <FaCircleArrowRight className="w-[25px] h-[25px] text-white" />
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <img src={hero} className="md:w-[60%] lg:w-[60%]" alt="Hero" />
      </div>
    </div>
  );
};

export default Body;
