// import React, { useEffect, useState } from 'react';
// import Navbar from '../HomeComponent/Navbar';
// import Services from '../HomeComponent/Services';
// import Footer from '../HomeComponent/Footer';

// const ReturnAndRefaundPolicy = ({ alphaUser, setAlphaUser }) => {
//    useEffect(() => {
//         document.documentElement.scrollTo(0, 0)
//       }, [])
//     const [faqs, setFaqs] = useState([
//         {
//             question: 'How much is my delivery charge?',
//             answer: 'All orders with value more than Rs. 1499, will be shipped free of cost. For any orders worth Rs. 1499 or below, a nominal fee of Rs. 99 would be applied.',

//         },
//         {
//             question: 'Do I get the delivery charges refunded?',
//             answer: '1. If the complete order is cancelled, lost or un-delivered to your preferred location, we will refund the complete order amount including the shipping cost, if paid online.      ,2. If the complete order is cancelled, lost or un-delivered to your preferred location, we will refund the complete order amount including the shipping cost, if paid online.',

//         },

//         {
//             question: 'Is International delivery available?',
//             answer: 'No, currently international shipping is not available on M&S India website.',

//         },
//         {
//             question: 'Is International delivery available?',
//             answer: 'No, currently international shipping is not available on M&S India website.',

//         },
//         {
//             question: 'Are there weight restrictions on deliveries that will affect the delivery charge?',
//             answer: 'No, currently there are no such weight restrictions on deliveries. ',

//         },
//         {
//             question: 'Do I need to be at home to receive my order?',
//             answer: 'The delivery drivers can deliver your order when you are not at home. In that case, it will be picked up by a family member',

//         },
//         {
//             question: 'What happens if my order gets lost in the post?',
//             answer: 'If you believe your parcel has been lost in the post, please contact our Customer Services team as soon as possible using these contact details. We will then investigate what has happened to your parcel.',

//         },

//         {
//             question: 'I have tried to track my order but there is no information on the delivery courier’s site. What should I do?',
//             answer:'The tracking information for your order will start to appear in My Accounts section the day after we send it to you'
//         },
//     ]);

//     const toggleFAQ = (index) => {
//         const updatedFaqs = [...faqs];
//         updatedFaqs.forEach((faq, i) => {
//             if (i === index) {
//                 // Toggle the open state for the clicked question
//                 faq.open = !faq.open;
//             } else {
//                 // Close other open answers
//                 faq.open = false;
//             }
//         });
//         setFaqs(updatedFaqs);
//     };

//     return (
//       <>
//      <div className=' p-4 md:px-[150px] '>
//             <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
//       <div className="max-w-[1240px] lg:mx-auto mx-8  my-10 mt-[8rem]">
//             <h1 className='font-bold my-4 text-3xl text-center'>Return And Refaund Policy</h1>
//             {faqs.map((faq, index) => (
//                 <div key={index} className="mb-4">
//                     <div
//                         onClick={() => toggleFAQ(index)}
//                         className="flex justify-between border-t-2 items-center cursor-pointer  p-4 rounded-md"
//                     >
//                         <div className="font-semibold">{faq.question}</div>
//                         <div>{faq.open ? '-' : '+'}</div>
//                     </div>
//                     {faq.open && <div className="mt-2  p-4 rounded-md border">{faq.answer}</div>}
//                 </div>
//             ))}
//         </div>
//         <Services/>
//       </div>
//       <Footer/>
//       </>
//     );
// };

// export default ReturnAndRefaundPolicy;

import React, { useEffect } from "react";
import Navbar from "../HomeComponent/Navbar";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import { Link } from "react-router-dom";

const ReturnAndRefaundPolicy = ({ alphaUser, setAlphaUser }) => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="max-w-[1240px] lg:mx-auto mx-8 my-10 mt-[8rem]">
          <h2 className="text-3xl font-bold mb-4 text-center">Return Policy</h2>

          <p className="mb-4">
            We are committed to ensuring your satisfaction with our products. We
            offer a no-questions-asked return policy, allowing you to return
            merchandise within 35 days of delivery.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Eligibility:</h3>
            <p>
              To be eligible for a refund, the merchandise must be unused and have all price tags intact. Please note that some items, such as masks, items, and products with broken seals, are excluded from our return policy. Certain items may have specific terms and conditions, which will be product-specific.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Return Process:</h3>
            <p>
              You can initiate a return online from the comfort of your home or
              at the nearest offline store. For Cash on Delivery orders, the
              refund will be initiated once we receive the bank account details
              from the customer.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Refund Details:</h3>
            <p>
              Refunds will be processed according to the original mode of
              payment:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Card/Wallet/UPI/Netbanking: Directly credited to the original
                source of payment.
              </li>
              <li>
                Cash on Delivery: Refund will be initiated once we receive the
                bank account details from the customer.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Exclusions:</h3>
            <p>
              Please note that items under Last Chance to Buy, priced at 990 or
              below, are non-returnable.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>

          <p className="mb-2">
            <strong>By email:</strong> info@orchyrex.com
          </p>
          <p className="mb-2">
            <strong>By phone:</strong> +91 9111720303; we are open every day
            Mon-Sat 08:00 am to 08:00 pm, excluding gazetted holidays.
          </p>
          <p className="mb-4">
            <strong>By post:</strong> Mohalla Atarpura, Gajraula Amroha (U.P)
          </p>

          <h2 className="text-3xl font-bold mb-4">Refund Information</h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Return Options:</h3>
            <ol className="list-decimal list-inside">
              <li>
                <strong>In-Store Return:</strong> Feel free to visit the nearest
                Orchyrex store to return the product. To find your closest
                store, please{" "}
                <Link to="store-locator-link" className="text-blue-500">
                  click here
                </Link>
                .
              </li>
              <li>
                <strong>Online Return:</strong> Alternatively, you can initiate
                a return request online from the "My Account" section on our
                website. Our trusted courier partner will pick up the product
                from your location within 3 days. Once we receive the product
                and complete a quality check, the refund will be processed. The
                entire pickup to refund processing usually takes around 7-10
                days.
              </li>
            </ol>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Refund Confirmation:</h3>
            <p>
              Upon completion of the refund process, we will send a confirmation
              email to you. This email will provide details about the refund
              transaction for your records.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-4">Damaged Order</h2>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Contact Customer Services:
            </h3>
            <p>
              If you require assistance or guidance on the next steps to take,
              please reach out to our dedicated Customer Services team. To
              access our contact details and get in touch with us, click{" "}
              <Link to="contact-link" className="text-blue-500">
                here
              </Link>
              .
            </p>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ReturnAndRefaundPolicy;
