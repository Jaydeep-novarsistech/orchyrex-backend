import React from "react";
import hero1 from "../../Assets/homepro1.jpg";
import hero2 from "../../Assets/homepro1 (2).jpg";
import { Link } from "react-router-dom";
const ProductSection = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const buttonContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "8px",
    cursor: "pointer",
  };

  const tooltipStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    color: "black",
    padding: "8px",
    display: "none",
  };

  const linkStyle = {
    display: "block",
    margin: "8px 0",
    textDecoration: "none",
    color: "black",
  };

  const showTooltip = (id) => {
    document.getElementById(id).style.display = "block";
  };

  const hideTooltip = (id) => {
    document.getElementById(id).style.display = "none";
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-20 md:mt-10">
      {/* First box */}
      <div
        style={containerStyle}
        className="w-full md:w-1/2 h-48 md:h-auto bg-black text-white relative mt-10 md:mt-0"
      >
        {/* Background image */}
        <Link to={"/formal-shirt"}>
          <img src={hero1} alt="" style={imageStyle} />
        </Link>
      </div>

      {/* Second box */}
      <div
        style={containerStyle}
        className="w-full md:w-1/2 h-48 md:h-auto bg-black text-white relative mt-[3rem] md:mt-0"
      >
        {/* Background image */}{" "}
        <Link to={"/casual-shirt"}>
          <img src={hero2} style={imageStyle} />
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
