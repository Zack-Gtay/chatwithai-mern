import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import hero from "../assets/hero.png";
const Body = () => {
  return (
    <div className="w-full md:h-[800px] flex flex-col mt-12 lg:mt-0 md:mt-0 lg:flex-row md:flex-row justify-between  lg:h-[500px] h-[500px] px-4 md:px-12 lg:px-24   ">
      <div className="flex flex-col justify-center  h-full gap-8 md:gap-6 lg:gap-8">
        <h2 className="text-white text-3xl font-medium">
          Your Reliable Partner in Every Task!
        </h2>
        <p className="text-white text-2xl font-light  w-[100%] lg:w-[100%]">
          Whether you're tackling a complex project, navigating a challenging
          market, or seeking reliable support for daily tasks.
        </p>
        <div className="drop-shadow-md shadow-lg px-3 flex flex-row justify-between  bg-gradient-to-r from-orange-300 to-purple-600 lg:w-[50%] rounded-xl w-[65%] items-center">
          <input
            className="w-[80%] outline-none bg-transparent p-4 placeholder-white placeholder-opacity-95"
            placeholder="Tell us your struggle, and we'll solve together!"
          ></input>
          <Link to={"sign-in"}>
            <FaCircleArrowRight className="w-[25px] h-[25px]  text-white " />
          </Link>
        </div>
      </div>
      <div className="flex justify-end items-center ">
        <img src={hero} className="md:w-[60%] lg:w-[60%]  " />
      </div>
    </div>
  );
};

export default Body;
