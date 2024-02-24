// import React from "react";
// import img1 from "../../Assets/orchy  (1).png";
// import img2 from "../../Assets/orchy  (2).png";
// import img3 from "../../Assets/orchy10 .png";
// import { Link } from "react-router-dom";
// function Products() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold  text-center text-dark dark:text-white ">
//         STYLE INSPIRATION
//       </h1>
//       <div className="container mx-auto p-4 lg:h-screen flex items-center justify-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* Product Entry 1 */}
//           <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
//             <img
//               src={img1}
//               alt="Nature Image by Meriç Dağlı"
//               className="w-full h-auto object-cover rounded-lg "
//             />
//             <div className="absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
//               <h1 className="text-2xl font-semibold up">Casual-Shirt</h1>
//               <Link to={"/show-now-main"}>
//                 <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Shop Now
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Product Entry 2 */}
//           <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
//             <img
//               src={img2}
//               alt="Nature Image by Meriç Dağlı"
//               className="w-full h-auto object-cover rounded-lg mb-4"
//             />
//             <div className="absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
//               <h1 className="text-2xl font-semibold">Printed-Shirt</h1>
//               <Link to={"/show-now-main"}>
//                 <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Shop Now
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Product Entry 3 */}
//           <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
//             <img
//               src={img3}
//               alt="Nature Image by Meriç Dağlı"
//               className="w-full h-auto object-cover rounded-lg mb-4"
//             />
//             <div className="absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
//               <h1 className="text-2xl font-semibold">Formal-Shirt</h1>
//               <Link to={"/show-now-main"}>
//                 <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Shop Now
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Products;




import React from "react";
import img1 from "../../Assets/orchy  (1).png";
import img2 from "../../Assets/orchy  (2).png";
import img3 from "../../Assets/orchy10 .png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="container mx-auto p-4 lg:h-screen">
        <h1 className="text-3xl font-bold text-center text-dark dark:text-white mb-10">
          STYLE INSPIRATION
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Product Entry 1 */}
          <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <img
              src={img1}
              alt="Nature Image by Meriç Dağlı"
              className="w-full h-auto object-cover rounded-lg "
            />
            <div className="absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold up">Casual-Shirt</h1>
              <Link to={"/casual-shirt"}>
                <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Shop Now
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Product Entry 2 */}
          <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <img
              src={img2}
              alt="Nature Image by Meriç Dağlı"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <div className="absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">Printed-Shirt</h1>
              <Link to={"/printed-shirt"}>
                <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Shop Now
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Product Entry 3 */}
          <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <img
              src={img3}
              alt="Nature Image by Meriç Dağlı"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <div className="absolute bottom-0 left-0 right-0 h-30 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">Formal-Shirt</h1>
              <Link to={"/formal-shirt"}>
                <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Shop Now
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
