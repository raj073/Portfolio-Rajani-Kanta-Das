import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find(
          (proj) => proj.id.toString() === projectId
        );

        if (foundProject) {
          setProject(foundProject);
        } else {
          setProject(null);
        }
      });
  }, [projectId]);

  console.log(project);

  return (
    <div className="my-3 mx-[5%] mt-20 mb-20">
      <Link to={"/"} className="pb-5">
        <button
          className="bg-transparent hover:bg-blue-500 font-semibold
         text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Back to Home
        </button>
      </Link>
      {/* Header Text */}
      <div className="text-center mb-5">
        <h3
          className="text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-500 to-blue-500 mb-5 uppercase"
        >
          PROJECT DETAILS: {project?.project_name}
        </h3>{" "}
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500 mb-10" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mb-10">
        <PhotoProvider
          toolbarRender={({ rotate, onRotate }) => {
            return (
              <svg
                className="PhotoView-Slider__toolbarIcon"
                onClick={() => onRotate(rotate + 90)}
              />
            );
          }}
        >
          <PhotoView src={project?.album_image1}>
            <img
              className="object-cover w-full h-40 border"
              src={project?.album_image1}
              alt="Image1"
            />
          </PhotoView>
          <PhotoView src={project?.album_image2}>
            <img
              className="object-cover w-full h-40 border"
              src={project?.album_image2}
              alt="Image2"
            />
          </PhotoView>
          <PhotoView src={project?.album_image3}>
            <img
              className="object-cover w-full h-40 border"
              src={project?.album_image3}
              alt="Image3"
            />
          </PhotoView>
          <PhotoView src={project?.album_image4}>
            <img
              className="object-cover w-full h-40 border"
              src={project?.album_image4}
              alt="Image4"
            />
          </PhotoView>
        </PhotoProvider>
      </div>

      {/* Project Details Card */}
      <div className="grid place-items-center font-mono">
        <div className="rounded-md bg-gray-800 shadow-lg">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={project?.imageCard}
                alt="pic"
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold ml-4">
                {project?.project_name}
              </p>
              <hr className="hr-text" data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <p className="flex text-lg px-2 my-1 font-bold text-teal-300">
                  {project?.project_title}
                </p>
              </div>
              <h1 className="font-bold text-lg text-blue-500 ml-7">
                Technologies:
              </h1>
              <p className="ml-9 pt-2">{project?.technologies}</p>
              <div className="md:block px-4 my-4 text-sm text-left ml-3">
                <h1 className="font-bold text-lg text-blue-500">
                  Features and Functionalities:
                </h1>
                <ul className="list-decimal ml-5">
                  {project?.description.map((des, index) => (
                    <li key={index}>{des}</li>
                  ))}
                </ul>
              </div>

              {project?.credentials_email ? (
                <p className="flex text-md px-4 my-2 ml-2">
                  Credentials Admin Email: {project?.credentials_email}
                  <span className="font-bold px-2">|</span>
                  Admin Password: {project?.credentials_password}
                </p>
              ) : (
                <></>
              )}

              <div className="text-xs">
                <a href={project?.liveUrl} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    LIVE LINK
                  </button>
                </a>

                <a href={project?.client} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    GITHUB CLIENT
                  </button>
                </a>

                <a href={project?.server} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    GITHUB SERVER
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center px-4 mb-4 w-full mt-5">
            <div className="flex">
              <i className="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i className="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i className="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
