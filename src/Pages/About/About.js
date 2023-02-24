import React from "react";
import banner from "../../assets/banner.png";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "07" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-white my-5 mx-[5%]">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold uppercase">
          About <span className="text-cyan-600 uppercase">Me</span>
        </h3>
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500 mt-5" />
        <p className="text-gray-400 my-3 text-xl font-bold">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello! Myself, B.Sc in CSE from CUET and Experienced Software
                Engineer with Professional Working History in various IT
                Companies of the country and Government IT sector.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I Would like to work in the most challenging position with an
                organization that provides ample opportunities to learn and to
                contribute for the growth of an organization.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I also recently launched a course that covers everything needs
                to build a web app with the API using Node & React. Here are a
                few technologies I've been working with recently:
              </p>
              <div className="grid grid-cols-3 gap-4 mt-5">
                <button className="btn btn-xs rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 text-sm">
                  JavaScript ES6
                </button>
                <button className="btn btn-xs rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 text-sm">
                  React JS
                </button>
                <button className="btn btn-xs rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 text-sm">
                  Tailwind CSS
                </button>
                <button className="btn btn-xs rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 text-sm">
                  Bootstrap
                </button>
                <button className="btn btn-xs rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 text-sm">
                  Node.js
                </button>
                <button className="btn btn-xs rounded-none bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 text-sm">
                  MongoDB
                </button>
              </div>
              <div className="flex mt-10 justify-center items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div>
                <h1
                  className="text-xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-cyan-500 to-blue-500 uppercase text-center"
                >
                  follow me on
                </h1>
                {/* <hr align='center' className="border-1 content-center border-blue-500 cursor-pointer hover:border-red-500 duration-500 w-40 mb-3"/> */}
                <div className="divider"></div>

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
                    <FaFacebookSquare
                      color="#4267B2"
                      size={40}
                    ></FaFacebookSquare>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 flex justify-center items-center ">
            <div className="lg:w-72 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={banner}
                alt=""
                className="w-72 object-cover bg-cyan-600 rounded-xl -mt-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
