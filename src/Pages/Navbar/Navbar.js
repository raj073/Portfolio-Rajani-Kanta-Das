import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/banner.png";

const Navbar = () => {
  const scroll = (id_name) => {
    const section = document.querySelector(`#${id_name}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const menuItems = (
    <React.Fragment>
      <Link
        onClick={() => scroll("banner")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium"
        to="/"
      >
        HOME
      </Link>

      <Link
        onClick={() => scroll("about")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium"
      >
        ABOUT ME
      </Link>

      <Link
        onClick={() => scroll("education")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium"
      >
        EDUCATION
      </Link>

      <Link
        onClick={() => scroll("skills")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium"
      >
        SKILLS
      </Link>

      <Link
        onClick={() => scroll("projects")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium"
      >
        PROJECTS
      </Link>

      <Link
        to="/blogs"
        className="hover:bg-gray-700 hover:text-white text-white px-6 py-2 rounded-md text-sm font-medium"
      >
        BLOGS
      </Link>

      <Link
        onClick={() => scroll("contact")}
        className="hover:bg-gray-700 hover:text-white px-6 text-white py-2 rounded-md text-sm font-medium"
      >
        CONTACT
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar text-lg font-semibold bg-[#0D1322] fixed top-0 z-50 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:scale-110 duration-300"
            >
              {menuItems}
            </ul>
          </div>
          <div className="hidden lg:block lg:ml-8">
            <h1 className="text-2xl font-signature ml-2 hover:scale-110 duration-600 cursor-pointer">
              Rajani Kanta Das
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
