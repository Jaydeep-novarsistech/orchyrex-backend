// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Services from "../HomeComponent/Services";
// import Footer from "../HomeComponent/Footer";
// import Navbar from "../HomeComponent/Navbar";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const ProductCardBag = ({ alphaUser, setAlphaUser }) => {
//   React.useEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, []);

//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const accessToken = localStorage.getItem("token");

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:9000/api/user/cart",
//         axiosConfig
//       );
//       setCartData(response.data[0]); // Assuming the cart data is the first item in the array
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [accessToken]);

//   const handleQuantityChange = async (productId, newQuantity) => {
//     try {
//       await axios.patch(
//         "http://localhost:9000/api/user/update-quantity",
//         {
//           productId: productId,
//           quantity: newQuantity,
//         },
//         axiosConfig
//       );
//     } catch (error) {
//       // Handle error
//       console.error("Error updating quantity:", error);
//     }
//   };

//   const handleRemoveProduct = (productId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeProduct(productId);
//       }
//     });
//   };

//   const removeProduct = async (productId) => {
//     try {
//       await axios.delete("http://localhost:9000/api/user/remove", {
//         data: {
//           productId: productId,
//         },
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });

//       // Fetch updated cart data or update the UI as needed
//       fetchData();

//       Swal.fire("Removed!", "Your product has been removed.", "success");
//     } catch (error) {
//       console.error("Error removing product:", error);
//       Swal.fire("Error!", "Failed to remove the product.", "error");
//     }
//   };

//   const incrementQuantity = (productId) => {
//     const updatedCartData = { ...cartData };
//     const updatedProducts = updatedCartData.products.map((product) => {
//       if (product.product._id === productId) {
//         return { ...product, count: product.count + 1 };
//       }
//       return product;
//     });
//     updatedCartData.products = updatedProducts;
//     setCartData(updatedCartData);

//     const newQuantity = updatedProducts.find(
//       (p) => p.product._id === productId
//     ).count;
//     handleQuantityChange(productId, newQuantity);
//   };

//   const decrementQuantity = (productId) => {
//     const updatedCartData = { ...cartData };
//     const updatedProducts = updatedCartData.products.map((product) => {
//       if (product.product._id === productId && product.count > 1) {
//         return { ...product, count: product.count - 1 };
//       }
//       return product;
//     });
//     updatedCartData.products = updatedProducts;
//     setCartData(updatedCartData);

//     const newQuantity = updatedProducts.find(
//       (p) => p.product._id === productId
//     ).count;
//     handleQuantityChange(productId, newQuantity);
//   };

//   return (
//     <>
//       <div className="p-4 md:px-[150px]">
//         <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />

//         <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6 mt-[8rem]">
//           {loading ? (
//             <p>Loading...</p>
//           ) : cartData && cartData.products ? (
//             <div className="p-6 mb-8 border  dark:bg-gray-800 dark:border-gray-800">
//               <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
//                 <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Product name
//                   </h2>
//                 </div>
//                 <div className="hidden px-4 lg:block lg:w-2/12">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Price
//                   </h2>
//                 </div>
//                 <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Quantity
//                   </h2>
//                 </div>
//                 <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Subtotal
//                   </h2>
//                 </div>
//               </div>

//               {cartData.products.map((product, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center mb-6 md:flex md:mb-8"
//                 >
//                   {/* Product Image */}
//                   <div className="w-1/6">
//                     <img
//                       src={product.product.productImage[0].url}
//                       alt={product.product.productName}
//                       className="object-cover h-[11rem] w-25"
//                     />
//                   </div>
//                   {/* Product Details */}
//                   <div className="w-1/3 px-4">
//                     <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
//                       {product.product.productName}
//                     </h2>
//                     <p className="text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis h-[2.8rem] line-clamp-2">
//                       {product.product.productDescription}
//                     </p>
//                     <button
//                       onClick={() => handleRemoveProduct(product.product._id)}
//                       className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                   {/* Price */}
//                   <div className="hidden lg:block lg:w-2/12">
//                     <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
//                       {product.product.productDiscountedPrice}
//                     </p>
//                   </div>
//                   {/* Quantity */}
//                   <div className="w-auto md:w-1/6 lg:w-2/12 flex items-center space-x-2">
//                     <button
//                       onClick={() => decrementQuantity(product.product._id)}
//                       className="text-lg font-bold text-blue-500 dark:text-gray-400 px-2  rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
//                     >
//                       -
//                     </button>
//                     <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
//                       {product.count}
//                     </p>
//                     <button
//                       onClick={() => incrementQuantity(product.product._id)}
//                       className="text-lg font-bold text-blue-500 dark:text-gray-400 px-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
//                     >
//                       +
//                     </button>
//                   </div>
//                   {/* Subtotal */}
//                   <div className="w-auto text-right md:w-1/6 lg:w-2/12">
//                     <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
//                       {product.product.productDiscountedPrice * product.count}
//                     </p>
//                   </div>
//                 </div>
//               ))}

//               <div className="flex justify-between">
//                 <Link
//                   to="/main"
//                   href="#"
//                   className="flex items-center rounded-lg  font-semibold bg-indigo-600 text-white p-3 text-md mt-10 hover:text-black"
//                 >
//                   <svg
//                     className="fill-current mr-2 text-white w-4"
//                     viewBox="0 0 448 512"
//                   >
//                     <path d="M8 256l224-224 48 48-160 160h352v128H112l160 160-48 48z" />
//                   </svg>
//                   Continue Shopping
//                 </Link>
//                 <div className="flex-grow"></div>
//                 <Link
//                   to="/order-summary"
//                   href="#"
//                   className="flex rounded-lg items-center bg-green-600 p-3 font-semibold text-white text-md mt-10 hover:text-black"
//                 >
//                   Continue Checkout
//                   <svg
//                     className="fill-current ml-2 text-white w-4 "
//                     viewBox="0 0 448 512"
//                   >
//                     <path d="M440 256L216 32l-48 48 160 160H0v128h328l-160 160 48 48z" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           ) : (
//             <p className="text-center text-2xl font-bold">
//               No products in the cart.
//             </p>
//           )}

//           {/* Additional UI elements (e.g., Apply Coupon, Total, Checkout) can be added here */}

//           <Services />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductCardBag;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Navbar from "../HomeComponent/Navbar";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";

const ProductCardBag = ({ alphaUser, setAlphaUser }) => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessToken = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  // Function to fetch cart data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/cart`,
        axiosConfig
      );
      setCartData(response.data[0]); // Assuming the cart data is the first item in the array
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, [accessToken]);

  // Function to handle quantity change
  const handleQuantityChange = async (productId, newQuantity) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/user/update-quantity`,
        {
          productId: productId,
          quantity: newQuantity,
        },
        axiosConfig
      );
      // Fetch updated data after quantity change
      fetchData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Function to remove product with confirmation dialog
  const handleRemoveProduct = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(productId);
      }
    });
  };

  // Function to remove product
  const removeProduct = async (productId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/remove`, {
        data: {
          productId: productId,
        },
        headers: axiosConfig.headers,
      });
      // Fetch updated data after product removal
      fetchData();
      Swal.fire("Removed!", "Your product has been removed.", "success");
    } catch (error) {
      console.error("Error removing product:", error);
      Swal.fire("Error!", "Failed to remove the product.", "error");
    }
  };

  // Function to increment quantity
  const incrementQuantity = (productId) => {
    const updatedCartData = { ...cartData };
    const updatedProducts = updatedCartData.products.map((product) => {
      if (product.product._id === productId) {
        return { ...product, count: product.count + 1 };
      }
      return product;
    });
    updatedCartData.products = updatedProducts;
    setCartData(updatedCartData);

    const newQuantity = updatedProducts.find(
      (p) => p.product._id === productId
    ).count;
    handleQuantityChange(productId, newQuantity);
  };

  // Function to decrement quantity
  const decrementQuantity = (productId) => {
    const updatedCartData = { ...cartData };
    const updatedProducts = updatedCartData.products.map((product) => {
      if (product.product._id === productId && product.count > 1) {
        return { ...product, count: product.count - 1 };
      }
      return product;
    });
    updatedCartData.products = updatedProducts;
    setCartData(updatedCartData);

    const newQuantity = updatedProducts.find(
      (p) => p.product._id === productId
    ).count;
    handleQuantityChange(productId, newQuantity);
  };

  // Function to calculate total quantity
  const calculateTotalQuantity = () => {
    if (cartData && cartData.products) {
      return cartData.products.reduce(
        (total, product) => total + product.count,
        0
      );
    }
    return 0;
  };

  return (
    <>
      <div className="p-4 md:px-[150px]">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6 mt-[8rem]">
          {loading ? (
            <p>Loading...</p>
          ) : cartData && cartData.products ? (
            <div className="p-6 mb-8 border dark:bg-gray-800 dark:border-gray-800">
              <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
                <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Product name
                  </h2>
                </div>
                <div className="w-auto px-4 text-center md:w-1/6 lg:w-2/12">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Quantity
                  </h2>
                </div>
                <div className="hidden lg:flex lg:w-2/12 justify-center items-center">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400 text-center">
                    Price
                  </h2>
                </div>
                <div className="w-auto px-4 text-center md:w-1/6 lg:w-2/12">
                  <h2 className="font-bold text-gray-500 dark:text-gray-400">
                    Subtotal
                  </h2>
                </div>
              </div>
              {cartData.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center mb-6 md:flex md:mb-8"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-1/6 md:w-1/6 ">
                    <img
                      src={product.product.productImage[0].url}
                      alt={product.product.productName}
                      className="object-cover h-[11rem] md:w-full rounded-xl "
                    />
                  </div>

                  {/* Product Details */}
                  <div className="w-3/3 px-4">
                    <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                      {product.product.productName}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis h-[2.8rem] line-clamp-2">
                      {product.product.productDescription}
                    </p>
                    <button
                      onClick={() => handleRemoveProduct(product.product._id)}
                      className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                  {/* Quantity */}
                  <div className="w-auto md:w-1/6 lg:w-2/12 flex justify-center items-center space-x-2">
                    <button
                      onClick={() => decrementQuantity(product.product._id)}
                      className="text-lg font-bold text-blue-500 dark:text-gray-400 px-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      -
                    </button>
                    <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                      {product.count}
                    </p>
                    <button
                      onClick={() => incrementQuantity(product.product._id)}
                      className="text-lg font-bold text-blue-500 dark:text-gray-400 px-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                  {/* Price */}
                  <div className="hidden lg:flex  md:w-1/6 lg:w-2/12 justify-center items-center">
                    <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                      {product.product.productDiscountedPrice}
                    </p>
                  </div>
                  {/* Subtotal */}
                  <div className="hidden lg:flex  md:w-1/6 lg:w-2/12 justify-center items-center">
                    <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
                      {product.product.productDiscountedPrice * product.count}
                    </p>
                  </div>
                </div>
              ))}

              {/* Display total quantity */}
              <div className="text-center mb-4">
                <p className="text-lg font-bold text-gray-500 dark:text-gray-400">
                  Total Quantity: {calculateTotalQuantity()}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <Link
                  to="/main"
                  className="flex items-center rounded-lg font-semibold bg-indigo-600 text-white p-3 text-md mb-2 md:mb-0 hover:text-black text-center"
                >
                  <svg
                    className="fill-current mr-2 text-white w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M8 256L224 224l48 48-160 160h352v128H112l160 160-48 48z" />
                  </svg>
                  Continue Shopping
                </Link>
                <div className="flex-grow md:mx-4"></div>
                <Link
                  to="/order-summary"
                  className="flex rounded-lg items-center bg-green-600 p-3 font-semibold text-white text-md hover:text-black text-center"
                >
                  Continue Checkout
                  <svg
                    className="fill-current ml-2 text-white w-4 "
                    viewBox="0 0 448 512"
                  >
                    <path d="M440 256L216 32l-48 48 160 160H0v128h328l-160 160 48 48z" />
                  </svg>
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-center text-2xl font-bold m-8">
              No products in the cart.
            </p>
          )}

          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCardBag;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Services from "../HomeComponent/Services";
// import Footer from "../HomeComponent/Footer";
// import Navbar from "../HomeComponent/Navbar";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const ProductCardBag = ({ alphaUser, setAlphaUser }) => {
//   React.useEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, []);

//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const accessToken = localStorage.getItem("token");

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/user/cart`,
//         axiosConfig
//       );
//       setCartData(response.data[0]); // Assuming the cart data is the first item in the array
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [accessToken]);

//   const handleQuantityChange = async (productId, newQuantity) => {
//     try {
//       await axios.patch(
//         `${process.env.REACT_APP_API_URL}/api/user/update-quantity`,
//         {
//           productId: productId,
//           quantity: newQuantity,
//         },
//         axiosConfig
//       );
//     } catch (error) {
//       // Handle error
//       console.error("Error updating quantity:", error);
//     }
//   };

//   const handleRemoveProduct = (productId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeProduct(productId);
//       }
//     });
//   };

//   const removeProduct = async (productId) => {
//     try {
//       await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/remove`, {
//         data: {
//           productId: productId,
//         },
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });

//       // Fetch updated cart data or update the UI as needed
//       fetchData();

//       Swal.fire("Removed!", "Your product has been removed.", "success");
//     } catch (error) {
//       console.error("Error removing product:", error);
//       Swal.fire("Error!", "Failed to remove the product.", "error");
//     }
//   };

//   const incrementQuantity = (productId) => {
//     const updatedCartData = { ...cartData };
//     const updatedProducts = updatedCartData.products.map((product) => {
//       if (product.product._id === productId) {
//         return { ...product, count: product.count + 1 };
//       }
//       return product;
//     });
//     updatedCartData.products = updatedProducts;
//     setCartData(updatedCartData);

//     const newQuantity = updatedProducts.find(
//       (p) => p.product._id === productId
//     ).count;
//     handleQuantityChange(productId, newQuantity);
//   };

//   const decrementQuantity = (productId) => {
//     const updatedCartData = { ...cartData };
//     const updatedProducts = updatedCartData.products.map((product) => {
//       if (product.product._id === productId && product.count > 1) {
//         return { ...product, count: product.count - 1 };
//       }
//       return product;
//     });
//     updatedCartData.products = updatedProducts;
//     setCartData(updatedCartData);

//     const newQuantity = updatedProducts.find(
//       (p) => p.product._id === productId
//     ).count;
//     handleQuantityChange(productId, newQuantity);
//   };

//   const calculateTotalQuantity = () => {
//     if (cartData && cartData.products) {
//       return cartData.products.reduce(
//         (total, product) => total + product.count,
//         0
//       );
//     }
//     return 0;
//   };

//   return (
//     <>
//       <div className="p-4 md:px-[150px]">
//         <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
//         <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6 mt-[8rem]">
//           {loading ? (
//             <p>Loading...</p>
//           ) : cartData && cartData.products ? (
//             <div className="p-6 mb-8 border  dark:bg-gray-800 dark:border-gray-800">
//               <div className="flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8">
//                 <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Product name
//                   </h2>
//                 </div>

//                 <div className="w-auto px-4 md:w-1/6 lg:w-2/12">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Quantity
//                   </h2>
//                 </div>
//                 <div className="hidden px-4 lg:block lg:w-2/12">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Price
//                   </h2>
//                 </div>
//                 <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
//                   <h2 className="font-bold text-gray-500 dark:text-gray-400">
//                     Subtotal
//                   </h2>
//                 </div>
//               </div>

//               {cartData.products.map((product, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center mb-6 md:flex md:mb-8"
//                 >
//                   {/* Product Image */}
//                   <div className="w-1/6">
//                     <img
//                       src={product.product.productImage[0].url}
//                       alt={product.product.productName}
//                       className="object-cover h-[11rem] w-25"
//                     />
//                   </div>
//                   {/* Product Details */}
//                   <div className="w-1/3 px-4">
//                     <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
//                       {product.product.productName}
//                     </h2>
//                     <p className="text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis h-[2.8rem] line-clamp-2">
//                       {product.product.productDescription}
//                     </p>
//                     <button
//                       onClick={() => handleRemoveProduct(product.product._id)}
//                       className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
//                     >
//                       Remove
//                     </button>
//                   </div>

//                   {/* Quantity */}
//                   <div className="w-auto md:w-1/6 lg:w-2/12 flex items-center space-x-2 ">
//                     <button
//                       onClick={() => decrementQuantity(product.product._id)}
//                       className="text-lg font-bold text-blue-500 dark:text-gray-400 px-2  rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
//                     >
//                       -
//                     </button>
//                     <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
//                       {product.count}
//                     </p>
//                     <button
//                       onClick={() => incrementQuantity(product.product._id)}
//                       className="text-lg font-bold text-blue-500 dark:text-gray-400 px-2 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white"
//                     >
//                       +
//                     </button>
//                   </div>
//                    {/* Price */}
//                    <div className="hidden lg:block lg:w-2/12">
//                     <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
//                       {product.product.productDiscountedPrice}
//                     </p>
//                   </div>
//                   {/* Subtotal */}
//                   <div className="w-auto text-right md:w-1/6 lg:w-2/12">
//                     <p className="text-lg font-bold text-blue-500 dark:text-gray-400">
//                       {product.product.productDiscountedPrice * product.count}
//                     </p>
//                   </div>
//                 </div>
//               ))}

//               {/* Display total quantity */}
//               <div className="text-center mb-4">
//                 <p className="text-lg font-bold text-gray-500 dark:text-gray-400">
//                   Total Quantity: {calculateTotalQuantity()}
//                 </p>
//               </div>

//               <div className="flex justify-between">
//                 <Link
//                   to="/main"
//                   href="#"
//                   className="flex items-center rounded-lg  font-semibold bg-indigo-600 text-white p-3 text-md mt-10 hover:text-black"
//                 >
//                   <svg
//                     className="fill-current mr-2 text-white w-4"
//                     viewBox="0 0 448 512"
//                   >
//                     <path d="M8 256L224 224l48 48-160 160h352v128H112l160 160-48 48z" />
//                   </svg>
//                   Continue Shopping
//                 </Link>
//                 <div className="flex-grow"></div>
//                 <Link
//                   to="/order-summary"
//                   href="#"
//                   className="flex rounded-lg items-center bg-green-600 p-3 font-semibold text-white text-md mt-10 hover:text-black"
//                 >
//                   Continue Checkout
//                   <svg
//                     className="fill-current ml-2 text-white w-4 "
//                     viewBox="0 0 448 512"
//                   >
//                     <path d="M440 256L216 32l-48 48 160 160H0v128h328l-160 160 48 48z" />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           ) : (
//             <p className="text-center text-2xl font-bold m-8">
//               No products in the cart.
//             </p>
//           )}

//           {/* Additional UI elements (e.g., Apply Coupon, Total, Checkout) can be added here */}

//           <Services />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ProductCardBag;
