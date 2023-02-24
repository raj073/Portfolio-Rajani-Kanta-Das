import React from "react";
import car from "../../assets/car2.jpeg";
import dental from "../../assets/dental.jpeg";
import distance from "../../assets/distance.jpeg";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      _id: "1",
      name: "Car Cruise BD",
      title:
        "Online Car Reseller Website for buying and selling reconditioned or second-hand car",
      technologies:
        "React.js, Firebase, Tailwind CSS, daisyUI, Node.js, MongoDB",
      liveUrl: "https://car-cruise-bd.web.app/",
      client: "https://github.com/raj073/Car-Cruise-BD-Client",
      server: "https://github.com/raj073/Car-Cruise-BD-Server",
      image: car,
    },
    {
      _id: "2",
      name: "Dental Care Service",
      title:
        "Dental Care Service based Website for Servicing and Reviewing for a Dentist",
      technologies:
        "React.js, Firebase, Tailwind CSS, Node.js, MongoDB, Vercel",
      liveUrl: "https://dental-service-care.web.app/",
      client: "https://github.com/raj073/Dental-Service-Care-Client",
      server: "https://github.com/raj073/Dental-Service-Care-Server",
      image: dental,
    },
    {
      _id: "3",
      name: "Distance Learning Platform",
      title: "Online Based Course Enroll Management System",
      technologies: "Bootstrap, Firebase, React.js, Node.js, MongoDB",
      liveUrl: "https://start-logic-client.web.app/",
      client: "https://github.com/raj073/Start-Logic-Client",
      server: "https://github.com/raj073/Start-Logic-Server",
      image: distance,
    },
  ];

  return (
    <div className="mt-10 mx-[7%]" id="projects">
      <div className="text-center mb-5">
        <h3 className="text-4xl font-bold mb-5">COMPLETED PROJECTS</h3>
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500" />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 transform transition duration-500 mb-3">
        {/* Car Cruise BD */}
        <div className="mb-4 p-0 sm:p-4 transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 duration-900">
          <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-gray-700">
            <div className="relative w-full overflow-hidden">
              <img
                src={car}
                alt=""
                className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="my-3 px-5 flex flex-col justify-around items-center">
              <h1 className="title-font text-xl font-bold text-white mb-2">
                Car Cruise BD
              </h1>
              <p className="text-left overflow-hidden leading-relaxed text-sm text-white font-medium cursor-pointer">
                Online Car Reseller Website for buying and selling reconditioned
                or second-hand car
              </p>
              <p className="line-clamp-8 text-left py-5 overflow-hidden leading-relaxed text-sm text-white font-medium cursor-pointer">
                <span
                  className="text-lg font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  Technologies:{" "}
                </span>{" "}
                React.js, Firebase, Tailwind CSS, daisyUI, Node.js, MongoDB
              </p>
              <Link to="/carcruisebd" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500">
                  EXPLORE MORE
                </button>
              </Link>
            </div>

            {/* ::CARD FOOTER */}
            <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
              <a
                href="https://car-cruise-bd.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaArrowAltCircleRight></FaArrowAltCircleRight>&nbsp;LIVE
                </button>
              </a>
              <a
                href="https://github.com/raj073/Car-Cruise-BD-Client"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaGithub></FaGithub>&nbsp;CLIENT
                </button>
              </a>
              <a
                href="https://github.com/raj073/Car-Cruise-BD-Server"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaGithub></FaGithub> &nbsp;SERVER
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Dental Service */}
        <div className="mb-4 p-0 sm:p-4 transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 duration-900">
          <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-gray-700">
            <div className="relative w-full overflow-hidden">
              <img
                src={dental}
                alt=""
                className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="my-3 px-5 flex flex-col justify-around items-center">
              <h1 className="title-font text-xl font-bold text-white mb-2">
                Dental Care Service
              </h1>
              <p className="text-left overflow-hidden leading-relaxed text-sm text-white font-medium cursor-pointer">
                Dental Care Service based Website for Servicing and Reviewing
                for a Dentist
              </p>
              <p className="line-clamp-8 text-left py-5 overflow-hidden leading-relaxed text-sm text-white font-medium cursor-pointer">
                <span
                  className="text-lg font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  Technologies:{" "}
                </span>{" "}
                React.js, Firebase, Tailwind CSS, Node.js, MongoDB, Vercel
              </p>
              <Link to="/dentalcare" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500">
                  EXPLORE MORE
                </button>
              </Link>
            </div>

            {/* ::CARD FOOTER */}
            <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
              <a
                href="https://dental-service-care.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaArrowAltCircleRight></FaArrowAltCircleRight>&nbsp;LIVE
                </button>
              </a>
              <a
                href="https://github.com/raj073/Dental-Service-Care-Client"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaGithub></FaGithub>&nbsp;CLIENT
                </button>
              </a>
              <a
                href="https://github.com/raj073/Dental-Service-Care-Server"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaGithub></FaGithub> &nbsp;SERVER
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Distance Learning Platform */}
        <div className="mb-4 p-0 sm:p-4 transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 duration-900">
          <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-gray-700">
            <div className="relative w-full overflow-hidden">
              <img
                src={distance}
                alt=""
                className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="my-3 px-5 flex flex-col justify-around items-center">
              <h1 className="title-font text-xl font-bold text-white mb-2">
                Distance Learning Platform
              </h1>
              <p className="text-left overflow-hidden leading-relaxed text-sm text-white font-medium">
                Online Based Course Enroll Management System
              </p>
              <p className="line-clamp-8 text-left py-5 overflow-hidden leading-relaxed text-sm text-white font-medium">
                <span
                  className="text-lg font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                  Technologies:{" "}
                </span>{" "}
                Bootstrap, Firebase, React.js, Node.js, MongoDB
              </p>
              <Link
                to="/distancelearning"
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <button className="btn btn-sm rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 group-hover:cursor-pointer">
                  EXPLORE MORE
                </button>
              </Link>
            </div>

            {/* ::CARD FOOTER */}
            <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
              <a
                href="https://start-logic-client.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none cursor-pointer">
                  <FaArrowAltCircleRight></FaArrowAltCircleRight>&nbsp;LIVE
                </button>
              </a>
              <a
                href="https://github.com/raj073/Start-Logic-Client"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaGithub></FaGithub>&nbsp;CLIENT
                </button>
              </a>
              <a
                href="https://github.com/raj073/Start-Logic-Server"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                  <FaGithub></FaGithub> &nbsp;SERVER
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
