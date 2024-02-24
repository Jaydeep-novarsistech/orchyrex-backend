import React from "react";
import product from "../../Assets/product.gif";
import productimg from "../../Assets/orchy  (1).png";
import productimg1 from "../../Assets/orchy  (2).png";
import productimg2 from "../../Assets/orchy (3).png";
import productimg3 from "../../Assets/orchy (5).png";
import productimg4 from "../../Assets/orchy (9).png";
import productimg5 from "../../Assets/orchy10 .png";
import { Link } from "react-router-dom";
// Placeholder GIF component
const GifPlaceholder = () => {
  return (
    <img
      src={product}
      alt="Placeholder GIF"
      className="w-full object-cover"
      style={{ height: "27em" }}
    />
  );
};

const SingleCard = ({ image, productAMt }) => {
  return (
    <div className="flex duration-300 hover:-translate-y-5 lg:w-full rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all hover:saturate-150 flex-col items-center overflow-hidden bg-white shadow-1 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 mb-4">
      <img src={image} alt="" className="w-full h-36 object-cover" />
      <div className="p-3">
        <p className="mb-2  text-[2rem]  md:text-sm text-body-color dark:text-dark-6 font-bold">
          &#8377;{productAMt}
        </p>
      </div>
    </div>
  );
};

const WinterFav = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-[4rem] md:pt-10 dark:bg-dark lg:pb-10 lg:pt-[100px]">
      <div
        className="container flex flex-col lg:flex-row items-center gap-4 xl:mt-[1rem] sm:mt-[14rem]"
        style={{
          maxWidth: "100%",
        }}
      >
        {/* Left Section with GIF */}
        <div className="w-full lg:w-1/4">
          <GifPlaceholder />
        </div>

        {/* Right Section with Card Images and Content */}
        <div className="flex flex-col items-center w-full lg:w-3/4 p-4">
          <h1 className="text-3xl font-bold mb-4 uppercase text-center text-dark dark:text-white">
            Men's Top Picks!
          </h1>
          <p className="font-bold mb-6 text-center text-body-color dark:text-dark-6">
            Discover an array of casual shirts and more in our curated men's
            collection.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <SingleCard image={productimg} productAMt="2500" />
            <SingleCard image={productimg1} productAMt="2500" />
            <SingleCard image={productimg2} productAMt="2500" />
            <SingleCard image={productimg3} productAMt="2500" />
            <SingleCard image={productimg4} productAMt="2500" />
            <SingleCard image={productimg5} productAMt="2500" />
          </div>
          <div className="flex justify-center mt-6">
            <Link to={"/show-now-main"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Shop Now
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            .w-full.h-36.object-cover {
              height: auto;
            }

            .grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WinterFav;
