import React, { useState } from "react";
import { send } from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    send("service_zjlbx59", "template_e56702b", toSend, "srTVzdtVeNX9aiaDd")
      .then((response) => {
        console.log("Success", response.status, response.text);
        toast.success(
          "Thank You! Your Email Has Been Received. We'll be Get in Touch Very Soon.",
          {
            position: "top-right",
          }
        );
        form.reset();
        setToSend({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("Failed", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-[5%]" id="contact">
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold mb-5">SEND A MESSAGE</h3>{" "}
          <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500" />
        </div>

        <div className="grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4 mb-5">
              Please Fill the form and send a Message
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Tangail, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801739721036</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>rajanidas.cse@gmail.com</span> <br />
              </p>
            </div>
          </div>
          <form
            onSubmit={handleMessage}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label>
              <span className="mb-1">Full Name</span>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={toSend.name}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 
                      text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              />
            </label>
            <label>
              <span className="text-left">Email Address</span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={toSend.email}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 
                      text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-2"
              />
            </label>
            <label>
              <span className="mb-1">Your Message</span>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={toSend.message}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 
                      text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors 
                      duration-200 ease-in-out mt-2"
              ></textarea>
            </label>

            <div className="p-2 w-full block">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
