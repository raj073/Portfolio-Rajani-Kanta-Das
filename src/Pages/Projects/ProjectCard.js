import React from "react";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { _id, name, title, technologies, liveUrl, client, server, image } =
    project;

  return (
    <div className="mb-4 p-0 sm:p-4 transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 duration-900">
      <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
          />
        </div>

        <div className="my-3 px-5 flex flex-col justify-around items-center">
          <h1 className="title-font text-xl font-bold text-gray-800 mb-2">
            {name}
          </h1>
          <p className="text-left overflow-hidden leading-relaxed text-sm text-gray-500 font-medium cursor-pointer">
            {title}
          </p>
          <p className="line-clamp-8 text-left py-5 overflow-hidden leading-relaxed text-sm text-gray-500 font-medium cursor-pointer">
            <span
              className="text-lg font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Technologies:{" "}
            </span>{" "}
            {technologies}
          </p>
          <button className="btn btn-sm rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500">
            EXPLORE MORE
          </button>
        </div>

        {/* ::CARD FOOTER */}
        <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <button className="btn btn-xs rounded-none bg-teal-500 hover:bg-green-500 text-white font-bold hover:border-none">
              <FaArrowAltCircleRight></FaArrowAltCircleRight>&nbsp;LIVE
            </button>
          </a>
          <a href={client} target="_blank" rel="noreferrer">
            <button className="btn btn-xs rounded-none bg-teal-500 hover:bg-green-500 text-white font-bold hover:border-none">
              <FaGithub></FaGithub>&nbsp;CLIENT
            </button>
          </a>
          <a href={server} target="_blank" rel="noreferrer">
            <button className="btn btn-xs rounded-none bg-teal-500 hover:bg-green-500 text-white font-bold hover:border-none">
              <FaGithub></FaGithub> &nbsp;SERVER
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
