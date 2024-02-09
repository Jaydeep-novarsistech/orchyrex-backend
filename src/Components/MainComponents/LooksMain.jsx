import React, { useState } from "react";
import img from "../../Assets/MainSection.jpg";
import img1 from "../../Assets/5.png";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";
import img4 from "../../Assets/4.png";
import { Link, useNavigate } from "react-router-dom";

export default function LooksMain() {
  const navigate = useNavigate();

  return (
    <div className="pb-16 ">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full ">
          <div className="flex flex-col jusitfy-center items-center space-y-2">
            <div className="flex flex-col justify-center items-center space-y-25">
              <h1 className="text-3xl xl:text-4xl text-center mb-5 leading-10 font-semibold  xl:leading-9 text-gray-800">
                "Explore Our Exclusive Online Collections"
              </h1>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-y-4md:gap-x-8 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <img
                  className="object-center object-cover h-full w-full"
                  src={img}
                  alt="girl-image"
                />

                <button
                  onClick={() => {
                    navigate("/show-now-main");
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                >
                  Shop Now
                </button>

                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={img1}
                    alt="shoe-image"
                  />

                  <button
                    onClick={() => {
                      navigate("/show-now-main");
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Shop Now
                  </button>

                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={img2}
                    alt="watch-image"
                  />

                  <button
                    onClick={() => {
                      navigate("/show-now-main");
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Shop Now
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={img3}
                    alt="shoe-image"
                  />

                  <button
                    onClick={() => {
                      navigate("/show-now-main");
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Shop Now
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src={img4}
                    alt="watch-image"
                  />

                  <button
                    onClick={() => {
                      navigate("/show-now-main");
                    }}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    Shop Now
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
