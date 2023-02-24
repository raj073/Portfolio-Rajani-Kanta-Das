import React from "react";
import { Link } from "react-router-dom";
import coming from "../../assets/coming.jpg";

const Blogs = () => {
  return (
    <>
      <div className="mt-40 my-5 mx-[5%] card lg:card-side shadow-xl bg-[#E5EAEE] p-10">
        <figure>
          <img src={coming} alt="Album" className="h-64 w-96"/>
        </figure>
        <div className="card-body">
          
          <div className="card-actions justify-center">
          <h2 className="card-title text-4xl text-center">Coming Soon</h2>
            <Link to="/">
            <button className="btn btn-primary text-white rounded-none bg-gradient-to-r from-cyan-500 to-blue-500">
                BACK TO HOME
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
