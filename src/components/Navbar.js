import * as reactRouterDom from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-bottom-white text-black relative shadow-lg font-mono"
      role="navigation"
    >
      <div className="container lg:mx-auto md:px-4">
        <div
          className="px-0 cursor-pointer md:hidden transition duration-700 ease-in-out"
          onClick={toggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="indigo"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>

        <div className="pr-8 md:block  hidden">
          <reactRouterDom.Link
            to="/"
            className="p-4 text-xl font-sans font-bold text-indigo-700 antialiased hover:text-pink-400"
          >
            Home
          </reactRouterDom.Link>
          <reactRouterDom.Link
            to="/contact"
            className="p-4 text-xl font-sans font-bold text-indigo-700 antialiased hover:text-pink-400"
          >
            Contact
          </reactRouterDom.Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
