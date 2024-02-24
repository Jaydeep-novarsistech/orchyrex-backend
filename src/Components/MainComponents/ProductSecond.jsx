import React from "react";
import img1 from "../../Assets/heritage (1).jpg";
import img2 from "../../Assets/heritage (2).jpg";
import img3 from "../../Assets/heritage.jpg";
import { Link } from "react-router-dom";
const ProductSecond = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[100px]">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <BlogCard
            CardDescription="Black Super Soft Premium 100%Cotton Linen plain Formal Shirt"
            image={img1}
          />
          <BlogCard
            CardDescription="light Blue Shirt / PC Cotton Print Laffer Finish printed shirt"
            image={img2}
          />
          <BlogCard
            CardDescription="Men's blue cotton dot printed shirt Finish cotton shirt"
            image={img3}
          />
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ image, CardDescription }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="w-full">
        <div className="mb-8 overflow-hidden rounded text-center">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-base text-body-color dark:text-dark-6">
            {CardDescription}
          </p>
          <Link to={"/show-now-main"}>
            <button className="relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Shop Now
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSecond;
