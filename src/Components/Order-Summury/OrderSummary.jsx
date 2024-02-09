// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Fragment } from "react";
// import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/solid";
// import { Popover, Transition } from "@headlessui/react";
// import orchyIcon from "../../Assets/redesign.png";
// import { useSelector } from "react-redux";
// import Footer from "../HomeComponent/Footer";
// import Services from "../HomeComponent/Services";
// import Navbar from "../HomeComponent/Navbar";

// export default function OrderSummary({ alphaUser, setAlphaUser }) {
//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("cod");

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   useEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, []);

//   const accessToken = localStorage.getItem("token");

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/user/cart`,
//           axiosConfig
//         );
//         setCartData(response.data[0]);
//         setLoading(false);

//         const totalItemsCount = response.data[0].products.reduce(
//           (acc, product) => acc + product.count,
//           0
//         );
//         const totalPriceValue = response.data[0].products.reduce(
//           (acc, product) => acc + product.price * product.count,
//           0
//         );

//         setTotalItems(totalItemsCount);
//         setTotalPrice(totalPriceValue);
//       } catch (error) {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [accessToken]);

//   const cart = useSelector((state) => state.cart);

//   const calculateShippingCost = () => {
//     return 49;
//   };

//   const [address, setAddress] = useState({
//     flatNo: "",
//     houseNo: "",
//     street: "",
//     city: "",
//     state: "",
//     country: "",
//     zipcode: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [orderData, setOrderData] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));

//     setValidationErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const validateForm = () => {
//     const errors = {};

//     for (const key in address) {
//       if (!address[key]) {
//         errors[key] = `${
//           key.charAt(0).toUpperCase() + key.slice(1)
//         } is required`;
//       }
//     }

//     setValidationErrors(errors);

//     return Object.keys(errors).length === 0;
//   };
//   const emptyCart = async () => {
//     try {
//       await axios.delete(
//         `${process.env.REACT_APP_API_URL}/api/user/empty-cart`,
//         axiosConfig
//       );
//       // Assuming you want to clear local state after successfully emptying the cart
//       setCartData(null);
//       setTotalItems(0);
//       setTotalPrice(0);
//     } catch (error) {
//       console.error("Error while emptying the cart:", error);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }
//     const emptyCartResponse = await axios.delete(
//       `${process.env.REACT_APP_API_URL}/api/user/empty-cart`,
//       axiosConfig
//     );

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/user/save-address`,
//         address,
//         axiosConfig
//       );

//       setAddress({
//         flatNo: "",
//         houseNo: "",
//         street: "",
//         city: "",
//         state: "",
//         country: "",
//         zipcode: "",
//       });
//     } catch (error) {
//       // console.error('Error while saving address:', error);
//     }
//   };

//   return (
//     <>
//       <div className=" p-4 md:px-[150px] ">
//         <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
//         <div className="mt-[7rem]">
//           <div
//             className="hidden lg:block fixed top-0 left-0 w-1/2 h-full "
//             aria-hidden="true"
//           />
//           <div
//             className="hidden lg:block fixed top-0 right-0 w-1/2 h-full"
//             aria-hidden="true"
//           />

//           <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
//             <h1 className="sr-only">Order information</h1>

//             <section
//               aria-labelledby="summary-heading"
//               className="pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
//             >
//               <div className="max-w-lg mx-auto">
//                 <h2
//                   id="summary-heading"
//                   className="text-3xl font-medium text-gray-900 mb-3"
//                 >
//                   Order summary
//                 </h2>

//                 <ul
//                   role="list"
//                   className="text-md font-medium text-gray-900 mb divide-y "
//                 >
//                   <p className="mb-3">Total Items: {totalItems}</p>

//                   {loading && <p>Loading...</p>}
//                   {!loading &&
//                     cartData &&
//                     cartData.products &&
//                     cartData.products.map((product, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center mb-6 md:flex md:mb-8"
//                       >
//                         <div className="w-1/6">
//                           <img
//                             src={product.product.productImage[0].url}
//                             alt={product.product.productName}
//                             className="object-cover h-[5rem] w-25"
//                           />
//                         </div>
//                         <div className="w-1/3 px-4">
//                           <h2 className="mb-1 text-md font-bold dark:text-gray-400">
//                             {product.product.productName}
//                           </h2>
//                           <p className="text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis h-[2.8rem] line-clamp-2">
//                             {product.product.productDescription}
//                           </p>
//                         </div>
//                         {/* <div className="hidden lg:block lg:w-2/12">
//                         <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{product.price}</p>
//                       </div> */}
//                         <div className="w-auto text-right md:w-1/6 lg:w-2/12">
//                           <p className="text-lg font-bold  dark:text-gray-400">
//                             Qty-{product.count}
//                           </p>
//                         </div>
//                         <div className="w-auto text-right md:w-1/6 lg:w-2/12">
//                           <p className="text-lg font-semibold dark:text-gray-400 mr-[-5rem]">
//                             {" "}
//                             &#8377;{" "}
//                             {Math.floor(
//                               product.product.productDiscountedPrice *
//                                 product.count
//                             )}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                 </ul>

//                 <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
//                   <div className="flex items-center justify-between">
//                     <dt className="text-gray-600">Subtotal</dt>
//                     <dd> ₹{totalPrice ? totalPrice.toFixed(2) : "N/A"}</dd>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <dt className="text-gray-600">Shipping</dt>
//                     <dd>₹{calculateShippingCost()}</dd>
//                   </div>

//                   <div className="flex items-center justify-between border-t border-gray-200 pt-6">
//                     <dt className="text-base">Total</dt>
//                     <dd className="text-base">
//                       ₹{(totalPrice + calculateShippingCost()).toFixed(2)}
//                     </dd>
//                   </div>
//                 </dl>

//                 <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
//                   <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
//                     <div className="max-w-lg mx-auto">
//                       <Popover.Button className="w-full flex items-center py-6 font-medium">
//                         <span className="text-base mr-auto">Total</span>
//                         <span className="text-base mr-2">
//                           ₹{(totalPrice + calculateShippingCost()).toFixed(2)}
//                         </span>
//                         <ChevronUpIcon
//                           className="w-5 h-5 text-gray-500"
//                           aria-hidden="true"
//                         />
//                       </Popover.Button>
//                     </div>
//                   </div>
//                   <Transition.Root as={Fragment}>
//                     <div>
//                       <Transition.Child
//                         as={Fragment}
//                         enter="transition-opacity ease-linear duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="transition-opacity ease-linear duration-300"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                       >
//                         <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
//                       </Transition.Child>

//                       <Transition.Child
//                         as={Fragment}
//                         enter="transition ease-in-out duration-300 transform"
//                         enterFrom="translate-y-full"
//                         enterTo="translate-y-0"
//                         leave="transition ease-in-out duration-300 transform"
//                         leaveFrom="translate-y-0"
//                         leaveTo="translate-y-full"
//                       >
//                         <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
//                           <dl className="max-w-lg mx-auto space-y-6">
//                             <div className="flex items-center justify-between">
//                               <dt className="text-gray-600">Subtotal</dt>
//                               <dd>
//                                 {" "}
//                                 ₹{cart.total ? cart.total.toFixed(2) : "N/A"}
//                               </dd>
//                             </div>

//                             <div className="flex items-center justify-between">
//                               <dt className="text-gray-600">Shipping</dt>
//                               <dd>₹{calculateShippingCost()}</dd>
//                             </div>
//                           </dl>
//                         </Popover.Panel>
//                       </Transition.Child>
//                     </div>
//                   </Transition.Root>
//                 </Popover>
//               </div>
//             </section>

//             <form
//               className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
//               onSubmit={handleFormSubmit}
//             >
//               <div className="max-w-lg mx-auto lg:max-w-none">
//                 <section aria-labelledby="shipping-heading" className="mt-2">
//                   <h2
//                     id="shipping-heading"
//                     className="text-3xl font-medium text-black"
//                   >
//                     Shipping address
//                   </h2>

//                   <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="flatNo"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Flat No.
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="flatNo"
//                           name="flatNo"
//                           value={address.flatNo}
//                           onChange={handleInputChange}
//                           className={`block w-full py-3 px-3 mt-3 shadow-md border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.flatNo ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.flatNo && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.flatNo}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="houseNo"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         House No.
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="houseNo"
//                           name="houseNo"
//                           value={address.houseNo}
//                           onChange={handleInputChange}
//                           className={`block w-full py-3 px-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.houseNo ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.houseNo && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.houseNo}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="street"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Street
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="street"
//                           name="street"
//                           value={address.street}
//                           onChange={handleInputChange}
//                           className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.street ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.street && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.street}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="country"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Country
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="country"
//                           name="country"
//                           value={address.country}
//                           onChange={handleInputChange}
//                           className={`block w-full py-3 mt-3 px-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.country ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.country && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.country}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                     {/* ... Repeat similar structure for other fields */}

//                     <div>
//                       <label
//                         htmlFor="city"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         City
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="city"
//                           name="city"
//                           value={address.city}
//                           onChange={handleInputChange}
//                           className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.city ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.city && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.city}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="state"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         State / Province
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="state"
//                           name="state"
//                           value={address.state}
//                           onChange={handleInputChange}
//                           className={`block w-full px-3 py-3 border-gray-300 rounded-md shadow-md mt-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.state ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.state && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.state}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="zipcode"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Postal code
//                       </label>
                      // <div className="mt-1">
                      //   <input
                      //     type="text"
                      //     id="zipcode"
                      //     name="zipcode"
                      //     value={address.zipcode}
                      //     onChange={handleInputChange}
                      //     className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      //       validationErrors.zipcode ? "border-red-500" : ""
                      //     }`}
                      //   />
                      //   {validationErrors.zipcode && (
                      //     <p className="text-red-500 text-sm mt-2">
                      //       {validationErrors.zipcode}
                      //     </p>
                      //   )}
                      // </div>
//                     </div>
//                   </div>
//                 </section>
//                 <div className="mt-4 p-4 rounded-md shadow-md">
//                   <h2 className="text-xl font-semibold mb-2">Payment Option</h2>

//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Select Payment Method:
//                   </label>
//                   <select
//                     className="w-full p-2 border rounded-md"
//                     value={selectedOption}
//                     onChange={handleSelectChange}
//                   >
//                     <option value="cod">Cash On Delivery (COD)</option>
//                     <option value="online">Online Payment</option>
//                   </select>

//                   {selectedOption === "cod" ? (
//                     <>
//                       <p className="text-green-600 font-semibold mt-2">
//                         Cash On Delivery (COD)
//                       </p>
//                       <p className="text-gray-600">
//                         You can pay when the product is delivered.
//                       </p>
//                     </>
//                   ) : (
//                     <>
//                       <p className="text-red-600 font-semibold mt-2">
//                         Online Payment
//                       </p>
//                       <p className="text-gray-600">
//                         Please make the payment online.
//                       </p>
//                     </>
//                   )}
//                 </div>
//                 <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
//                   <button
//                     type="submit"
//                     className="mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//                   >
//                     <span className="text-xl w-full px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                       Payment Now
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </main>
//         </div>
//         <Services />
//       </div>
//       <Footer />
//     </>
//   );
// }





import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";
import orchyIcon from "../../Assets/redesign.png";
import { useSelector } from "react-redux";
import Footer from "../HomeComponent/Footer";
import Services from "../HomeComponent/Services";
import Navbar from "../HomeComponent/Navbar";

export default function OrderSummary({ alphaUser, setAlphaUser }) {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState("cod");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  const accessToken = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/user/cart`,
          axiosConfig
        );
        setCartData(response.data[0]);
        setLoading(false);

        const totalItemsCount = response.data[0].products.reduce(
          (acc, product) => acc + product.count,
          0
        );
        const totalPriceValue = response.data[0].products.reduce(
          (acc, product) => acc + product.price * product.count,
          0
        );

        setTotalItems(totalItemsCount);
        setTotalPrice(totalPriceValue);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);

  const cart = useSelector((state) => state.cart);

  const calculateShippingCost = () => {
    return 49;
  };

  const [address, setAddress] = useState({
    flatNo: "",
    houseNo: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [orderData, setOrderData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    for (const key in address) {
      if (!address[key]) {
        errors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const emptyCart = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/user/empty-cart`,
        axiosConfig
      );
      // Assuming you want to clear local state after successfully emptying the cart
      setCartData(null);
      setTotalItems(0);
      setTotalPrice(0);
    } catch (error) {
      console.error("Error while emptying the cart:", error);
      // Handle error, show user-friendly message, etc.
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Save address
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/save-address`,
        address,
        axiosConfig
      );

      // Assuming you want to clear local state after successfully saving the address
      setAddress({
        flatNo: "",
        houseNo: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
      });

      // Empty cart after successful address save
      await emptyCart();
    } catch (error) {
      console.error('Error while handling form submit:', error);
      // Handle error, show user-friendly message, etc.
    }
  };

  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="mt-[7rem]">
          <div
            className="hidden lg:block fixed top-0 left-0 w-1/2 h-full "
            aria-hidden="true"
          />
          <div
            className="hidden lg:block fixed top-0 right-0 w-1/2 h-full"
            aria-hidden="true"
          />

          <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
            <h1 className="sr-only">Order information</h1>

            <section
              aria-labelledby="summary-heading"
              className="pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
            >
              <div className="max-w-lg mx-auto">
                <h2
                  id="summary-heading"
                  className="text-3xl font-medium text-gray-900 mb-3"
                >
                  Order summary
                </h2>

                <ul
                  role="list"
                  className="text-md font-medium text-gray-900 mb divide-y "
                >
                  <p className="mb-3">Total Items: {totalItems}</p>

                  {loading && <p>Loading...</p>}
                  {!loading &&
                    cartData &&
                    cartData.products &&
                    cartData.products.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center mb-6 md:flex md:mb-8"
                      >
                        <div className="w-1/6">
                          <img
                            src={product.product.productImage[0].url}
                            alt={product.product.productName}
                            className="object-cover h-[5rem] w-25"
                          />
                        </div>
                        <div className="w-1/3 px-4">
                          <h2 className="mb-1 text-md font-bold dark:text-gray-400">
                            {product.product.productName}
                          </h2>
                          <p className="text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis h-[2.8rem] line-clamp-2">
                            {product.product.productDescription}
                          </p>
                        </div>
                        {/* <div className="hidden lg:block lg:w-2/12">
                        <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{product.price}</p>
                      </div> */}
                        <div className="w-auto text-right md:w-1/6 lg:w-2/12">
                          <p className="text-lg font-bold  dark:text-gray-400">
                            Qty-{product.count}
                          </p>
                        </div>
                        <div className="w-auto text-right md:w-1/6 lg:w-2/12">
                          <p className="text-lg font-semibold dark:text-gray-400 mr-[-5rem]">
                            {" "}
                            &#8377;{" "}
                            {Math.floor(
                              product.product.productDiscountedPrice *
                                product.count
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                </ul>

                <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd> ₹{totalPrice ? totalPrice.toFixed(2) : "N/A"}</dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd>₹{calculateShippingCost()}</dd>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base">
                      ₹{(totalPrice + calculateShippingCost()).toFixed(2)}
                    </dd>
                  </div>
                </dl>

                <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                  <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                    <div className="max-w-lg mx-auto">
                      <Popover.Button className="w-full flex items-center py-6 font-medium">
                        <span className="text-base mr-auto">Total</span>
                        <span className="text-base mr-2">
                          ₹{(totalPrice + calculateShippingCost()).toFixed(2)}
                        </span>
                        <ChevronUpIcon
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <Transition.Root as={Fragment}>
                    <div>
                      <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                      >
                        <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                          <dl className="max-w-lg mx-auto space-y-6">
                            <div className="flex items-center justify-between">
                              <dt className="text-gray-600">Subtotal</dt>
                              <dd>
                                {" "}
                                ₹{cart.total ? cart.total.toFixed(2) : "N/A"}
                              </dd>
                            </div>

                            <div className="flex items-center justify-between">
                              <dt className="text-gray-600">Shipping</dt>
                              <dd>₹{calculateShippingCost()}</dd>
                            </div>
                          </dl>
                        </Popover.Panel>
                      </Transition.Child>
                    </div>
                  </Transition.Root>
                </Popover>
              </div>
            </section>

            <form
              className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
              onSubmit={handleFormSubmit}
            >
              <div className="max-w-lg mx-auto lg:max-w-none">
                <section aria-labelledby="shipping-heading" className="mt-2">
                  <h2
                    id="shipping-heading"
                    className="text-3xl font-medium text-black"
                  >
                    Shipping address
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="flatNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Flat No.
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="flatNo"
                          name="flatNo"
                          value={address.flatNo}
                          onChange={handleInputChange}
                          className={`block w-full py-3 px-3 mt-3 shadow-md border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.flatNo ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.flatNo && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.flatNo}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="houseNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        House No.
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="houseNo"
                          name="houseNo"
                          value={address.houseNo}
                          onChange={handleInputChange}
                          className={`block w-full py-3 px-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.houseNo ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.houseNo && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.houseNo}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="street"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="street"
                          name="street"
                          value={address.street}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.street ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.street && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.street}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={address.city}
                          onChange={handleInputChange}
                          className={`block w-full py-3 px-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.city ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.city && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.city}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={address.city}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.city ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.city && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.city}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={address.state}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-3 border-gray-300 rounded-md shadow-md mt-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.state ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.state && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.state}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="zipcode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="zipcode"
                          name="zipcode"
                          value={address.zipcode}
                          onChange={handleInputChange}
                          className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                            validationErrors.zipcode ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.zipcode && (
                          <p className="text-red-500 text-sm mt-2">
                            {validationErrors.zipcode}
                          </p>
                        )}
                      </div>
                    
                      
                    </div>
                  </div>
                </section>

                <div className="mt-10">
                  <h2 className="text-3xl font-medium text-black">Payment</h2>

                  <fieldset className="mt-6">
                    <legend className="text-base font-medium text-gray-900">
                      Payment options
                    </legend>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="cod"
                          name="paymentMethod"
                          type="radio"
                          value="cod"
                          checked={selectedOption === "cod"}
                          onChange={handleSelectChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label
                          htmlFor="cod"
                          className="ml-3 text-sm font-medium text-gray-700"
                        >
                          Cash on delivery
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="creditCard"
                          name="paymentMethod"
                          type="radio"
                          value="creditCard"
                          checked={selectedOption === "creditCard"}
                          onChange={handleSelectChange}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <label
                          htmlFor="creditCard"
                          className="ml-3 text-sm font-medium text-gray-700"
                        >
                          Credit card
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <button
                      type="submit"
                      onClick={emptyCart}
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Empty Cart
                    </button>
                  </div>
{/* 
                  <div className="col-span-1">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Place order
                    </button>
                  </div> */}
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}









// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Fragment } from "react";
// import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/solid";
// import { Popover, Transition } from "@headlessui/react";
// import orchyIcon from "../../Assets/redesign.png";
// import { useSelector } from "react-redux";
// import Footer from "../HomeComponent/Footer";
// import Services from "../HomeComponent/Services";
// import Navbar from "../HomeComponent/Navbar";

// export default function OrderSummary({ alphaUser, setAlphaUser }) {
//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [totalItems, setTotalItems] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("cod");

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   useEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, []);

//   const accessToken = localStorage.getItem("token");

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/user/cart`,
//           axiosConfig
//         );
//         setCartData(response.data[0]);
//         setLoading(false);

//         const totalItemsCount = response.data[0].products.reduce(
//           (acc, product) => acc + product.count,
//           0
//         );
//         const totalPriceValue = response.data[0].products.reduce(
//           (acc, product) => acc + product.price * product.count,
//           0
//         );

//         setTotalItems(totalItemsCount);
//         setTotalPrice(totalPriceValue);
//       } catch (error) {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [accessToken]);

//   const cart = useSelector((state) => state.cart);

//   const calculateShippingCost = () => {
//     return 49;
//   };

//   const [address, setAddress] = useState({
//     flatNo: "",
//     houseNo: "",
//     street: "",
//     city: "",
//     state: "",
//     country: "",
//     zipcode: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({});
//   const [orderData, setOrderData] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prevAddress) => ({
//       ...prevAddress,
//       [name]: value,
//     }));

//     setValidationErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const validateForm = () => {
//     const errors = {};

//     for (const key in address) {
//       if (!address[key]) {
//         errors[key] = `${
//           key.charAt(0).toUpperCase() + key.slice(1)
//         } is required`;
//       }
//     }

//     setValidationErrors(errors);

//     return Object.keys(errors).length === 0;
//   };

//   const emptyCart = async () => {
//     try {
//       await axios.delete(
//         `${process.env.REACT_APP_API_URL}/api/user/empty-cart`,
//         axiosConfig
//       );
//       // Assuming you want to clear local state after successfully emptying the cart
//       setCartData(null);
//       setTotalItems(0);
//       setTotalPrice(0);
//     } catch (error) {
//       console.error('Error while emptying the cart:', error);
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     const emptyCartResponse = await axios.delete(
//       `${process.env.REACT_APP_API_URL}/api/user/empty-cart`,
//       axiosConfig
//     );

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/user/save-address`,
//         address,
//         axiosConfig
//       );

//       setAddress({
//         flatNo: "",
//         houseNo: "",
//         street: "",
//         city: "",
//         state: "",
//         country: "",
//         zipcode: "",
//       });
//     } catch (error) {
//       // console.error('Error while saving address:', error);
//     }
//   };

//   return (
//     <>
//       <div className="p-4 md:px-[150px]">
//         <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
//         <div className="mt-[7rem]">
//           <div
//             className="hidden lg:block fixed top-0 left-0 w-1/2 h-full "
//             aria-hidden="true"
//           />
//           <div
//             className="hidden lg:block fixed top-0 right-0 w-1/2 h-full"
//             aria-hidden="true"
//           />

//           <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
//             <h1 className="sr-only">Order information</h1>

//             <section
//               aria-labelledby="summary-heading"
//               className="pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
//             >
//               <div className="max-w-lg mx-auto">
//                 <h2
//                   id="summary-heading"
//                   className="text-3xl font-medium text-gray-900 mb-3"
//                 >
//                   Order summary
//                 </h2>

//                 <ul
//                   role="list"
//                   className="text-md font-medium text-gray-900 mb divide-y "
//                 >
//                   <p className="mb-3">Total Items: {totalItems}</p>

//                   {loading && <p>Loading...</p>}
//                   {!loading &&
//                     cartData &&
//                     cartData.products &&
//                     cartData.products.map((product, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center mb-6 md:flex md:mb-8"
//                       >
//                         <div className="w-1/6">
//                           <img
//                             src={product.product.productImage[0].url}
//                             alt={product.product.productName}
//                             className="object-cover h-[5rem] w-25"
//                           />
//                         </div>
//                         <div className="w-1/3 px-4">
//                           <h2 className="mb-1 text-md font-bold dark:text-gray-400">
//                             {product.product.productName}
//                           </h2>
//                           <p className="text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis h-[2.8rem] line-clamp-2">
//                             {product.product.productDescription}
//                           </p>
//                         </div>
//                         {/* <div className="hidden lg:block lg:w-2/12">
//                           <p className="text-lg font-bold text-blue-500 dark:text-gray-400">{product.price}</p>
//                         </div> */}
//                         <div className="w-auto text-right md:w-1/6 lg:w-2/12">
//                           <p className="text-lg font-bold  dark:text-gray-400">
//                             Qty-{product.count}
//                           </p>
//                         </div>
//                         <div className="w-auto text-right md:w-1/6 lg:w-2/12">
//                           <p className="text-lg font-semibold dark:text-gray-400 mr-[-5rem]">
//                             {" "}
//                             &#8377;{" "}
//                             {Math.floor(
//                               product.product.productDiscountedPrice *
//                                 product.count
//                             )}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                 </ul>

//                 <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
//                   <div className="flex items-center justify-between">
//                     <dt className="text-gray-600">Subtotal</dt>
//                     <dd> ₹{totalPrice ? totalPrice.toFixed(2) : "N/A"}</dd>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <dt className="text-gray-600">Shipping</dt>
//                     <dd>₹{calculateShippingCost()}</dd>
//                   </div>

//                   <div className="flex items-center justify-between border-t border-gray-200 pt-6">
//                     <dt className="text-base">Total</dt>
//                     <dd className="text-base">
//                       ₹{(totalPrice + calculateShippingCost()).toFixed(2)}
//                     </dd>
//                   </div>
//                 </dl>

//                 <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
//                   <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
//                     <div className="max-w-lg mx-auto">
//                       <Popover.Button className="w-full flex items-center py-6 font-medium">
//                         <span className="text-base mr-auto">Total</span>
//                         <span className="text-base mr-2">
//                           ₹{(totalPrice + calculateShippingCost()).toFixed(2)}
//                         </span>
//                         <ChevronUpIcon
//                           className="w-5 h-5 text-gray-500"
//                           aria-hidden="true"
//                         />
//                       </Popover.Button>
//                     </div>
//                   </div>
//                   <Transition.Root as={Fragment}>
//                     <div>
//                       <Transition.Child
//                         as={Fragment}
//                         enter="transition-opacity ease-linear duration-300"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="transition-opacity ease-linear duration-300"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                       >
//                         <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
//                       </Transition.Child>

//                       <Transition.Child
//                         as={Fragment}
//                         enter="transition ease-in-out duration-300 transform"
//                         enterFrom="translate-y-full"
//                         enterTo="translate-y-0"
//                         leave="transition ease-in-out duration-300 transform"
//                         leaveFrom="translate-y-0"
//                         leaveTo="translate-y-full"
//                       >
//                         <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
//                           <dl className="max-w-lg mx-auto space-y-6">
//                             <div className="flex items-center justify-between">
//                               <dt className="text-gray-600">Subtotal</dt>
//                               <dd>
//                                 {" "}
//                                 ₹{cart.total ? cart.total.toFixed(2) : "N/A"}
//                               </dd>
//                             </div>

//                             <div className="flex items-center justify-between">
//                               <dt className="text-gray-600">Shipping</dt>
//                               <dd>₹{calculateShippingCost()}</dd>
//                             </div>
//                           </dl>
//                         </Popover.Panel>
//                       </Transition.Child>
//                     </div>
//                   </Transition.Root>
//                 </Popover>
//               </div>
//             </section>

//             <form
//               className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
//               onSubmit={handleFormSubmit}
//             >
//               <div className="max-w-lg mx-auto lg:max-w-none">
//                 <section aria-labelledby="shipping-heading" className="mt-2">
//                   <h2
//                     id="shipping-heading"
//                     className="text-3xl font-medium text-black"
//                   >
//                     Shipping address
//                   </h2>

//                   <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="flatNo"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Flat No.
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="flatNo"
//                           name="flatNo"
//                           value={address.flatNo}
//                           onChange={handleInputChange}
//                           className={`block w-full py-3 px-3 mt-3 shadow-md border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.flatNo ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.flatNo && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.flatNo}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="houseNo"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         House No.
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="houseNo"
//                           name="houseNo"
//                           value={address.houseNo}
//                           onChange={handleInputChange}
//                           className={`block w-full py-3 px-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.houseNo ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.houseNo && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.houseNo}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="street"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Street
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="street"
//                           name="street"
//                           value={address.street}
//                           onChange={handleInputChange}
//                           className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.street ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.street && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.street}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div className="sm:col-span-3">
//                       <label
//                         htmlFor="country"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Country
//                       </label>
//                       <div className="mt-1">
//                         <input
//                           type="text"
//                           id="country"
//                           name="country"
//                           value={address.country}
//                           onChange={handleInputChange}
//                           className={`block w-full py-3 mt-3 px-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                             validationErrors.country ? "border-red-500" : ""
//                           }`}
//                         />
//                         {validationErrors.country && (
//                           <p className="text-red-500 text-sm mt-2">
//                             {validationErrors.country}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                     {/* ... Repeat similar structure for other fields */}

                    // <div>
                    //   <label
                    //     htmlFor="city"
                    //     className="block text-sm font-medium text-gray-700"
                    //   >
                    //     City
                    //   </label>
                    //   <div className="mt-1">
                    //     <input
                    //       type="text"
                    //       id="city"
                    //       name="city"
                    //       value={address.city}
                    //       onChange={handleInputChange}
                    //       className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    //         validationErrors.city ? "border-red-500" : ""
                    //       }`}
                    //     />
                    //     {validationErrors.city && (
                    //       <p className="text-red-500 text-sm mt-2">
                    //         {validationErrors.city}
                    //       </p>
                    //     )}
                    //   </div>
                    // </div>

                    // <div>
                    //   <label
                    //     htmlFor="state"
                    //     className="block text-sm font-medium text-gray-700"
                    //   >
                    //     State / Province
                    //   </label>
                    //   <div className="mt-1">
                    //     <input
                    //       type="text"
                    //       id="state"
                    //       name="state"
                    //       value={address.state}
                    //       onChange={handleInputChange}
                    //       className={`block w-full px-3 py-3 border-gray-300 rounded-md shadow-md mt-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    //         validationErrors.state ? "border-red-500" : ""
                    //       }`}
                    //     />
                    //     {validationErrors.state && (
                    //       <p className="text-red-500 text-sm mt-2">
                    //         {validationErrors.state}
                    //       </p>
                    //     )}
                    //   </div>
                    // </div>

                    // <div>
                    //   <label
                    //     htmlFor="zipcode"
                    //     className="block text-sm font-medium text-gray-700"
                    //   >
                    //     Postal code
                    //   </label>
                    //   <div className="mt-1">
                    //     <input
                    //       type="text"
                    //       id="zipcode"
                    //       name="zipcode"
                    //       value={address.zipcode}
                    //       onChange={handleInputChange}
                    //       className={`block w-full px-3 py-3 mt-3 border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    //         validationErrors.zipcode ? "border-red-500" : ""
                    //       }`}
                    //     />
                    //     {validationErrors.zipcode && (
                    //       <p className="text-red-500 text-sm mt-2">
                    //         {validationErrors.zipcode}
                    //       </p>
                    //     )}
                    //   </div>
                    // </div>
//                   </div>
//                 </section>
//                 <div className="mt-4 p-4 rounded-md shadow-md">
//                   <h2 className="text-xl font-semibold mb-2">Payment Option</h2>

//                   <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Select Payment Method:
//                   </label>
//                   <select
//                     className="w-full p-2 border rounded-md"
//                     value={selectedOption}
//                     onChange={handleSelectChange}
//                   >
//                     <option value="cod">Cash On Delivery (COD)</option>
//                     <option value="online">Online Payment</option>
//                   </select>

//                   {selectedOption === "cod" ? (
//                     <>
//                       <p className="text-green-600 font-semibold mt-2">
//                         Cash On Delivery (COD)
//                       </p>
//                       <p className="text-gray-600">
//                         You can pay when the product is delivered.
//                       </p>
//                     </>
//                   ) : (
//                     <>
//                       <p className="text-red-600 font-semibold mt-2">
//                         Online Payment
//                       </p>
//                       <p className="text-gray-600">
//                         Please make the payment online.
//                       </p>
//                     </>
//                   )}
//                 </div>
//                 <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
//                   <button
//                     onClick={emptyCart}
//                     type="submit"
//                     className="mt-4 w-full inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-black to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//                   >
//                     <span className="text-xl w-full px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                       Payment Now
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </main>
//         </div>
//         <Services />
//       </div>
//       <Footer />
//     </>
//   );
// }
