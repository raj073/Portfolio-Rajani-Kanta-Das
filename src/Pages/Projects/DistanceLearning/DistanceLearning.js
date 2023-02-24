import React from "react";
import { Link } from "react-router-dom";
import dl from "../../../assets/distancelearning/dl.jpeg";
import dl1 from "../../../assets/distancelearning/dl1.png";
import dl2 from "../../../assets/distancelearning/dl2.png";
import dl3 from "../../../assets/distancelearning/dl3.png";
import dl4 from "../../../assets/distancelearning/dl4.png";

const DistanceLearning = () => {
  return (
    <div className="my-3 mx-[5%] mt-20">
      <Link to={"/"} className="pb-5">
        <button
          class="bg-transparent hover:bg-blue-500 font-semibold
         text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Back to Home
        </button>
      </Link>
      {/* Header Text */}
      <div className="text-center mb-5">
        <h3
          className="text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-500 to-blue-500 mb-5"
        >
          PROJECT DETAILS: DISTANCE LEARNING PLATFORM
        </h3>{" "}
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500 mb-10" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mb-10">
        <img className="object-cover w-full border" alt="Image1" src={dl1} />
        <img className="object-cover w-full border" alt="Image2" src={dl2} />
        <img className="object-cover w-full border" alt="Image3" src={dl3} />
        <img className="object-cover w-full border" alt="Image4" src={dl4} />
      </div>

      {/* Project Details Card */}
      <div className="grid place-items-center font-mono">
        <div className="rounded-md bg-gray-800 shadow-lg">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={dl}
                alt="DentalPic"
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold ml-4">
                Distance Learning Platform
              </p>
              <hr className="hr-text" data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <p className="flex text-md px-4 my-2">
                  React.js | Bootstrap | Firebase | Node.js, MongoDB | React
                  Router DOM | React-to-Pdf
                </p>
              </div>
              <p className="ml-7">
                Online Based Course Enroll Management System
              </p>
              <p className="md:block px-4 my-4 text-sm text-left ml-8">
                <ul className="list-decimal">
                  <li>There is a Home Page with Responsive Carousel.</li>
                  <li>
                    Multi Options Bootstrap Navbar - Course, Blog, FAQ and
                    Toggle Login
                  </li>
                  <li>
                    6 Responsive Clickable Course Card with a Dynamic Route
                  </li>
                  <li>Mobile, Tablet and Desktop Responsive</li>
                  <li>Private Route Page, 404 Not Found Route page.</li>
                  <li>Firebase Authentication</li>
                  <li>Dark and Light theme Toggle Option, A fancy Footer</li>
                </ul>
              </p>

              <div className="text-xs">
                <a
                  href="https://start-logic-client.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    LIVE LINK
                  </button>
                </a>

                <a
                  href="https://github.com/raj073/Start-Logic-Client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    GITHUB CLIENT
                  </button>
                </a>

                <a
                  href="https://github.com/raj073/Start-Logic-Server"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default DistanceLearning;
