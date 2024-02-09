import React, { useState, useEffect } from "react";
import Navbar from "../HomeComponent/Navbar";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";

const FooterOfferAndPayment = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  const [faqs, setFaqs] = useState([
    {
      question: "What payment methods do you accept?",
      answer:
        "We welcome payments through a variety of channels, including credit/debit cards, net banking, and various digital wallets.",
    },

    {
      question: "Can I pay using a gift card?",
      answer:
        "At present, gift cards are not accepted as a payment method on our website. However, we are actively exploring options to incorporate this feature in the future.",
    },
    {
      question: "When will you take payment for my order?",
      answer:
        "When opting for online payment, your payment will be authorized upon order submission. For Cash on Delivery (COD) orders, you can conveniently settle the payment in cash directly to the delivery person",
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
        <div className="max-w-[1240px] lg:mx-auto mx-8 mt-[8rem]  my-10">
          <h1 className="font-bold my-4 text-3xl text-center">
            Offer And Payment
          </h1>
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

export default FooterOfferAndPayment;
