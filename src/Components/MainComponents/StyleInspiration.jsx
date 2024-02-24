import React from "react";
import img from "../../Assets/Untitled design (37).jpg";
import { Link } from "react-router-dom";

const StyleInspiration = () => {
  return (
    <div className=" flex flex-col md:flex-row bg-[#ded5f3] text-black   w-auto	md:w-[50rem] md:ml-[15rem] items-center	">
      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pr-4 text-center px-4 ">
        <h2 className="text-2xl font-bold uppercase mb-4 pt-2">
          You can’t miss timeless essentials!
        </h2>
        <div className="mb-4">
          <p> Look for colors that go perfectly with each mood. </p>
        </div>
        <Link to={"/show-now-main"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Shop Now
            </span>
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Featured Product"
        />
      </div>
    </div>
  );
};

export default StyleInspiration;
