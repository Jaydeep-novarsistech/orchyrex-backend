import React, { useEffect, useState } from 'react';
import Navbar from '../HomeComponent/Navbar';
import Services from '../HomeComponent/Services';
import Footer from '../HomeComponent/Footer';

const SizeGuid = ({ alphaUser, setAlphaUser }) => {
   useEffect(() => {
        document.documentElement.scrollTo(0, 0)
      }, [])
    const [faqs, setFaqs] = useState([
       
        {
            question: ' Where can I find the size guides for your products?',
            answer:'Unlock the secrets of perfect fit! Find size guides discreetly placed on each product page, or delve  into the hidden sanctuary here. Your journey to  sartorial bliss begins – because finding your size isnt just a quest, its an odyssey! you can also find the size guide here.'
        },
    ]);

    const toggleFAQ = (index) => {
        const updatedFaqs = [...faqs];
        updatedFaqs.forEach((faq, i) => {
            if (i === index) {
                // Toggle the open state for the clicked question
                faq.open = !faq.open;
            } else {
                // Close other open answers
                faq.open = false;
            }
        });
        setFaqs(updatedFaqs);
    };

    return (
      <>
     <div className=' p-4 md:px-[150px] '>
            <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
      <div className="max-w-[1240px] lg:mx-auto mx-8 mt-[8rem]  my-10">
            <h1 className='font-bold my-4 text-3xl text-center'>Size Guide</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between border-t-2 items-center cursor-pointer  p-4 rounded-md"
                    >
                        <div className="font-semibold">{faq.question}</div>
                        <div>{faq.open ? '-' : '+'}</div>
                    </div>
                    {faq.open && <div className="mt-2  p-4 rounded-md border">{faq.answer}</div>}
                </div>
            ))}
        </div>
        <Services/>
      </div>
      <Footer/>
      </>
    );
};

export default SizeGuid;
