import React from "react";
import { TypeAnimation } from "react-type-animation";
import banner from "../../assets/banner.png";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import ScrollDown from "./ScrollDown";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume Rajani Kanta Das.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <section className="mt-24" id="home">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="mr-10 md:mb-10">
              <h1 className="text-4xl text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Rajani Kanta Das
              </h1>
              <p className="py-6 text-left">
                I Develop Code, Make Websites, Debug And Testing Errors, Deploy
                for Explore.
              </p>

              <div className="mb-5 text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1000,
                    "React JS Developer",
                    1000,
                    "Software Engineer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Front End Developer",
                    1000,
                  ]}
                  //  Continuing previous Text
                  style={{ fontSize: "2.5em" }}
                  wrapper="div"
                  repeat={Infinity}
                />
              </div>

              <button
                onClick={onButtonClick}
                className="mt-5 btn btn-primary rounded-none text-white bg-gradient-to-r from-cyan-500 to-blue-500 absolute hover:border-none"
              >
                DOWNLOAD RESUME
              </button>
            </div>
            <div className="p-10 sm:mt-10 ml-10">
              <img
                src={banner}
                alt=""
                className="max-w-sm rounded-full lg:-mt-32 w-64 hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
        <Link className="group ml-36 flex items-center group-hover:cursor-pointer">
          <ScrollDown></ScrollDown>
          <h1 className="text-white ml-3 text-lg">Scroll Down</h1>
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </section>

      <section>
        <SocialLinks></SocialLinks>
      </section>

      <section>
        <About></About>
      </section>

      <section>
        <Education></Education>
      </section>

      <section>
        <Skills></Skills>
      </section>

      <section>
        <Projects></Projects>
      </section>

      <section>
        <Contact></Contact>
      </section>
    </>
  );
};

export default Home;
