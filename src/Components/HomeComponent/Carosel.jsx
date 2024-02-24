// SliderBanner.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import car1 from "../../Assets/careosel.png";
import car2 from "../../Assets/new collection (1).jpg";
import car3 from "../../Assets/new banner.jpg";
import { Link } from "react-router-dom";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    {/* <FaChevronRight size={32} /> */}
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    {/* <FaChevronLeft size={32} /> */}
  </button>
);

const SlideWithButton = ({ src, alt, buttonText }) => (
  <div className="relative">
    <img src={src} alt={alt} className="w-full h-68 object-cover" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10">
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
        {buttonText}
      </button> */}
    </div>
  </div>
);

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-8 relative mt-[10rem] lg:mt-8 xl:mt-[7rem]">
      <Link to={"/show-now-main"}>
        <Slider {...settings}>
          <SlideWithButton
            src={car1}
            alt="Slide 1"
            buttonText="Learn More"
            className="saturate-0"
          />
          <SlideWithButton src={car2} alt="Slide 2" buttonText="Learn More" />
          <SlideWithButton src={car3} alt="Slide 3" buttonText="Learn More" />
        </Slider>
      </Link>
    </div>
  );
};

export default SliderBanner;
