import React from "react";
import html from "../../assets/TechnicalSkills/html.png";
import css from "../../assets/TechnicalSkills/css.png";
import tailwind from "../../assets/TechnicalSkills/tailwind.png";
import bootstrap from "../../assets/TechnicalSkills/bootstrap.png";
import javascript from "../../assets/TechnicalSkills/javascript.png";
import reactImage from "../../assets/TechnicalSkills/react.png";
import node from "../../assets/TechnicalSkills/node.png";
import express from "../../assets/TechnicalSkills/express.png";
import mongodb from "../../assets/TechnicalSkills/mongodb.png";
import firebaseImage from "../../assets/TechnicalSkills/firebase.png";
import githubImage from "../../assets/TechnicalSkills/github.png";
import redux from "../../assets/TechnicalSkills/redux.png";
import typescript from "../../assets/TechnicalSkills/typescript.png";
import next from "../../assets/TechnicalSkills/next.png";

const TechnicalSkills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: express,
      title: "Express JS",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-green-700",
    },
    {
      id: 10,
      src: firebaseImage,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 11,
      src: githubImage,
      title: "GitHub",
      style: "shadow-gray-600",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 13,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 14,
      src: next,
      title: "Next.Js",
      style: "shadow-gray-600",
    },
  ];
  return (
    <div name="experience" className="w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
