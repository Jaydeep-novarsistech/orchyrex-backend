// import React from "react";
// import { Link } from "react-router-dom";
// import img1 from '../../Assets/mainhomeproducts/formal shirt main .jpg'
// import img2 from '../../Assets/mainhomeproducts/tshirt main .jpg'
// import img3 from '../../Assets/mainhomeproducts/casual shirt main .jpg'
// import img4 from '../../Assets/mainhomeproducts/plain tshirt main .png'

// const imageInfo = [
//   {
//     large: img1,
//     small: img1,
//     text: "Indulge in comfort and sophistication with our Super Soft Premium 100% Cotton Linen Formal Shirt in crisp white. Elevate your style effortlessly.",
//     title: "Formal Shirts",
//     slug: "/formal-shirt-product",
//   },
//   {
//     large: img2,
//     small: img2,
//     text: "Experience luxury in our white 100% Cotton Linen Formal Shirt. Unmatched comfort and timeless style in a single shirt.",
//     title: "Printed Shirts",
//     slug: "/printed-shirt-product",
//   },
//   {
//     large: img3,
//     small: img3,
//     text: "Elevate your wardrobe with our light green shirt. Crafted from PC Cotton with a Laffer finish, it's a printed statement of style.",
//     title: "Casual Shirts",
//     slug: "/casual-shirt-product",
//   },
//   {
//     large: img4,
//     small: img4,
//     text: "Discover the perfect blend in our cotton/polyester tees. Choose 90% cotton/10% polyester for a unique mix of comfort and style.",
//     title: "T-Shirt",
//     slug: "/Tshirts-product",
//   }
// ];

// const ProductListAll = () => {
//   return (
//     <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
//       <div className="container mx-auto">
//         <div className="flex flex-wrap justify-center lg:justify-start -mx-4">
//           <div className="2xl:container 2xl:mx-auto">
//             <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-10 md:gap-12 gap-4 mt-10">
//               {imageInfo.map((info, index) => (
//                 <div className="relative group" key={index}>
//                   <img
//                     src={info.large}
//                     alt={`Image ${index + 1}`}
//                     className="lg:block hidden w-full h-80 object-cover"
//                   />
//                   <img
//                     src={info.small}
//                     alt={`Image ${index + 1}`}
//                     className="lg:hidden block w-full h-60 object-cover"
//                   />
//                   <div className="opacity-0 bg-gradient-to-t from-yellow-500 via-yellow-500 to-opacity-30 group-hover:opacity-60 absolute top-0 left-0 h-80 w-full transition-opacity duration-300 ease-in-out" />
//                   <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
//                     <div className="flex items-center justify-center">
//                       <p className="text-white text-center">{info.text}</p>
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <h1 className="text-xl font-semibold text-center">{info.title}</h1>
//                     <Link to={info.slug}>
//                       <button className="mt-4 w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                       <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                         Shop Now
//                       </span>
//                     </button></Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// {/* <BlogCard CardTitle="Formal Shirt"  slug="/formal-shirt-product" />
// <BlogCard CardTitle="Casual Shirt"  slug="/show-now-main"/>
// <BlogCard CardTitle="T-shirt"  slug="/formal-shirt-product"/>
// <BlogCard CardTitle="Plain T-shirt" slug="/formal-shirt-product" /> */}

// // const BlogCard = ({ CardTitle,slug }) => {
// //   return (
// //     <div className="w-full px-4 lg:w-1/4 mb-8 lg:mb-0">
// //       <div className="mb-10 w-full">
// //         <div className="mb-8 overflow-hidden rounded"></div>
// //         <div className="text-center">
// //           <h3>
// //             <Link
// //               to="/#"
// //               className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
// //             >
// //               {CardTitle}
// //             </Link>
// //           </h3>
// //           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
// //             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// //               <Link to={slug}>Shop Now</Link>
// //             </span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default ProductListAll;

import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Assets/mainhomeproducts/formal shirt main .jpg";
import img2 from "../../Assets/mainhomeproducts/party wear.png";
import img3 from "../../Assets/mainhomeproducts/casual shirt main .jpg";
import img4 from "../../Assets/mainhomeproducts/plain tshirt main .png";

const imageInfo = [
  {
    large: img1,
    small: img1,
    text: "Indulge in comfort and sophistication with our Super Soft Premium 100% Cotton Linen Formal Shirt in crisp white. Elevate your style effortlessly.",
    title: "Formal Shirts",
    slug: "/formal-shirt",
  },
  {
    large: img2,
    small: img2,
    text: "Experience luxury in our white 100% Cotton Linen Formal Shirt. Unmatched comfort and timeless style in a single shirt.",
    title: "Party Wear Shirt",
    slug: "/party-wear-shirt",
  },
  {
    large: img3,
    small: img3,
    text: "Elevate your wardrobe with our light green shirt. Crafted from PC Cotton with a Laffer finish, it's a printed statement of style.",
    title: "Casual Shirts",
    slug: "/casual-shirt",
  },
  {
    large: img4,
    small: img4,
    text: "Discover the perfect blend in our cotton/polyester tees. Choose 90% cotton/10% polyester for a unique mix of comfort and style.",
    title: "T-Shirt",
    slug: "/tshirt",
  },
];

const ProductListAll = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[15px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center lg:justify-start -mx-4">
          <div className="2xl:container 2xl:mx-auto">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-10 md:gap-12 gap-4 mt-10">
              {imageInfo.map((info, index) => (
                <div className="relative group" key={index}>
                  <img
                    src={info.large}
                    alt={`Image ${index + 1}`}
                    className="lg:block hidden w-full h-80 object-cover"
                  />
                  <img
                    src={info.small}
                    alt={`Image ${index + 1}`}
                    className="lg:hidden block w-full h-60 object-cover"
                  />
                  <div className="opacity-0 bg-gradient-to-t from-yellow-500 via-yellow-500 to-opacity-30 group-hover:opacity-60 absolute top-0 left-0 h-80 w-full transition-opacity duration-300 ease-in-out" />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="flex items-center justify-center">
                      <p className="text-black font-semibold text-center">{info.text}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className="text-xl font-semibold text-center">
                      {info.title}
                    </h1>
                    <Link to={info.slug}>
                      <button className="mt-4 w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-yellow-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Shop Now
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListAll;
