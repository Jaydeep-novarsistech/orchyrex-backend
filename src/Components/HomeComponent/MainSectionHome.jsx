import React from "react";
import Navbar from "./Navbar";

import Carosel from "./Carosel";
import ProductSection from "./ProductSection";
import OfferImages from "./OfferImages";
import ProductListAll from "./ProductListAll";
import Services from "./Services";
import CTASection from "./CTASection";
import Footer from "./Footer";
import Header from "./Navbar";

const MainSectionHome = ({ alphaUser, setAlphaUser }) => {
  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <Carosel />
      <div className=" p-4 md:px-[150px] ">
        <ProductSection />
        <OfferImages />
        <ProductListAll />
        <Services />
        <CTASection />
      </div>
      <Footer />
    </>
  );
};

export default MainSectionHome;
