import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router-dom";
import ShopNowMain from "../AllProduct/ShopNowMain";
import UserContext from "../../context/ProductContext";
import Header from "../HomeComponent/Navbar";
import Services from "../HomeComponent/Services";
import Footer from "../HomeComponent/Footer";
import ImageModal from "./ImageModal";
import { MdSell } from "react-icons/md";
import { BiShareAlt } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { GiTruck } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { CgArrowRightR } from "react-icons/cg";
import { FaCheckCircle, FaStoreAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import { addProduct } from "../../Redux/CartRedux";
import { useDispatch } from "react-redux";
import SimilarProduct from "../AllProduct/SimilarProduct";
import Navbar from "../HomeComponent/Navbar";

const ProductDetails = ({ alphaUser, setAlphaUser }) => {
  const MySwal = withReactContent(Swal);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [apiProduct, setApiProduct] = useState([]);
  
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
        const res = await axios.get(  `${process.env.REACT_APP_API_URL}/api/product/${_id}`);
                 // console.log(res.data)
        setApiProduct(res.data);
      } catch (error) {
        // console.log(error)
      }
    };

    fetchData();
  }, [_id]);

  const [currentImg, setCurrentImg] = useState("");

  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (
      apiProduct.productImage &&
      Array.isArray(apiProduct.productImage) &&
      apiProduct.productImage.length > 0
    ) {
      setCurrentImg(apiProduct.productImage[0].url); // Set the URL of the first image
    }
  }, [apiProduct]);

  const [currentArray, setCurrentArray] = useState(apiProduct.img);
  const [favorites, setFavorites] = useState(false);

  const { setData, data, wishlist, setWishList } = useContext(UserContext);

  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showAdditionalOffer, setShowAdditionalOffer] = useState(false);
  const [showPinCode, setShowPinCode] = useState(false);

  const toggleAdditionalOffer = () => {
    setShowAdditionalOffer(!showAdditionalOffer);
  };

  const togglePinCode = () => {
    setShowPinCode(!showPinCode);
  };

  const toggleProductDetails = () => {
    setShowProductDetails(!showProductDetails);
  };
  const handleSubmit = () => {
    let localObj = [];
    let addLocal = localStorage.getItem("cartItem");
    if (addLocal == null) {
      localObj = [];
    } else {
      localObj = JSON.parse(addLocal);
    }
    localObj.push(apiProduct);
    localStorage.setItem("cartItem", JSON.stringify(localObj));

    // console.log(addLocal);
  };

  const wishlistApiURL = `${process.env.REACT_APP_API_URL}/api/product/wishlist`
     const sendWishlistData = async () => {
    try {
      const response = await axios.put(
        wishlistApiURL,
        { prodId: _id },
        axiosConfig
      );
      // console.log('Response:', response.data);
    } catch (error) {
      if (error.response) {
        // console.error('Error Status:', error.response.status);
        // console.error('Error Data:', error.response.data);
      } else if (error.request) {
        // console.error('No response received:', error.request);
      } else {
        //  console.error('Error:', error.message);
      }
    }
  };

  const favCall = () => {
    setFavorites(!favorites);
    sendWishlistData();

    // main logic
    let allFavProduct = [];

    let favItem = localStorage.getItem("favItem");
    if (favItem == null) {
      allFavProduct = [];
    } else {
      allFavProduct = JSON.parse(favItem);
    }
    allFavProduct.push(apiProduct);
    localStorage.setItem("favItem", JSON.stringify(allFavProduct));

    // console.log(allFavProduct);

    !favorites
      ? Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added to your Saved Items",
          showConfirmButton: false,
          timer: 1500,
        })
      : Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Wishlist item remove Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    // console.log('Selected Size:', size);
  };

  // add to wishlist data fr partoculara iser

  const apiUrl = `${process.env.REACT_APP_API_URL}/api/user/cart`;
  const fetchData = async () => {
    try {
      const response = await axios.post(
        apiUrl,
        {
          cart: [
            {
              _id: _id,
              count: 1,
              color: "r5ed",
            },
          ],
        },
        axiosConfig,
      );
      // console.log('Response:', response.data);
    } catch (error) {
      if (error.response) {
        // console.error('Error Status:', error.response.status);
        // console.error('Error Data:', error.response.data);
      } else if (error.request) {
        // console.error('No response received:', error.request);
      } else {
        //  console.error('Error:', error.message);
      }
    }
  };

  const addToCart = () => {
    dispatch(
      addProduct({
        product: { ...apiProduct },
        id: apiProduct._id,
        price: apiProduct.productPrice,
        quantity: apiProduct.quantity,
        selectedSize: selectedSize,
      })
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Item added to your bag!",
      showConfirmButton: false,
      timer: 1500,
    });

    fetchData();
  };

  return (
    <>
      <div className="p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />

        <main className="px-4 lg:px-16 my-8 flex flex-col lg:flex-row gap-8 mt-[8rem]">
          <section className="flex flex-col-reverse lg:flex-row gap-5 lg:w-[50%]">
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-scroll lg:overflow-auto">
              {apiProduct.productImage &&
              Array.isArray(apiProduct.productImage) &&
              apiProduct.productImage.length > 0 ? (
                apiProduct.productImage.map((productImage, i) => (
                  <img
                    key={i}
                    onClick={() => setCurrentImg(productImage.url)} // Set the URL of the clicked image
                    className={`hover:opacity-60 cursor-pointer w-[70px] lg:w-[100px] ${
                      currentImg === productImage.url
                        ? "border border-blue-500"
                        : ""
                    }`}
                    src={productImage.url}
                    alt={`Product Image ${i + 1}`}
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="lg:w-full">
              {currentImg ? (
                <img
                  className="w-full"
                  src={currentImg}
                  alt="Selected Product Image"
                />
              ) : (
                <p>No image selected</p>
              )}

              {/* {apiProduct.img.map((img, i) => (
                <img
                  key={i}
                  onClick={() => setCurrentImg(img)}
                  className='hover:opacity-60 cursor-pointer w-[70px] lg:w-[100px]'
                  src={img}
                  alt={`Product Image ${i + 1}`}
                />
              ))}
            </div>
            <div className='lg:w-full'>
              {currentImg ? (
                <img className='w-full' src={currentImg} alt='Selected Product Image' />
              ) : (
                <p>No image selected</p>
              )} */}
            </div>
          </section>

          <section className="lg:ml-10 px-3 lg:px-0 flex flex-col lg:w-[50%]">
            <div className="flex gap-8 items-center ">
              <div>
                <h1 className="text-2xl lg:text-3xl">
                  {apiProduct.productName}
                </h1>
                <p className="text-gray-600 flex">
                  {apiProduct.productDescription}
                </p>
              </div>
              <button
                onClick={sendWishlistData}
                className="bg-[#eee9e9] shadow-2xl rounded-full  p-3"
              >
                {favorites ? (
                  <FaRegHeart
                    className={`text-red-600 hover:skew-x-3' size={23}`}
                  />
                ) : (
                  <FaRegHeart
                    className={`text-black hover:text-red-600 hover:skew-x-3' size={23}`}
                  />
                )}
              </button>
            </div>

            <div className="my-5">
              <div className="flex items-center gap-4">
                <h2 className="flex items-center font-bold text-xl lg:text-2xl text-red-500">
                  <MdOutlineCurrencyRupee /> {apiProduct.productDiscountedPrice}
                </h2>
                <span className="font-bold text-gray-500 md:mr-[-12px] mr-0">
                  MRP
                </span>
                <strike className="flex items-center  text-gray-500">
                  <MdOutlineCurrencyRupee /> {apiProduct.productPrice}
                </strike>
                <span className="text-orange-500 font-bold text-xl">
                  30% OFF
                </span>
              </div>
              <h2 className="text-md text-gray-500">Includes all taxes</h2>
            </div>

            <div >
              <div className="flex items-center gap-4">
                <h1 className="uppercase font-bold lg:text-xl">colour :</h1>
                <h3 className="flex items-center font-semibold">
                  {apiProduct.fabricColor}
                </h3>
              </div>
              <h2 className="text-md text-gray-500">
                14 days easy return and exchange applicable for this item
              </h2>
              <h2 className="text-md mt-2 text-gray-900 font-bold">
                {apiProduct.size}
              </h2>
              <p className="text-lg mt-2 font-bold text-black">
                Size ( 5+ Available )
              </p>
            </div>

            <button
              onClick={handleOpenModal}
              className="px-6 w-full mt-2 text-black hover:bg-[#C9AB52] duration-300 font-bold py-2 rounded-md bg-gray-300 "
            >
              Size Chart
            </button>

            {/* props  */}
            <ImageModal isOpen={isModalOpen} onClose={handleCloseModal} />

            <div className="flex flex-col lg:flex-row gap-5 items-center my-3">
              <h1 className="text-red-700 font-bold text-2xl mr-2 border px-3 py-1 uppercase">
                Size
              </h1>
              <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-scroll lg:overflow-auto font-semibold">
                <p
                  className={`text-sm px-3 py-2 ${
                    selectedSize === "Large"
                      ? "text-white bg-gradient-to-r from-black via-yellow-500 to-black"
                      : "text-black"
                  } shadow-2xl border border-black rounded-2xl cursor-pointer transition-all duration-300`}
                  onClick={() => handleSizeClick("Large")}
                >
                  Large
                </p>
                <p
                  className={`text-sm px-3 py-2 ${
                    selectedSize === "Medium"
                      ? "text-white bg-gradient-to-r from-black via-yellow-500 to-black"
                      : "text-black"
                  } shadow-2xl border border-black rounded-2xl cursor-pointer transition-all duration-300`}
                  onClick={() => handleSizeClick("Medium")}
                >
                  Medium
                </p>
                <p
                  className={`text-sm px-3 py-2 ${
                    selectedSize === "Small"
                      ? "text-white bg-gradient-to-r from-black via-yellow-500 to-black"
                      : "text-black"
                  } shadow-2xl border border-black rounded-2xl cursor-pointer transition-all duration-300`}
                  onClick={() => handleSizeClick("Small")}
                >
                  Small
                </p>
                <p
                  className={`text-sm px-3 py-2 ${
                    selectedSize === "X-Large"
                      ? "text-white bg-gradient-to-r from-black via-yellow-500 to-black"
                      : "text-black"
                  } shadow-2xl border border-black rounded-2xl cursor-pointer transition-all duration-300`}
                  onClick={() => handleSizeClick("X-Large")}
                >
                  X-Large
                </p>
                <p
                  className={`text-sm px-3 py-2 ${
                    selectedSize === "XX-Large"
                      ? "text-white bg-gradient-to-r from-black via-yellow-500 to-black"
                      : "text-black"
                  } shadow-2xl border border-black rounded-2xl cursor-pointer transition-all duration-300`}
                  onClick={() => handleSizeClick("XX-Large")}
                >
                  XX-Large
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col md:mt-2 mb-3">
              <div className="w-full flex items-center gap-4">
                {/* <button onClick={favCall} className='bg-[#eee9e9] shadow-2xl rounded-full p-3'>
                  {favorites ? (
                    <FaRegHeart className={`text-red-600 hover:skew-x-3' size={23}`} />
                  ) : (
                    <FaRegHeart className={`text-black hover:text-red-600 hover:skew-x-3' size={23}`} />
                  )}
                </button> */}
                <button
                  className="bg-[#eee9e9] shadow-2xl rounded-full p-3 ml-2 mb-5"
                  onClick={() => {
                    // Handle your share logic here
                    // For example, you can use the Web Share API
                    if (navigator.share) {
                      navigator.share({
                        title: "Your Product Title",
                        text: "Check out this amazing product!",
                        url: "https://your-product-url.com",
                      });
                      // .then(() => console.log('Shared successfully'))
                      // .catch((error) => console.error('Error sharing:', error));
                    } else {
                      // Fallback for browsers that do not support Web Share API
                      // console.log('Web Share API not supported');
                    }
                  }}
                >
                  <BiShareAlt className="text-black hover:text-blue-500 size={23}" />
                </button>
              </div>
              <div className="w-full flex items-center gap-2">
                <button
                  onClick={addToCart}
                  className="w-full uppercase flex items-center gap-2 justify-center text-xl font-bold py-3 bg-gradient-to-r from-black via-yellow-500 to-black hover:from-black hover:via-yellow-500 hover:to-black duration-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300 transition-all text-white transform hover:scale-105"
                >
                  <MdSell /> Add to Bag
                </button>
                <div className="relative inline-flex items-center  mt-5"></div>
              </div>
            </div>

            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
              <div className="mb-4 border ">
                <h2 className="text-xl font-semibold mr-5 flex items-center">
                  <BiSolidOffer className="h-8 w-9 mt-2 mr-2 text-[#FF6B35]" />2
                  Offers
                </h2>

                <div className="p-4 mb-4">
                  <h2 className="text-lg font-bold mb-2 text-[#FF6B35]">
                    FLAT 30% OFF
                  </h2>
                  <p>Get a flat 30% discount on this product.</p>
                </div>

                <hr className="mx-6" />
                <button
                  onClick={toggleAdditionalOffer}
                  className="text-black font-bold p-2 underline focus:outline-none"
                >
                  <span className="">
                    {" "}
                    {showAdditionalOffer ? "Show Less" : "+ 1 More"}
                  </span>
                </button>
              </div>

              {showAdditionalOffer && (
                <div className="border p-4">
                  <h2 className="text-lg font-bold mb-2 text-[#FF6B35]">
                    FLAT 20% OFF
                  </h2>
                  <p>
                    Exclusive offer! Enjoy a flat 20% discount for a limited
                    time.
                  </p>
                </div>
              )}

              <div>
                <div className="max-w-md mx-auto p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold">Product Details</h2>
                    <button onClick={toggleProductDetails}>
                      <IoIosArrowDropdown
                        className={`text-gray-500 hover:text-gray-700 cursor-pointer transform ${
                          showProductDetails ? "rotate-180" : "rotate-0"
                        } transition-transform duration-300 text-2xl`}
                      />
                    </button>
                  </div>

                  {showProductDetails && (
                    <div className="ml-8">
                      <table className="table-auto w-full">
                        <tbody>
                          <tbody>
                            <tr>
                              <td className="font-semibold pr-4">
                                Country of Origin:
                              </td>
                              <td>{apiProduct.countryOfOrigin}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Fabric:</td>
                              <td>{apiProduct.fabricType}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Sleeves:</td>
                              <td>{apiProduct.sleeves}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Occasion:</td>
                              <td>{apiProduct.occasion}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Fit:</td>
                              <td>{apiProduct.fit}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Neckline:</td>
                              <td>{apiProduct.fit}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Pattern:</td>
                              <td>{apiProduct.neckline}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Collar:</td>
                              <td>{apiProduct.collar}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">Pack Of:</td>
                              <td>{apiProduct.packOf}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">
                                Product Type:
                              </td>
                              <td>{apiProduct.productType}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">
                                Knit/Woven:
                              </td>
                              <td>{apiProduct.knitWoven}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">
                                Care Instructions:
                              </td>
                              <td>{apiProduct.careInstruction}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold pr-4">
                                Product code:
                              </td>
                              <td>{apiProduct.productCode}</td>
                            </tr>
                          </tbody>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
              {/* ... (Your existing code) */}

              <div className="max-w-md mx-auto p-4 border">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Delivery Services</h2>
                  <button onClick={togglePinCode}>
                    <IoIosArrowDropdown
                      className={`text-gray-500 hover:text-gray-700 cursor-pointer transform ${
                        showPinCode ? "rotate-180" : "rotate-0"
                      } transition-transform duration-300 text-2xl`}
                    />
                  </button>
                </div>

                {showPinCode && (
                  <div className="ml-8">
                    <div className="items-center mb-4">
                      <p className="mr-2 text-gray-500 text-md mb-2">
                        View available services for your pincode
                      </p>
                      <div className="items-center">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter pincode"
                          className="border p-2 mr-1"
                        />
                        <button className="bg-black text-white px-4 py-2 rounded mt-2">
                          Check
                        </button>
                      </div>
                    </div>

                    <ul className="list-disc pl-4">
                      <span className="mb-2 font-bold text-lg flex items-center ml-1  md:ml-[-52px]">
                        <GiTruck className="inline-block mr-2 text-2xl" />
                        Standard Delivery
                      </span>
                      <li className="mb-2">COD may be available*</li>
                      <li className="mb-2">
                        Free shipping on orders above 1500
                      </li>

                      <span className="mb-2 font-bold text-lg flex items-center ml-1 md:ml-[-52px]">
                        <FaTruckFast className="inline-block mr-2 text-2xl" />
                        Express Delivery available
                      </span>
                      <li className="mb-2">
                        Please enter a pincode to check availability of express
                        delivery at your location
                      </li>

                      <span className="mb-2 font-bold text-lg flex items-center  ml-1 md:ml-[-52px]">
                        <FaShoppingBag className="inline-block mr-2 text-2xl" />
                        Express Store Pickup available
                      </span>
                      <li className="mb-2">
                        Please select size to see availability of this product
                        at your nearest store
                      </li>

                      <span className="mb-2 font-bold text-2lg flex items-center ml-1 md:ml-[-52px]">
                        <CgArrowRightR className="inline-block mr-2 text-2xl" />
                        14 days easy return and exchange applicable for this
                        item
                      </span>
                      <li className="mb-2">
                        If you are not completely satisfied with your purchase,
                        you can return most items to us within 14 days of
                        delivery to get a 100% refund. We offer free and easy
                        returns through courier pickup, or you can exchange most
                        items bought online at any of our stores across India.
                        All items to be returned or exchanged must be
                        unused/untampered and in their original condition with
                        original tags and packaging intact (eg. For shoes,
                        please return the shoes in original shoes box
                        packaging).
                      </li>
                    </ul>

                    <p className="mt-4">Read Our Return and Exchange Policy</p>
                  </div>
                )}
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mt-4 mx-4 flex-1 ">
                  <FaCheckCircle className="text-green-500 text-3xl mb-2" />
                  <p className="text-center">Authentic Product</p>
                </div>

                <div className="flex flex-col items-center mt-4 mx-4 flex-1">
                  <FaStoreAlt className="text-blue-500 text-3xl mb-2" />
                  <p className="text-center">Express Store Pickup</p>
                </div>

                <div className="flex flex-col items-center mt-4 mx-4  flex-1">
                  <FaLock className="text-purple-500 text-3xl mb-2" />
                  <p className="text-center">Secure Payment</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <h1 className="text-4xl font-bold text-center mb-2">
          Similar Products
        </h1>
        <SimilarProduct />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
