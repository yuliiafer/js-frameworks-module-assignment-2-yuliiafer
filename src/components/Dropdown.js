import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-2 text-center items-center bg-indigo-300"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-10 hover:bg-indigo-700 hover:text-white">
        Home
      </Link>
      <Link to="/contact" className="p-10 hover:bg-indigo-700 hover:text-white">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
