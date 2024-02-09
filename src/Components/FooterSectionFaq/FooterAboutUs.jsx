import React, { useEffect } from "react";
import Navbar from "../HomeComponent/Navbar";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";

const FooterAboutUs = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="max-w-[1240px] mt-[8rem] lg:mx-auto mx-8  my-10">
          <h2 className="text-4xl font-bold text-center mb-6">
            Welcome to Orchyrex
          </h2>

          <p className="text-gray-700 mb-6">
            Established in 2023 amidst the vibrant streets of Mohalla Atarpura
            in Gajraula Amroha, Uttar Pradesh, Orchyrex is more than just a
            clothing brand. We are a celebration of style, individuality, and
            the essence of the modern spirit.
          </p>
          <p className="text-gray-700 mb-6">
            Our Journey: Born from a passion for weaving together threads of
            innovation and fashion, Orchyrex has embarked on a journey to
            redefine the way you dress and express yourself.
          </p>
          <p className="text-gray-700 mb-6">
            Crafting Style and Substance: At Orchyrex, we meticulously craft
            each garment with precision and care. Our designs are a fusion of
            contemporary aesthetics and timeless elegance, catering to diverse
            tastes and preferences.
          </p>
          <p className="text-gray-700 mt-6">
            More than just a clothing brand, Orchyrex represents a lifestyle. We
            embrace diversity, inclusivity, and the richness of individual
            expression. Our commitment extends beyond the garments we create; we
            aspire to foster a community where everyone feels seen, heard, and
            celebrated.
          </p>
          <p className="text-gray-700 mt-6">
            <strong>Our Promise:</strong> We pledge unwavering dedication to
            quality, innovation, and customer satisfaction. Every stitch,
            fabric, and design detail is infused with our commitment to
            delivering products that exceed your expectations.
          </p>
          <p className="text-gray-700 mt-6">
            Join Our Journey: Whether you're discovering us for the first time
            or have been part of our story since the beginning, we invite you to
            explore our collections, embrace your uniqueness, and embark on this
            stylish journey with Orchyrex.
          </p>
          <p className="text-gray-700 mt-6">
            Thank you for choosing Orchyrex. Let's redefine fashion, together.
          </p>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default FooterAboutUs;
