import React from "react";
import { Link } from "react-router-dom";
import dental from "../../../assets/dentalcare/dental.png";
import dental1 from "../../../assets/dentalcare/dental1.png";
import dental2 from "../../../assets/dentalcare/dental2.png";
import dental3 from "../../../assets/dentalcare/dental3.png";
import dental4 from "../../../assets/dentalcare/dental4.png";

const DentalCare = () => {
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
          PROJECT DETAILS: DENTAL CARE SERVICE
        </h3>{" "}
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500 mb-10" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mb-10">
        <img
          className="object-cover w-full border"
          alt="Image1"
          src={dental1}
        />
        <img
          className="object-cover w-full border"
          alt="Image2"
          src={dental2}
        />
        <img
          className="object-cover w-full border"
          alt="Image3"
          src={dental3}
        />
        <img
          className="object-cover w-full border"
          alt="Image4"
          src={dental4}
        />
      </div>

      {/* Project Details Card */}
      <div className="grid place-items-center font-mono">
        <div className="rounded-md bg-gray-800 shadow-lg">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={dental}
                alt="DentalPic"
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold ml-4">
                Dental Care Service
              </p>
              <hr className="hr-text" data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <p className="flex text-md px-4 my-2">
                  React.js | Firebase | Tailwind CSS | Node.js | MongoDB |
                  Vercel
                </p>
              </div>
              <p className="ml-7">
                Dental Care Service based Website for Servicing and Reviewing
                for a Dentist
              </p>
              <p className="md:block px-4 my-4 text-sm text-left ml-8">
                <ul className="list-decimal">
                  <li>
                    There is a homepage you will find the Dental care service,
                    appointment and frequently ask questions (FAQ)
                  </li>
                  <li>
                    If anyone wants he can click the Dental care service details
                    and will find detail information about the service.
                  </li>
                  <li>
                    In service details user can also find the review of that
                    service and information about the reviewer.
                  </li>
                  <li>
                    If user is logged in, then he can also add the service for
                    that doctor
                  </li>
                  <li>
                    After logged in, there is a tab named my review, where user
                    can edit and delete his review
                  </li>
                  <li>
                    Seller can view the product and also can delete the product.
                  </li>
                  <li>
                    From the header menu visitors can visit the services and
                    blog. also they can login or log out
                  </li>
                </ul>
              </p>

              <div className="text-xs">
                <a
                  href="https://dental-service-care.web.app/"
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
                  href="https://github.com/raj073/Dental-Service-Care-Client"
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
                  href="https://github.com/raj073/Dental-Service-Care-Server"
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
              <i className="material-icons ml-2 text-yellow-600">star</i>
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

export default DentalCare;
