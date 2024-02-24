import React from "react";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import Navbar from "../HomeComponent/Navbar";
import { Link } from "react-router-dom";

const ContactInformation = ({ alphaUser, setAlphaUser }) => {
  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="container mx-auto my-8 p-8 rounded-md shadow-md max-w-2xl mt-[8rem]">
          <h2 className="text-3xl font-bold mb-6">Contact Orchyrex</h2>

          <div className="mb-6">
            <p className="font-bold">By Email:</p>
            <p>
              <Link
                to="mailto:info@orchyrex.com"
                className="text-blue-500 hover:underline"
              >
                info@orchyrex.com
              </Link>
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold">By Phone:</p>
            <p>
              +91 9111720303 (Mon-Sat 08:00 am to 08:00 pm, excluding gazetted
              holidays)
            </p>
            <p>
              +91 7536051360 (Mon-Sat 08:00 am to 08:00 pm, excluding gazetted
              holidays)
            </p>
          </div>

          <div className="mb-6">
            <p className="font-bold">By Post:</p>
            <p>Mohalla Atarpura, Gajraula Amroha (U.P), Pin Code - 244235</p>
          </div>

          <div className="mb-6">
            <p className="font-bold">Grievance Officer:</p>
            <p>Mrs. Kanupriya Sharma</p>
            <p>Phone: +91 9111720303</p>
            <p>
              Postal Address: Scheme No. 92, BN House, 1st floor EC-52, Vijay
              Nagar, Indore, Madhya Pradesh 452010.
            </p>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ContactInformation;
