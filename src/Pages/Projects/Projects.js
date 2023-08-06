import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mt-10 mx-[7%]" id="projects">
      <div className="text-center mb-5">
        <h3 className="text-4xl font-bold mb-5">COMPLETED PROJECTS</h3>
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500" />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 transform transition duration-500 mb-3">
        {projects.map((project) => (
          <div
            key={project?.id}
            className="mb-4 p-0 sm:p-4 transition ease-in-out delay-00 hover:-translate-y-1 hover:scale-80 duration-900"
          >
            <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-gray-700">
              <div className="relative w-full overflow-hidden">
                <img
                  src={project?.image}
                  alt=""
                  className="w-full h-40 object-cover object-center transition-all duration-300 transform group-hover:scale-110"
                />
              </div>

              <div className="my-3 px-5 flex flex-col justify-around items-center">
                <h1 className="title-font text-xl font-bold text-white mb-2">
                  {project?.project_name}
                </h1>
                <p className="text-left overflow-hidden leading-relaxed text-sm text-white font-medium cursor-pointer">
                  {project?.project_title}
                </p>
                <p className="line-clamp-8 text-left py-5 overflow-hidden leading-relaxed text-sm text-white font-medium cursor-pointer">
                  <span
                    className="text-lg font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-500 to-blue-500"
                  >
                    Technologies:{" "}
                  </span>{" "}
                  {project?.technologies}
                </p>
                <Link
                  to={{
                    pathname: `/project/${project.id}`,
                    state: { project },
                  }}
                >
                  <button className="btn btn-sm rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500">
                    EXPLORE MORE
                  </button>
                </Link>
              </div>

              <div className="py-3 px-2 flex flex-wrap justify-around border-t border-gray-200">
                <a href={project?.liveUrl} target="_blank" rel="noreferrer">
                  <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>&nbsp;LIVE
                  </button>
                </a>
                <a href={project?.client} target="_blank" rel="noreferrer">
                  <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                    <FaGithub></FaGithub>&nbsp;CLIENT
                  </button>
                </a>
                <a href={project?.server} target="_blank" rel="noreferrer">
                  <button className="btn btn-xs rounded-none border-none bg-sky-200 text-black hover:bg-green-500 hover:text-white font-bold hover:border-none">
                    <FaGithub></FaGithub> &nbsp;SERVER
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
