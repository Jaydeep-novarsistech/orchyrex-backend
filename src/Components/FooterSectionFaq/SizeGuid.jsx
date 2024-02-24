import React, { useEffect, useState } from 'react';
import Navbar from '../HomeComponent/Navbar';
import Services from '../HomeComponent/Services';
import Footer from '../HomeComponent/Footer';
import bigchart from '../../Assets/bigchart.jpg';
import smallchart from '../../Assets/smallchart.jpeg';
const SizeGuid = ({ alphaUser, setAlphaUser }) => {
   useEffect(() => {
        document.documentElement.scrollTo(0, 0)
      }, [])
    const [faqs, setFaqs] = useState([
       
        {
            question: ' Where can I find the size guides for your products?',
            answer:'Unlock the secrets of a perfect fit! Find size guides discreetly placed on each product page, or delve into the hidden sanctuary here. Your journey to sartorial bliss begins – because finding your size is not just a quest, it not an odyssey! you can also find the size guide here.'
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
             <div className="max-h-full overflow-y-auto">
             <img src={bigchart} alt="Modal Image" className="mx-auto lg:flex hidden w-6/3 h-auto mb-4 rounded" />
              <img src={smallchart} alt="Modal Image" className="w-full lg:hidden h-auto mb-4 rounded" />

              <h1 className="text-center font-bold text-2xl mb-4">MEASURING ADVICE</h1>
              <p className="text-center mb-6">
                Take your actual body measurements as they are more accurate than measuring over your clothes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Measurement items */}
                <div className="border p-4 rounded-md hover:bg-[#C9AB52] hover:text-white">
                  <span className="font-semibold text-lg mb-2 block">1. Collar</span>
                  <p>Measure around the base of the neck where the collar sits.</p>
                </div>

                <div className="border p-4 rounded-md hover:bg-[#C9AB52] hover:text-white">
                  <span className="font-semibold text-lg mb-2 block ">2. Collar</span>
                  <p>Measure around the base of the neck where the collar sits.</p>
                </div>

                <div className="border p-4 rounded-md hover:bg-[#C9AB52] hover:text-white">
                  <span className="font-semibold text-lg mb-2 block ">3. Collar</span>
                  <p>Measure around the base of the neck where the collar sits.</p>
                </div>

                <div className="border p-4 rounded-md hover:bg-[#C9AB52] hover:text-white">
                  <span className="font-semibold text-lg mb-2 block ">1. Collar</span>
                  <p>Measure around the base of the neck where the collar sits.</p>
                </div>

                <div className="border p-4 rounded-md hover:bg-[#C9AB52] hover:text-white">
                  <span className="font-semibold text-lg mb-2 block ">2. Collar</span>
                  <p>Measure around the base of the neck where the collar sits.</p>
                </div>

                <div className="border p-4 rounded-md hover:bg-[#C9AB52] hover:text-white">
                  <span className="font-semibold text-lg mb-2 block ">3. Collar</span>
                  <p>Measure around the base of the neck where the collar sits.</p>
                </div>
                {/* Add more styled measurement items as needed */}
              </div>
            </div>
        </div>
        <Services/>
      </div>
      <Footer/>
      </>
    );
};

export default SizeGuid;
