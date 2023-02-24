import React from "react";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <span className="font-semibold">LinkedIn</span>{" "}
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rajcse073/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <span className="font-semibold">Github</span> <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/raj073",
    },
    {
      id: 3,
      child: (
        <>
          <span className="font-semibold">Facebook</span>{" "}
          <FaFacebookSquare size={30} />
        </>
      ),
      href: "https://www.facebook.com/sks.rkd/",
    },
    {
      id: 4,
      child: (
        <>
          <span className="font-semibold">Mail</span>{" "}
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rajanidas.cse@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <span className="font-semibold">Resume</span>{" "}
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-6 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-sky-900" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
