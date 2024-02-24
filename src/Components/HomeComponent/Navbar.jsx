// import React, { useState, useRef, useEffect } from "react";
// import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import redesign from "../../Assets/redesign.png";
// import UserProfile from "../UserProfile/UserProfile";
// import Swal from "sweetalert2";
// // import dotenv from "dotenv"
// const Navbar = ({ alphaUser, setAlphaUser, wishlistLength }) => {
//   const navigate = useNavigate();
//   const [productLength, setProductLength] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isOfferHovered, setIsOfferHovered] = useState(false);

//   const inputRef = useRef(null);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         suggestions.length > 0 &&
//         isOfferHoveredRef.current &&
//         !isOfferHoveredRef.current.contains(event.target) &&
//         !inputRef.current.contains(event.target)
//       ) {
//         setSuggestions([]);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [suggestions]);

//   const handleSearchInputChange = (event) => {
//     const value = event.target.value;
//     setSearchQuery(value);

//     const productCategories = [
//       "casual shirt",
//       "formal shirt",
//       "party-wear shirt",
//       "t-shirt",
//       "shirt",
//       "plain shirt",
//       "checks shirt",
//     ];

//     const filteredSuggestions = productCategories.filter((category) =>
//       category.toLowerCase().includes(value.toLowerCase())
//     );

//     setSuggestions(filteredSuggestions);
//   };

//   // ... (existing code)

// const handleSearchButtonClick = () => {
//   if (searchQuery.trim() === "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Please enter a search term!",
//     });
//     return;
//   }

//   if (productCategories.includes(searchQuery.toLowerCase())) {
//     if (suggestions.length > 0) {
//       navigate(`/${searchQuery}`);
//     } else {
//       navigate("/coming-soon");
//     }
//   } else {
//     Swal.fire({
//       icon: "error",
//       title: "Not a valid product search",
//       text: "Please enter a valid product search term!",
//     });
//   }
// };

// // ... (existing code)


//   const handleDropdownMouseEnter = () => {
//     setIsOfferHovered(true);
//   };

//   const handleDropdownMouseLeave = (e) => {
//     if (
//       !e.relatedTarget ||
//       !e.relatedTarget.contains(isOfferHoveredRef.current)
//     ) {
//       setIsOfferHovered(false);
//     }
//   };

//   const isOfferHoveredRef = useRef(null);
//   const accessToken = localStorage.getItem("token");

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };
//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.REACT_APP_API_URL}/api/user/cart`,
//           axiosConfig
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch cart data");
//         }

//         const data = await response.json();
//         const productsLength = data[0].products.length;

//         setProductLength(productsLength);
//       } catch (error) {
//         console.error("Error fetching cart data:", error.message);
//       }
//     };

//     fetchCartData();
//   });

//   const logoutUser = () => {
//     setAlphaUser(false);
//     localStorage.removeItem("token");
//     localStorage.removeItem("profile");
//     navigate("/");
//   };

//   return (
//     <div className="fixed top-0 bg-white left-0 w-full z-[99999] mb-[30%]">
//       <header className="pt-3">
//         <div className="flex items-center justify-between w-full fixed top-0 left-0 px-20 pt-4 z-[99999] bg-white">
//           <div
//             className="block md:hidden cursor-pointer text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </div>
//           <Link to="/" className="md:w-1/4 hidden md:block">
//             <img
//               src={redesign}
//               alt="Logo"
//               className="w-[12rem] object-contain"
//             />
//           </Link>
//           <div className="hidden md:flex items-center bg-white space-x-4 relative md:w-[40%]">
//             <div className="relative w-full">
//               <div
//                 className="bg-gray-100 rounded-md border border-black w-full flex items-center md:ml-[3.5rem]"
//                 ref={inputRef}
//               >
//                <input
//   type="text"
//   placeholder="Search Products"
//   value={searchQuery}
//   onChange={handleSearchInputChange}
//   onKeyDown={(e) => {
//     if (e.key === 'Enter') {
//       handleSearchButtonClick();
//     }
//   }}
//   className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
// />
//                 <button
//                   onClick={handleSearchButtonClick}
//                   className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//                 >
//                   <FaSearch />
//                 </button>
//               </div>
//               {suggestions.length > 0 && (
//                 <div
//                   ref={isOfferHoveredRef}
//                   className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full border z-50 border-gray-300 rounded-md shadow-md overflow-hidden bg-white md:ml-[3.5rem]"
//                 >
//                   <ul>
//                     {suggestions.map((item, index) => (
//                       <li
//                         key={index}
//                         className="py-2 px-4 cursor-pointer hover:bg-gray-200"
//                         onClick={() => navigate(`/${item.replace(" ", "-")}`)}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center space-x-8 ml-auto">
//             {alphaUser ? (
//               <UserProfile
//                 logoutUser={logoutUser}
//                 setAlphaUser={setAlphaUser}
//               />
//             ) : (
//               <div className="text-black flex flex-col items-center">
//                 <Link
//                   to="/login-form"
//                   className="flex flex-col items-center gap-1"
//                 >
//                   <button className="flex gap-2 ml-1 items-center">
//                     <FaRegUser size={20} />
//                   </button>
//                   <span className="text-xs">Login</span>
//                 </Link>
//               </div>
//             )}

//             <div className="text-black flex flex-col items-center">
//               <Link
//                 to="/favourite-list"
//                 className="flex flex-col items-center gap-1"
//               >
//                 <button className="flex items-center gap-2">
//                   <FaRegHeart size={20} />
//                 </button>
//                 <span className="text-xs">Saved</span>
//               </Link>
//             </div>

//             <div className="text-black cursor-pointer flex flex-col items-center">
//               <Link to="/product-cart">
//                 <button className="flex items-center gap-2">
//                   <AiOutlineShoppingCart size={20} />
//                   {productLength !== null && productLength !== 0 && (
//                     <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
//                       {productLength}
//                     </p>
//                   )}
//                 </button>
//                 <span className="text-xs">Cart</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="md:hidden mt-20 px-2 lg:mt-8">
//           <div className="bg-gray-100 rounded-md border border-black w-full flex items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//               className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//             />
//             <button
//               onClick={handleSearchButtonClick}
//               className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//             >
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center mt-16 uppercase ml-auto border-b-2 pb-[18px] bg-white w-full">
//           <Link to="/" className="font-bold mx-2 cursor-pointer">
//             Home
//           </Link>
//           <Link to="/main" className="font-bold mx-2 cursor-pointer">
//             Men
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Women
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Kids
//           </Link>
//         </div>
//         {isMenuOpen && (
//           <div className="block md:hidden py-4 bg-yelllow-200 text-center border-b lg:mt-28 ">
//             <Link to="/" className="block text-black mt-2">
//               Home
//             </Link>
//             <Link to="/main" className="block text-black mt-2">
//               Men
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Women
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Kids
//             </Link>
//           </div>
//         )}
//         {isOfferHovered && (
//           <div
//             ref={isOfferHoveredRef}
//             className="absolute left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-md shadow-md z-20 flex"
//             style={{ top: "100%" }}
//             onMouseEnter={handleDropdownMouseEnter}
//             onMouseLeave={handleDropdownMouseLeave}
//           >
//             {/* Add your dropdown menu content here */}
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Navbar;




  import React, { useState, useRef, useEffect } from "react";
  import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
  import { AiOutlineShoppingCart } from "react-icons/ai";
  import { Link, useNavigate } from "react-router-dom";
  import redesign from "../../Assets/redesign.png";
  import UserProfile from "../UserProfile/UserProfile";
  import Swal from "sweetalert2";

  const Navbar = ({ alphaUser, setAlphaUser, wishlistLength }) => {
    const navigate = useNavigate();
    const [productLength, setProductLength] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isOfferHovered, setIsOfferHovered] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          suggestions.length > 0 &&
          isOfferHoveredRef.current &&
          !isOfferHoveredRef.current.contains(event.target) &&
          !inputRef.current.contains(event.target)
        ) {
          setSuggestions([]);
        }
      };

      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [suggestions]);

    const handleSearchInputChange = (event) => {
      const value = event.target.value;
      setSearchQuery(value);

      const productCategories = [
        "casual shirt",
        "formal shirt",
        "party-wear shirt",
        "tshirt",
        "shirt",
        "plain shirt",
        "checks shirt",
       
      ];

      const filteredSuggestions = productCategories.filter((category) =>
        category.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
    };

    const handleSearchButtonClick = () => {
      const productCategories = [
        "casual shirt",
        "formal shirt",
        "party-wear shirt",
        "tshirt",
        "t-shirt",
        "shirt",
        "plain shirt",
        "checks shirt",
        "tshirt",
        "kids",
        "kurta pajama",
      ];

      if (searchQuery.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a search term!",
        });
        return;
      }

      if (productCategories.includes(searchQuery.toLowerCase())) {
        const formattedSearchQuery = searchQuery.replace(/\s+/g, '-'); // replace spaces with hyphens
        if (suggestions.length > 0) {
          navigate(`/${formattedSearchQuery}`);
        } else {
          navigate("/comming-soon");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Not a valid product search",
          text: "Please enter a valid product search term!",
        });
      }
    }        

    const handleDropdownMouseEnter = () => {
      setIsOfferHovered(true);
    };

    const handleDropdownMouseLeave = (e) => {
      if (
        !e.relatedTarget ||
        !e.relatedTarget.contains(isOfferHoveredRef.current)
      ) {
        setIsOfferHovered(false);
      }
    };

    const isOfferHoveredRef = useRef(null);
    const accessToken = localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    useEffect(() => {
      const fetchCartData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/user/cart`,
            axiosConfig
          );

          if (!response.ok) {
            throw new Error("Failed to fetch cart data");
          }

          const data = await response.json();
          const productsLength = data[0].products.length;

          setProductLength(productsLength);
        } catch (error) {
          console.error("Error fetching cart data:", error.message);
        }
      };

      fetchCartData();
    }, [axiosConfig]);

    const logoutUser = () => {
      setAlphaUser(false);
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      navigate("/");
    };

    return (
      <div className="fixed top-0 bg-white left-0 w-full z-[99999] mb-[30%]">
        <header className="pt-3">
          <div className="flex items-center justify-between w-full fixed top-0 left-0 px-20 pt-4 z-[99999] bg-white">
            <div
              className="block md:hidden cursor-pointer text-3xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </div>
            <Link to="/" className="md:w-1/4 hidden md:block">
              <img
                src={redesign}
                alt="Logo"
                className="w-[12rem] object-contain"
              />
            </Link>
            <div className="hidden md:flex items-center bg-white space-x-4 relative md:w-[40%]">
              <div className="relative w-full">
                <div
                  className="bg-gray-100 rounded-md border border-black w-full flex items-center md:ml-[3.5rem]"
                  ref={inputRef}
                >
                  <input
                    type="text"
                    placeholder="Search Products"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearchButtonClick();
                      }
                    }}
                    className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
                  />
                  <button
                    onClick={handleSearchButtonClick}
                    className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
                  >
                    <FaSearch />
                  </button>
                </div>
                {suggestions.length > 0 && (
                  <div
                    ref={isOfferHoveredRef}
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full border z-50 border-gray-300 rounded-md shadow-md overflow-hidden bg-white md:ml-[3.5rem]"
                  >
                    <ul>
                      {suggestions.map((item, index) => (
                        <li
                          key={index}
                          className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                          onClick={() =>
                            navigate(`/${item.replace(" ", "-")}`)
                          }
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-8 ml-auto">
              {alphaUser ? (
                <UserProfile
                  logoutUser={logoutUser}
                  setAlphaUser={setAlphaUser}
                />
              ) : (
                <div className="text-black flex flex-col items-center">
                  <Link
                    to="/login-form"
                    className="flex flex-col items-center gap-1"
                  >
                    <button className="flex gap-2 ml-1 items-center">
                      <FaRegUser size={20} />
                    </button>
                    <span className="text-xs">Login</span>
                  </Link>
                </div>
              )}

              <div className="text-black flex flex-col items-center">
                <Link
                  to="/favourite-list"
                  className="flex flex-col items-center gap-1"
                >
                  <button className="flex items-center gap-2">
                    <FaRegHeart size={20} />
                  </button>
                  <span className="text-xs">Saved</span>
                </Link>
              </div>

              <div className="text-black cursor-pointer flex flex-col items-center">
                <Link to="/product-cart">
                  <button className="flex items-center gap-2">
                    <AiOutlineShoppingCart size={20} />
                    {productLength !== null && productLength !== 0 && (
                      <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
                        {productLength}
                      </p>
                    )}
                  </button>
                  <span className="text-xs">Cart</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden mt-20 px-2 lg:mt-8">
            <div className="bg-gray-100 rounded-md border border-black w-full flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button
                onClick={handleSearchButtonClick}
                className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
              >
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-16 uppercase ml-auto border-b-2 pb-[18px] bg-white w-full">
            <Link to="/" className="font-bold mx-2 cursor-pointer">
              Home
            </Link>
            <Link to="/main" className="font-bold mx-2 cursor-pointer">
              Men
            </Link>
            <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
              Women
            </Link>
            <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
              Kids
            </Link>
          </div>
          {isMenuOpen && (
            <div className="block md:hidden py-4 bg-yelllow-200 text-center border-b lg:mt-28 ">
              <Link to="/" className="block text-black mt-2">
                Home
              </Link>
              <Link to="/main" className="block text-black mt-2">
                Men
              </Link>
              <Link to="/comming-soon" className="block text-black mt-2">
                Women
              </Link>
              <Link to="/comming-soon" className="block text-black mt-2">
                Kids
              </Link>
            </div>
          )}
          {isOfferHovered && (
            <div
              ref={isOfferHoveredRef}
              className="absolute left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-md shadow-md z-20 flex"
              style={{ top: "100%" }}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {/* Add your dropdown menu content here */}
            </div>
          )}
        </header>
      </div>
    );
  };

  export default Navbar;




// import React, { useState, useRef, useEffect } from "react";
// import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import redesign from "../../Assets/redesign.png";
// import axios from "axios";
// import UserProfile from "../UserProfile/UserProfile";
// import Swal from 'sweetalert2';

// const Navbar = ({ alphaUser, setAlphaUser, wishlistLength }) => {
//   const navigate = useNavigate();

//   const logoutUser = () => {
//     setAlphaUser(false);
//     localStorage.removeItem("token");
//     localStorage.removeItem("profile");
//     navigate("/");
//   };

//   const getUserDetails = async () => {
//     //
//     try {
//       const response = await axios.get("http://localhost:9090/api/user/");
//       const data = response.data;
//       const number = localStorage.getItem("auth_no");
//       //console.log(data)
//       if (number === data.mobileNo) {
//         //console.log(response.data.number);
//       }
//       //console.log(data.email);
//     } catch (error) {
//       //console.error('API Error:', error);
//     }
//   };

//   const quantity = useSelector((state) => state.cart.quantity);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isOfferHovered, setIsOfferHovered] = useState(false);

//   // const { wishlist } = useContext(UserContext);
//   const inputRef = useRef(null);
//   useEffect(() => {
//     getUserDetails();
//     const handleOutsideClick = (event) => {
//       if (
//         suggestions.length > 0 &&
//         isOfferHoveredRef.current &&
//         !isOfferHoveredRef.current.contains(event.target) &&
//         !inputRef.current.contains(event.target)
//       ) {
//         // Hide suggestions if clicked outside the suggestions container or the input
//         setSuggestions([]);
//       }
//     };
//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       // Remove the event listener when the component unmounts
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [suggestions]);
//   const handleSearchInputChange = (event) => {
//     const value = event.target.value;
//     setSearchQuery(value);
//     // Your product categories
//     const productCategories = [
//       "casual shirt",
//       "formal shirt",
//       "party wear shirt",
//       "t-shirt",
//       "shirt",
//       "plain shirt",
//       "checks shirt",
//     ];
//     // Filter product categories based on the input value
//     const filteredSuggestions = productCategories.filter((category) =>
//       category.toLowerCase().includes(value.toLowerCase())
//     );
//     // Update the suggestions
//     setSuggestions(filteredSuggestions);
//   };

//   const handleSearchButtonClick = () => {
//     if (searchQuery.trim() === "") {
//       // Display a sweet alert for an empty search query
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please enter a search term!',
//       });
//       return;
//     }

//     if (suggestions.length > 0) {
//       navigate(`/${suggestions[0].replace(" ", "-")}`);
//     } else {
//       navigate("/coming-soon");
//     }
//   };

//   const handleDropdownMouseEnter = () => {
//     setIsOfferHovered(true);
//   };
//   const handleDropdownMouseLeave = (e) => {
//     if (
//       !e.relatedTarget ||
//       !e.relatedTarget.contains(isOfferHoveredRef.current)
//     ) {
//       setIsOfferHovered(false);
//     }
//   };
//   const isOfferHoveredRef = useRef(null);
//   return (
//     <div className="fixed top-0 bg-white left-0 w-full z-[99999] mb-[30%]">
//       <header className="pt-3 ">
//         <div className="flex items-center justify-between w-full fixed top-0 left-0 px-20 pt-4 z-[99999] bg-white">
//           <div
//             className="block md:hidden cursor-pointer text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </div>
//           <Link to="/" className="md:w-1/4 hidden md:block">
//             <img
//               src={redesign}
//               alt="Logo"
//               className="w-[12rem] object-contain"
//             />
//           </Link>
//           <div className="hidden md:flex items-center bg-white space-x-4 relative md:w-[40%] ">
//             <div className="relative w-full ">
//               <div
//                 className="bg-gray-100  rounded-md border border-black w-full flex items-center md:ml-[3.5rem]"
//                 ref={inputRef}
//               >
//                 <input
//                   type="text"
//                   placeholder="Search Products"
//                   value={searchQuery}
//                   onChange={handleSearchInputChange}
//                   className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//                 />
//                 <button
//                   onClick={handleSearchButtonClick}
//                   className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//                 >
//                   <FaSearch />
//                 </button>
//               </div>
//               {suggestions.length > 0 && (
//                 <div
//                   ref={isOfferHoveredRef}
//                   className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full border z-50  border-gray-300 rounded-md shadow-md overflow-hidden bg-white md:ml-[3.5rem]"
//                 >
//                   <ul>
//                     {suggestions.map((item, index) => (
//                       <li
//                         key={index}
//                         className="py-2 px-4 cursor-pointer hover:bg-gray-200"
//                         onClick={() => navigate(`/${item.replace(" ", "-")}`)}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center space-x-8  ml-auto">
//             {alphaUser ? (
//               <UserProfile
//                 logoutUser={logoutUser}
//                 setAlphaUser={setAlphaUser}
//               />
//             ) : (
//               <div className="text-black flex flex-col items-center">
//                 <Link to="/login-form" className="flex flex-col items-center gap-1">
//                   <button className="flex gap-2 ml-1 items-center">
//                     <FaRegUser size={20} />
//                   </button>
//                   <span className="text-xs">Login</span>
//                 </Link>
//               </div>
//             )}

//             <div className="text-black flex flex-col items-center">
//               <Link
//                 to="/favourite-list"
//                 className="flex flex-col items-center gap-1"
//               >
//                 <button className="flex items-center gap-2">
//                   <FaRegHeart size={20} />
//                   {/* {wishlistLength > 0 ? (
//         <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
//           {wishlistLength}
//         </p>
//       ) : null} */}
//                 </button>
//                 <span className="text-xs">Saved</span>
//               </Link>
//             </div>

//             <div className="text-black cursor-pointer flex flex-col items-center">
//               <Link to="/product-cart">
//                 <button className="flex items-center gap-2">
//                   <AiOutlineShoppingCart size={20} />
//                   {quantity > 0 ? (
//                     <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
//                       {quantity}
//                     </p>
//                   ) : null}
//                 </button>
//                 <span className="text-xs">Cart</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="md:hidden mt-20 px-2 lg:mt-8">
//           <div className="bg-gray-100 rounded-md border border-black w-full flex items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//               className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//             />
//             <button
//               onClick={handleSearchButtonClick}
//               className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//             >
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center mt-16 uppercase ml-auto border-b-2 pb-[18px] bg-white w-full">
//           <Link to="/" className="font-bold mx-2 cursor-pointer">
//             Home
//           </Link>
//           <Link to="/main" className="font-bold mx-2 cursor-pointer">
//             Men
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Women
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Kids
//           </Link>
//         </div>
//         {isMenuOpen && (
//           <div className="block md:hidden py-4 bg-yelllow-200 text-center border-b lg:mt-28 ">
//             <Link to="/" className="block text-black mt-2">
//               Home
//             </Link>
//             <Link to="/main" className="block text-black mt-2">
//               Men
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Women
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Kids
//             </Link>
//           </div>
//         )}
//         {isOfferHovered && (
//           <div
//             ref={isOfferHoveredRef}
//             className="absolute left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-md shadow-md z-20 flex"
//             style={{ top: "100%" }}
//             onMouseEnter={handleDropdownMouseEnter}
//             onMouseLeave={handleDropdownMouseLeave}
//           >
//             {/* Add your dropdown menu content here */}
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };
// export default Navbar;


// perfect code

// import React, { useState, useRef, useEffect } from "react";
// import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import redesign from "../../Assets/redesign.png";
// import UserProfile from "../UserProfile/UserProfile";
// import Swal from "sweetalert2";
// // import dotenv from "dotenv"
// const Navbar = ({ alphaUser, setAlphaUser, wishlistLength }) => {
//   const navigate = useNavigate();
//   const [productLength, setProductLength] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isOfferHovered, setIsOfferHovered] = useState(false);

//   const inputRef = useRef(null);

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (
//         suggestions.length > 0 &&
//         isOfferHoveredRef.current &&
//         !isOfferHoveredRef.current.contains(event.target) &&
//         !inputRef.current.contains(event.target)
//       ) {
//         setSuggestions([]);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [suggestions]);

//   const handleSearchInputChange = (event) => {
//     const value = event.target.value;
//     setSearchQuery(value);

//     const productCategories = [
//       "casual shirt",
//       "formal shirt",
//       "party wear shirt",
//       "t-shirt",
//       "shirt",
//       "plain shirt",
//       "checks shirt",
//     ];

//     const filteredSuggestions = productCategories.filter((category) =>
//       category.toLowerCase().includes(value.toLowerCase())
//     );

//     setSuggestions(filteredSuggestions);
//   };

//   const handleSearchButtonClick = () => {
//     if (searchQuery.trim() === "") {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please enter a search term!",
//       });
//       return;
//     }

//     if (suggestions.length > 0) {
//       navigate(`/${suggestions[0].replace(" ", "-")}`);
//     } else {
//       navigate("/coming-soon");
//     }
//   };

//   const handleDropdownMouseEnter = () => {
//     setIsOfferHovered(true);
//   };

//   const handleDropdownMouseLeave = (e) => {
//     if (
//       !e.relatedTarget ||
//       !e.relatedTarget.contains(isOfferHoveredRef.current)
//     ) {
//       setIsOfferHovered(false);
//     }
//   };

//   const isOfferHoveredRef = useRef(null);
//   const accessToken = localStorage.getItem("token");

//   const axiosConfig = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "application/json",
//     },
//   };
//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.REACT_APP_API_URL}/api/user/cart`,
//           axiosConfig
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch cart data");
//         }

//         const data = await response.json();
//         const productsLength = data[0].products.length;

//         setProductLength(productsLength);
//       } catch (error) {
//         console.error("Error fetching cart data:", error.message);
//       }
//     };

//     fetchCartData();
//   });

//   const logoutUser = () => {
//     setAlphaUser(false);
//     localStorage.removeItem("token");
//     localStorage.removeItem("profile");
//     navigate("/");
//   };

//   return (
//     <div className="fixed top-0 bg-white left-0 w-full z-[99999] mb-[30%]">
//       <header className="pt-3">
//         <div className="flex items-center justify-between w-full fixed top-0 left-0 px-20 pt-4 z-[99999] bg-white">
//           <div
//             className="block md:hidden cursor-pointer text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </div>
//           <Link to="/" className="md:w-1/4 hidden md:block">
//             <img
//               src={redesign}
//               alt="Logo"
//               className="w-[12rem] object-contain"
//             />
//           </Link>
//           <div className="hidden md:flex items-center bg-white space-x-4 relative md:w-[40%]">
//             <div className="relative w-full">
//               <div
//                 className="bg-gray-100 rounded-md border border-black w-full flex items-center md:ml-[3.5rem]"
//                 ref={inputRef}
//               >
//                 <input
//                   type="text"
//                   placeholder="Search Products"
//                   value={searchQuery}
//                   onChange={handleSearchInputChange}
//                   className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//                 />
//                 <button
//                   onClick={handleSearchButtonClick}
//                   className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//                 >
//                   <FaSearch />
//                 </button>
//               </div>
//               {suggestions.length > 0 && (
//                 <div
//                   ref={isOfferHoveredRef}
//                   className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full border z-50 border-gray-300 rounded-md shadow-md overflow-hidden bg-white md:ml-[3.5rem]"
//                 >
//                   <ul>
//                     {suggestions.map((item, index) => (
//                       <li
//                         key={index}
//                         className="py-2 px-4 cursor-pointer hover:bg-gray-200"
//                         onClick={() => navigate(`/${item.replace(" ", "-")}`)}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center space-x-8 ml-auto">
//             {alphaUser ? (
//               <UserProfile
//                 logoutUser={logoutUser}
//                 setAlphaUser={setAlphaUser}
//               />
//             ) : (
//               <div className="text-black flex flex-col items-center">
//                 <Link
//                   to="/login-form"
//                   className="flex flex-col items-center gap-1"
//                 >
//                   <button className="flex gap-2 ml-1 items-center">
//                     <FaRegUser size={20} />
//                   </button>
//                   <span className="text-xs">Login</span>
//                 </Link>
//               </div>
//             )}

//             <div className="text-black flex flex-col items-center">
//               <Link
//                 to="/favourite-list"
//                 className="flex flex-col items-center gap-1"
//               >
//                 <button className="flex items-center gap-2">
//                   <FaRegHeart size={20} />
//                 </button>
//                 <span className="text-xs">Saved</span>
//               </Link>
//             </div>

//             <div className="text-black cursor-pointer flex flex-col items-center">
//               <Link to="/product-cart">
//                 <button className="flex items-center gap-2">
//                   <AiOutlineShoppingCart size={20} />
//                   {productLength !== null && productLength !== 0 && (
//                     <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
//                       {productLength}
//                     </p>
//                   )}
//                 </button>
//                 <span className="text-xs">Cart</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="md:hidden mt-20 px-2 lg:mt-8">
//           <div className="bg-gray-100 rounded-md border border-black w-full flex items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//               className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//             />
//             <button
//               onClick={handleSearchButtonClick}
//               className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//             >
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center mt-16 uppercase ml-auto border-b-2 pb-[18px] bg-white w-full">
//           <Link to="/" className="font-bold mx-2 cursor-pointer">
//             Home
//           </Link>
//           <Link to="/main" className="font-bold mx-2 cursor-pointer">
//             Men
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Women
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Kids
//           </Link>
//         </div>
//         {isMenuOpen && (
//           <div className="block md:hidden py-4 bg-yelllow-200 text-center border-b lg:mt-28 ">
//             <Link to="/" className="block text-black mt-2">
//               Home
//             </Link>
//             <Link to="/main" className="block text-black mt-2">
//               Men
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Women
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Kids
//             </Link>
//           </div>
//         )}
//         {isOfferHovered && (
//           <div
//             ref={isOfferHoveredRef}
//             className="absolute left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-md shadow-md z-20 flex"
//             style={{ top: "100%" }}
//             onMouseEnter={handleDropdownMouseEnter}
//             onMouseLeave={handleDropdownMouseLeave}
//           >
//             {/* Add your dropdown menu content here */}
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import redesign from "../../Assets/redesign.png";
// import axios from "axios";
// import UserProfile from "../UserProfile/UserProfile";
// import Swal from "sweetalert2";

// const Navbar = ({ alphaUser, setAlphaUser, wishlistLength }) => {
//   const navigate = useNavigate();
//   const [productLength, setProductLength] = useState(null);
//   const logoutUser = () => {
//     setAlphaUser(false);
//     localStorage.removeItem("token");
//     localStorage.removeItem("profile");
//     navigate("/");
//   };

//   const getUserDetails = async () => {
//     //
//     try {
//       const response = await axios.get("http://localhost:9090/api/user/");
//       const data = response.data;
//       const number = localStorage.getItem("auth_no");
//       //console.log(data)
//       if (number === data.mobileNo) {
//         //console.log(response.data.number);
//       }
//       //console.log(data.email);
//     } catch (error) {
//       //console.error('API Error:', error);
//     }
//   };

//   const quantity = useSelector((state) => state.cart.quantity);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isOfferHovered, setIsOfferHovered] = useState(false);

//   // const { wishlist } = useContext(UserContext);
//   const inputRef = useRef(null);
//   useEffect(() => {
//     getUserDetails();
//     const handleOutsideClick = (event) => {
//       if (
//         suggestions.length > 0 &&
//         isOfferHoveredRef.current &&
//         !isOfferHoveredRef.current.contains(event.target) &&
//         !inputRef.current.contains(event.target)
//       ) {
//         // Hide suggestions if clicked outside the suggestions container or the input
//         setSuggestions([]);
//       }
//     };
//     document.addEventListener("click", handleOutsideClick);
//     return () => {
//       // Remove the event listener when the component unmounts
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [suggestions]);
//   const handleSearchInputChange = (event) => {
//     const value = event.target.value;
//     setSearchQuery(value);
//     // Your product categories
//     const productCategories = [
//       "casual shirt",
//       "formal shirt",
//       "party wear shirt",
//       "t-shirt",
//       "shirt",
//       "plain shirt",
//       "checks shirt",
//     ];
//     // Filter product categories based on the input value
//     const filteredSuggestions = productCategories.filter((category) =>
//       category.toLowerCase().includes(value.toLowerCase())
//     );
//     // Update the suggestions
//     setSuggestions(filteredSuggestions);
//   };

//   const handleSearchButtonClick = () => {
//     if (searchQuery.trim() === "") {
//       // Display a sweet alert for an empty search query
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please enter a search term!",
//       });
//       return;
//     }

//     if (suggestions.length > 0) {
//       navigate(`/${suggestions[0].replace(" ", "-")}`);
//     } else {
//       navigate("/coming-soon");
//     }
//   };

//   const handleDropdownMouseEnter = () => {
//     setIsOfferHovered(true);
//   };
//   const handleDropdownMouseLeave = (e) => {
//     if (
//       !e.relatedTarget ||
//       !e.relatedTarget.contains(isOfferHoveredRef.current)
//     ) {
//       setIsOfferHovered(false);
//     }
//   };
//   const isOfferHoveredRef = useRef(null);

//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         // Replace 'YOUR_TOKEN_HERE' with the actual JWT token
//         const token =
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWY0ZmMzM2E1YWY5ZjkzZTY1YjFmZiIsImlhdCI6MTcwNzIxNjg1MywiZXhwIjoxNzA3MzAzMjUzfQ.0JzYOYcTHoHeHhzI6jf0Lu1R3fKtctmP-UVDy-FpF8Y";
//         const response = await fetch("http://localhost:9000/api/user/cart", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch cart data");
//         }

//         const data = await response.json();
//         // Access the 'products' array inside the response object and get its length
//         const productsLength = data[0].products.length;

//         setProductLength(productsLength);
//       } catch (error) {
//         console.error("Error fetching cart data:", error.message);
//       }
//     };

//     fetchCartData();
//   }); // Empty dependency array to run the effect only once on component mount
//   return (
//     <div className="fixed top-0 bg-white left-0 w-full z-[99999] mb-[30%]">
//       <header className="pt-3 ">
//         <div className="flex items-center justify-between w-full fixed top-0 left-0 px-20 pt-4 z-[99999] bg-white">
//           <div
//             className="block md:hidden cursor-pointer text-3xl"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </div>
//           <Link to="/" className="md:w-1/4 hidden md:block">
//             <img
//               src={redesign}
//               alt="Logo"
//               className="w-[12rem] object-contain"
//             />
//           </Link>
//           <div className="hidden md:flex items-center bg-white space-x-4 relative md:w-[40%] ">
//             <div className="relative w-full ">
//               <div
//                 className="bg-gray-100  rounded-md border border-black w-full flex items-center md:ml-[3.5rem]"
//                 ref={inputRef}
//               >
//                 <input
//                   type="text"
//                   placeholder="Search Products"
//                   value={searchQuery}
//                   onChange={handleSearchInputChange}
//                   className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//                 />
//                 <button
//                   onClick={handleSearchButtonClick}
//                   className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//                 >
//                   <FaSearch />
//                 </button>
//               </div>
//               {suggestions.length > 0 && (
//                 <div
//                   ref={isOfferHoveredRef}
//                   className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full border z-50  border-gray-300 rounded-md shadow-md overflow-hidden bg-white md:ml-[3.5rem]"
//                 >
//                   <ul>
//                     {suggestions.map((item, index) => (
//                       <li
//                         key={index}
//                         className="py-2 px-4 cursor-pointer hover:bg-gray-200"
//                         onClick={() => navigate(`/${item.replace(" ", "-")}`)}
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center space-x-8  ml-auto">
//             {alphaUser ? (
//               <UserProfile
//                 logoutUser={logoutUser}
//                 setAlphaUser={setAlphaUser}
//               />
//             ) : (
//               <div className="text-black flex flex-col items-center">
//                 <Link
//                   to="/login-form"
//                   className="flex flex-col items-center gap-1"
//                 >
//                   <button className="flex gap-2 ml-1 items-center">
//                     <FaRegUser size={20} />
//                   </button>
//                   <span className="text-xs">Login</span>
//                 </Link>
//               </div>
//             )}

//             <div className="text-black flex flex-col items-center">
//               <Link
//                 to="/favourite-list"
//                 className="flex flex-col items-center gap-1"
//               >
//                 <button className="flex items-center gap-2">
//                   <FaRegHeart size={20} />
//                   {/* {wishlistLength > 0 ? (
//         <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
//           {wishlistLength}
//         </p>
//       ) : null} */}
//                 </button>
//                 <span className="text-xs">Saved</span>
//               </Link>
//             </div>

//             <div className="text-black cursor-pointer flex flex-col items-center">
//               <Link to="/product-cart">
//                 <button className="flex items-center gap-2">
//                   <AiOutlineShoppingCart size={20} />
//                   {productLength !== null && (
//                     <p className="flex text-sm items-center justify-center p-1 bg-orange-400 rounded-full h-6 w-6">
//                       {productLength}
//                     </p>
//                   )}
//                 </button>
//                 <span className="text-xs">Cart</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="md:hidden mt-20 px-2 lg:mt-8">
//           <div className="bg-gray-100 rounded-md border border-black w-full flex items-center">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//               className="bg-transparent text-black px-4 py-2 rounded-l-md focus:outline-none w-full"
//             />
//             <button
//               onClick={handleSearchButtonClick}
//               className="bg-gray-100 text-black px-6 py-2 rounded-r-md"
//             >
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center mt-16 uppercase ml-auto border-b-2 pb-[18px] bg-white w-full">
//           <Link to="/" className="font-bold mx-2 cursor-pointer">
//             Home
//           </Link>
//           <Link to="/main" className="font-bold mx-2 cursor-pointer">
//             Men
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Women
//           </Link>
//           <Link to="/comming-soon" className="font-bold mx-2 cursor-pointer">
//             Kids
//           </Link>
//         </div>
//         {isMenuOpen && (
//           <div className="block md:hidden py-4 bg-yelllow-200 text-center border-b lg:mt-28 ">
//             <Link to="/" className="block text-black mt-2">
//               Home
//             </Link>
//             <Link to="/main" className="block text-black mt-2">
//               Men
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Women
//             </Link>
//             <Link to="/comming-soon" className="block text-black mt-2">
//               Kids
//             </Link>
//           </div>
//         )}
//         {isOfferHovered && (
//           <div
//             ref={isOfferHoveredRef}
//             className="absolute left-1/2 transform -translate-x-1/2 bg-white p-4 border rounded-md shadow-md z-20 flex"
//             style={{ top: "100%" }}
//             onMouseEnter={handleDropdownMouseEnter}
//             onMouseLeave={handleDropdownMouseLeave}
//           >
//             {/* Add your dropdown menu content here */}
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };
// export default Navbar;
