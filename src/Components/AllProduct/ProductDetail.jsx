import React from "react";
import ShopNowMain from "./ShopNowMain";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import Navbar from "../HomeComponent/Navbar";

const ProductDetail = ({ alphaUser, setAlphaUser }) => {
  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <ShopNowMain />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
