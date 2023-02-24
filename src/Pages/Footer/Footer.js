import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const scroll = (id_name) => {
    const section = document.querySelector(`#${id_name}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer footer-center p-5 text-base-content rounded mt-10">
      <div className="grid grid-flow-col gap-2">
        <Link
          onClick={() => scroll("home")}
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          HOME
        </Link>
        <Link
          onClick={() => scroll("about")}
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          ABOUT
        </Link>
        <Link
          onClick={() => scroll("education")}
          className="hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium"
        >
          EDUCATION
        </Link>
        <Link
          onClick={() => scroll("skills")}
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          SKILLS
        </Link>
        <Link
          onClick={() => scroll("projects")}
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          PROJECTS
        </Link>
        {/* <Link
          onClick={() => scroll("contact")}
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          CONTACT
        </Link> */}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/rajcse073/"
            target="_blank"
            rel="noreferrer"
            className="mr-5 text-left"
          >
            <button className="text-left">
              <FaLinkedin color="#0077B5" size={40}></FaLinkedin>
            </button>
          </a>

          <a
            href="https://github.com/raj073"
            target="_blank"
            rel="noreferrer"
            className="mr-5"
          >
            <button>
              <FaGithubSquare color="#6e5494" size={40}></FaGithubSquare>
            </button>
          </a>

          <a
            href="https://www.facebook.com/sks.rkd/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <FaFacebookSquare color="#4267B2" size={40}></FaFacebookSquare>
            </button>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by @ Rajani Kanta Das</p>
      </div>
    </footer>
  );
};

export default Footer;
