import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import  cocktail3  from "../images/cocktail3.png";

const DropdownClose = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <img className="h-72 shake-chunk shake-constant--hover " src={cocktail3} alt="cocktail" />
      <Heading title="JS Frameworks" className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-black mb-14" />
    
      <h2 className="lg:text-5xl md:text-3xl sm:text-1xl text-1xl font-black mb-14">
        Module Assignment 2
      </h2>
      <Link
        className="py-6 px-10 bg-indigo-500 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce"
        to={`/`}
      >
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default DropdownClose;
