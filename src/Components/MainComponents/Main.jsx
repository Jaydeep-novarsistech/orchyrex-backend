import React from "react";
import Navbar from "../HomeComponent/Navbar";
import CategroyMain from "./CategroyMain";
import LooksMain from "./LooksMain";
import SingleProductSection from "./SingleProductSection";
import Products from "./Products";
import StyleInspiration from "./StyleInspiration";
import Footer from "../HomeComponent/Footer";
import Services from "../HomeComponent/Services";
import ProductSecond from "./ProductSecond";
import Section from "./Section";
import WinterFav from "./WinterFav";
import Header from "../HomeComponent/Navbar";

const Main = ({ alphaUser, setAlphaUser }) => {
  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <CategroyMain />
        <LooksMain />
        <StyleInspiration />
        {/* <SingleProductSection/> */}

        <WinterFav />
        <Section />
        <ProductSecond />

        <Products />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default Main;
