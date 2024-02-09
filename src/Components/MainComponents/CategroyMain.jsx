// TeamSection.js
import React from "react";
import catImg1 from "../../Assets/Untitled design (4).png";
import catImg2 from "../../Assets/Untitled design (5).png";
import catImg3 from "../../Assets/Untitled design (6).png";
import catImg4 from "../../Assets/Untitled design (7).png";
import catImg5 from "../../Assets/Untitled design (8).png";
import catImg6 from "../../Assets/Untitled design (9).png";
import { Link } from "react-router-dom";

const TeamMember = ({ name, image, route }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-6 px-2 sm:px-4 lg:px-4 mt-[2rem]">
      <div className="flex flex-col">
        {/* Avatar */}
        <span className="mx-auto">
          <Link to={route}>
            <img
              className="w-full lg:w-full duration-300 hover:-translate-y-5 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all hover:saturate-150 "
              src={image}
              alt={name}
            />
          </Link>
        </span>

        {/* Details */}
        <div className="text-center mt-6">
          {/* Name */}
          <h1 className="text-gray-900 font-bold mb-1 text-xl lg:text-base">
            {name}
          </h1>

          {/* Title */}
          {/* Include the title if needed */}
        </div>
      </div>
    </div>
  );
};

const CategoryMain = () => {
  return (
    <div className="flex items-center justify-center bg-white mt-28 ">
      <div className="flex flex-wrap justify-center">
        {/* Team Members */}
        <TeamMember
          name="Checks - Shirt"
          image={catImg1}
          route="/checks-shirt"
        />
        <TeamMember
          name="Formal - Shirt"
          image={catImg2}
          route="/formal-shirt"
        />
        <TeamMember
          name="Casual - Shirt"
          image={catImg3}
          route="/casual-shirt"
        />
        <TeamMember
          name="Printed - Shirt"
          image={catImg4}
          route="/printed-shirt"
        />
        <TeamMember
          name="Party-Wear-Shirt"
          image={catImg5}
          route="/party-wear-shirt"
        />
        <TeamMember name="Plain - Shirt" image={catImg6} route="/plain-shirt" />
        {/* Add more TeamMembers as needed */}
      </div>
    </div>
  );
};

export default CategoryMain;
