import React, { useState, useEffect } from "react";
import Navbar from "../HomeComponent/Navbar";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";

const Delivery = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  const [faqs, setFaqs] = useState([
    {
      question: "How much is the delivery charge?",
      answer:
        "All orders valued at over Rs. 1499 will be shipped free of cost. For orders worth Rs. 1499 or below, a nominal fee of Rs. 99 will be applied.",
    },
    {
      question: "Do I get a refund for delivery charges?",
      answer: (
        <div>
          <p>
            1. If the complete order is canceled, lost, or undelivered to your preferred location, we will refund the entire amount, including the shipping cost, if paid online.


          </p>
          <p>
            2. If you return the order partially, the shipping charges will not be refunded.
          </p>
        </div>
      ),
    },
    {
      question: "Is International delivery available?",
      answer:
        "Yes, currently international shipping is available on our orchyrex.com website.",
    },
    {
      question: "Are there weight restrictions on delivery?",
      answer: "No, currently there are no weight restrictions on delivery.",
    },
    {
      question: "Do I need to be at home to receive my order?",
      answer:
        "The driver can deliver your order when you are not at home. In that case, it will be picked up by a family member.",
    },
    {
      question: "What happens if my order gets lost in the post?",
      answer:
        "If you believe your parcel has been lost in the post, please contact our Customer Services team as soon as possible using the provided contact details. We will then investigate what has happened to your parcel.",
    },
    {
      question: "Why is my order incomplete?",
      answer: (
        <div>
          <p>
            1. This could be because an item you’ve ordered has sold out before
            it could be sent to you. If any of the items in your order have sold
            out, we will inform you of this by email. Your order may also arrive
            in multiple parcels.
          </p>
          <p>
            2. If something is missing and you haven’t heard from us, please let
            us know so we can look into this further Click here to view our
            contact details.
          </p>
        </div>
      ),
    },

    {
      question: "When can I expect to receive my delivery?",
      answer:
        "You should receive your delivery within seven working days of placing your order. Where the supply of your product(s) is delayed or prevented for reasons beyond our control, we will make every effort to keep you informed but shall be under no liability to you for such delay or failure.",
    },
    {
      question:
        "I have tried to track my order, but there is no information on the delivery courier’s site. What should I do?",
      answer:
        "The tracking information for your order will start to appear in the My Accounts section the day after we send it to you.",
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs.forEach((faq, i) => {
      if (i === index) {
        faq.open = !faq.open; // Toggle the open state for the clicked question
      } else {
        faq.open = false; // Close other open answers
      }
    });
    setFaqs(updatedFaqs);
  };

  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="max-w-[1240px] mt-[8rem] lg:mx-auto mx-8  my-10">
          <h1 className="font-bold my-4 text-3xl text-center">Delivery FAQ</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between border-t-2 items-center cursor-pointer  p-4 rounded-md"
              >
                <div className="font-semibold">{faq.question}</div>
                <div>{faq.open ? "-" : "+"}</div>
              </div>
              {faq.open && (
                <div className="mt-2  p-4 rounded-md border">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default Delivery;
