
import React from 'react';
import bigchart from '../../Assets/bigchart.jpg';
import smallchart from '../../Assets/smallchart.jpeg';

const ImageModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed mt-[8rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-md max-h-full overflow-y-auto bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 sm:p-8 rounded shadow-md mx-auto max-w-full">
            <button
              className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full shadow-xl"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="max-h-full overflow-y-auto">
              <img src={bigchart} alt="Modal Image" className="w-full lg:block hidden h-auto mb-4 rounded" />
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
        </div>
      )}
    </>
  );
};

export default ImageModal;



// extra testing code




// import React from 'react';
// import bigchart from '../../Assets/bigchart.jpg'
// import smallchart from '../../Assets/smallchart.jpeg'
// const ImageModal = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed top-0 z-[999999] left-0 w-full h-full  overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-75">
//           <div className="bg-white p-8 rounded shadow-md">
//             <button className="absolute top-4 right-4 bg-red-600 text-black p-2 rounded-full shadow-xl" onClick={onClose}>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               </svg>
//             </button>
//             <img src={bigchart} alt="Modal Image" className="w-full lg:block hidden h-auto" />



//             <img src={smallchart} alt="Modal Image" className="w-full lg:hidden h-auto" />

//             <h1 className="text-center font-bold mb-4">MEASURING ADVICE</h1>
//             <p className="text-center">Take your actual body measurements as they are more accurate than measuring over your clothes.</p>
//             <div>
//               <div>
//                 <span>1. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>

//               <div>
//                 <span>1. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>

//               <div>
//                 <span>2. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>

//               <div>
//                 <span>3. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>

//               <div>
//                 <span>4. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>


//               <div>
//                 <span>5. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>


//               <div>
//                 <span>1. Collar</span>
//                 <p>Measure around the base of the neck where the collar sits.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageModal;

  // import React from 'react';
  // import bigchart from '../../Assets/bigchart.jpg';
  // import smallchart from '../../Assets/smallchart.jpeg';

  // const ImageModal = ({ isOpen, onClose }) => {
  //   return (
  //     <>
  //       {isOpen && (
  //         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-md h-auto overflow-y-auto bg-gray-800 bg-opacity-75">
  //           <div className="bg-white p-6 sm:p-8 rounded shadow-md mx-auto max-w-full">
  //             <button
  //               className="absolute top-4 right-4 bg-red-600 text-black p-2 rounded-full shadow-xl"
  //               onClick={onClose}
  //             >
  //               <svg
  //                 className="w-6 h-6"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 viewBox="0 0 24 24"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  //               </svg>
  //             </button>

  //             <div className="max-h-full overflow-y-auto">
  //               <img src={bigchart} alt="Modal Image" className="w-full lg:block hidden h-auto mb-4" />
  //               <img src={smallchart} alt="Modal Image" className="w-full lg:hidden h-auto mb-4" />

  //               <h1 className="text-center font-bold mb-4">MEASURING ADVICE</h1>
  //               <p className="text-center mb-4">
  //                 Take your actual body measurements as they are more accurate than measuring over your clothes.
  //               </p>

  //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  //                 {/* Measurement items */}
  //                 <div>
  //                   <span>1. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>2. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>3. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>1. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>2. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>3. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>
  //                 <div>
  //                   <span>1. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>2. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>

  //                 <div>
  //                   <span>3. Collar</span>
  //                   <p>Measure around the base of the neck where the collar sits.</p>
  //                 </div>
  //                 {/* Add more measurement items as needed */}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  // export default ImageModal;
