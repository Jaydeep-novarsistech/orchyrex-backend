import React from "react";
import logo from "../../Assets/white redesign.png";
import instalogo from "../../Assets/footersocialicon/Untitled design (53).png";
import facebooklogo from "../../Assets/footersocialicon/Untitled design (54).png";
import tiwtterlogo from "../../Assets/footersocialicon/Untitled design (52).png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black rounded-t-3xl">
        {/* <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 "> */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:py-16 py-6 ">
          <div className="lg:flex lg:items-start lg:gap-8 ">
            <div className="text-teal-600 dark:text-teal-300 text-center mb-8 lg:mb-0">
              <img
                src={logo}
                alt=""
                className="sm:h-[80px] md:h-[60px] w-[18rem] mx-auto"
              />
              <div className=" flex-col items-center mt-[9rem] lg:flex hidden">
                <Link
                  to="https://www.facebook.com/people/Orchyrex/61551691127174/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <img src={facebooklogo} alt="" className="h-9 w-9" />
                </Link>
              </div>
              <div className=" flex-col items-center mt-4 lg:flex hidden">
                <Link
                  to="https://www.instagram.com/orchyrex/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <img src={instalogo} alt="" className="h-9 w-9" />
                </Link>
              </div>
              <div className=" flex-col items-center mt-4 lg:flex hidden">
                <Link
                  to="https://twitter.com/Orchyrexoficial"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <img src={tiwtterlogo} alt="" className="h-9 w-9 " />
                </Link>
              </div>
              <div className="flex flex-row items-center justify-center mt-[2rem] lg:hidden space-x-4">
                <Link
                  to="https://www.facebook.com/people/Orchyrex/61551691127174/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <img src={facebooklogo} alt="" className="h-11 w-11" />
                </Link>
                <Link
                  to="https://www.instagram.com/orchyrex/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <img src={instalogo} alt="" className="h-11 w-11" />
                </Link>
                <Link
                  to="https://twitter.com/Orchyrexoficial"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75 text-gray-200"
                >
                  <span className="sr-only">Twitter</span>
                  <img src={tiwtterlogo} alt="" className="h-11 w-11" />
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16 ">
              <div className="col-span-2">
                <div className="">
                  <h2 className="text-2xl font-bold uppercase text-white">
                    WELCOME TO THE ORCHYREX
                  </h2>

                  <p className="mt-4 text-gray-200 md:text-left text-center">
                    For prompt assistance, reach out to us at{" "}
                    <Link to="" className="hover:border-b">
                      help@orchyrex.com
                    </Link>
                    , and we'll respond at our earliest convenience.
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex ">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>

                  <div className="flex flex-col lg:flex-row items-center gap-4 w-full border p-2 focus-within:ring border-gray-200">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="help@orchyrex.com"
                      className="w-full border-none focus:border-transparent focus:ring-transparent bg-black text-white sm:text-sm mb-2 lg:mb-0"
                    />
                    <button className="w-full lg:w-[15rem] relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                      <span className="relative w-full lg:w-[15rem] py-2.5 transition-all ease-in duration-75 bg-yellow-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Send Me
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-span-2 sm:col-span-1 ">
                <p className=" text-white  font-bold">Here to help</p>

                <ul className="mt-6 space-y-4 text-sm ">
                  <li>
                    <Link
                      to={"/Delivery"}
                      className="transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Delivery
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Track my order
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/Return-and-refund"}
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Returns & refunds
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/contact-us"}
                      href="#"
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Help & contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium  text-white">Shopping with us</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to={"/signup-form"}
                      href="#"
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Create an account
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/Offer-and-payment"}
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Payment & offers
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/Size-guide"}
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      size guides
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium  text-white">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to={"/contact-us"}
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/faq-section"}
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/about-us"}
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium  text-white">About Us</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="mailto:help@orchyrex.com"
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      help@orchyrex.com
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      to="#"
                      className=" transition hover:opacity-75 text-gray-200 hover:border-b"
                    >
                      Corprate Site
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t bo pt-8 border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs  text-gray-400">
                &copy; 2024. Orchyrex. All rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <Link
                    to={"/terms-condition"}
                    className=" transition hover:opacity-75 text-gray-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/privacy-policy"}
                    className=" transition hover:opacity-75 text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
