import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Assets/Untitled design (42).png";
import img2 from "../../Assets/cta2.jpg";
import img3 from "../../Assets/Orchyrex (1).png";

const CTASection = () => {
  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
              Modern Charm
            </p>
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-7/7">
            <p className="text-base leading-6 text-gray-600 font-bold">
              A unique blend of modern style and timeless charm. Elevate your
              wardrobe with this sleek and distinctive shirt.
            </p>
          </div>
          <div className="mt-16 w-full">
            <Link to={"/show-now-main"}>
              <button
                className="px-4 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700
                        relative text-lg p-0.5 mb-2 me-2 overflow-hidden  font-medium  rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Shop Now
                </span>

                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
          <div>
            <img className="hidden lg:block" src={img1} alt="sofa" />
            <img
              className="w-80 sm:w-auto lg:hidden"
              src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png"
              alt="sofa"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-5 lg:space-y-5 xl:space-y-8">
            <div>
              <img className="hidden lg:block" src={img2} alt="chairs" />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                alt="chairs"
              />
            </div>
            <div>
              <img className="hidden lg:block" src={img3} alt="chairs" />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png"
                alt="chairs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
