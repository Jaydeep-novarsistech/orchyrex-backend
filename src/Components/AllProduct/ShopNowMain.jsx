import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
// import { useDispatch } from 'react-redux';

const MySwal = withReactContent(Swal);

const ShopNowMain = () => {
  const [apiProduct, setApiProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    color: null,
    size: null,
    amount: null,
  });
  const [loading, setLoading] = useState(true);
  // const { _id } = useParams();
  // const dispatch = useDispatch();

  const accessToken = localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const wishlistApiURL =
  `${process.env.REACT_APP_API_URL}/api/product/wishlist`
 

  const [wishlistStatus, setWishlistStatus] = useState(() => {
    const storedWishlistStatus = localStorage.getItem("wishlistStatus");
    return storedWishlistStatus ? JSON.parse(storedWishlistStatus) : {};
  });

  const fetchWishlistStatus = async () => {
    try {
      const response = await axios.get(wishlistApiURL, axiosConfig);
      const wishlistData = {};
      response.data.forEach((item) => {
        wishlistData[item.prodId] = true;
      });
      setWishlistStatus(wishlistData);
    } catch (error) {
      // console.error("Error fetching wishlist data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get( `${process.env.REACT_APP_API_URL}/api/product`);
        setApiProduct(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        // console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchWishlistStatus();
  }, [wishlistApiURL, accessToken]);

  const sendWishlistData = async (itemId) => {
    try {
      const response = await axios.put(
        wishlistApiURL,
        { prodId: itemId },
        axiosConfig
      );

      setWishlistStatus((prevStatus) => ({
        ...prevStatus,
        [itemId]: !prevStatus[itemId],
      }));

      MySwal.fire({
        icon: "success",
        title: wishlistStatus[itemId]
          ? "Removed from Wishlist!"
          : "Added to Wishlist!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      // console.error("Error updating wishlist data:", error);

      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("wishlistStatus", JSON.stringify(wishlistStatus));
  }, [wishlistStatus]);

  const filterProducts = () => {
    let filtered = [...apiProduct];

    if (filterOptions.color) {
      filtered = filtered.filter(
        (item) => item.fabricColor === filterOptions.color
      );
    }

    if (filterOptions.size) {
      filtered = filtered.filter(
        (item) =>
          item.size &&
          item.size.toLowerCase() === filterOptions.size.toLowerCase()
      );
    }

    if (filterOptions.amount) {
      filtered = filtered.filter(
        (item) => item.productDiscountedPrice <= filterOptions.amount
      );
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (optionType, value) => {
    setFilterOptions({ ...filterOptions, [optionType]: value });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <div
        className="container mx-auto px-4 md:mb-20 py-6 sm:px-6 sm:py-24 md:py-5 lg:max-w-7xl lg:px-8 mt-[8rem]"
        onClick={scrollToTop}
      >
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <label
              htmlFor="colorFilter"
              className="mr-2 text-gray-700 font-medium"
            >
              Color:
            </label>
            <select
              id="colorFilter"
              onChange={(e) => handleFilterChange("color", e.target.value)}
              value={filterOptions.color || ""}
              className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          </div>

          <div className="flex items-center mb-4 sm:mb-0">
            <label
              htmlFor="sizeFilter"
              className="mr-2 text-gray-700 font-medium"
            >
              Size:
            </label>
            <select
              id="sizeFilter"
              onChange={(e) => handleFilterChange("size", e.target.value)}
              value={filterOptions.size || ""}
              className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">All</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>
          </div>

          <div className="flex items-center mb-4 sm:mb-0">
            <label
              htmlFor="amountFilter"
              className="mr-2 text-gray-700 font-medium"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amountFilter"
              onChange={(e) => handleFilterChange("amount", e.target.value)}
              value={filterOptions.amount || ""}
              className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            onClick={filterProducts}
            className="py-2 px-4 text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-blue-500 bg-gradient-to-br from-red-500 to-yellow-500 group-hover:from-yellow-500 group-hover:to-yellow-500 focus:ring-4 focus:ring-cyan-200 duration-300 font-semibold rounded-md focus:outline-none hover:bg-yellow-600"
          >
            Apply Filters
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full">
                <p className="text-center text-2xl font-bold">
                  No products found.
                </p>
              </div>
            ) : (
              filteredProducts.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-4 rounded-md shadow-md transition duration-300 transform hover:shadow-xl mb-6"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Link to={`/product-details/${item._id}`}>
                      {item.productImage && item.productImage.length > 0 && (
                        <img
                          src={item.productImage[0].url}
                          className="w-full h-full object-cover object-center"
                          alt={item.productName}
                        />
                      )}
                    </Link>
                    <button
                      onClick={() => sendWishlistData(item._id)}
                      className="absolute top-2 right-2 bg-gray-200 shadow-md rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FaRegHeart
                        style={{
                          color: wishlistStatus[item._id] ? "red" : "black",
                        }}
                        className="size-5"
                      />
                    </button>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-900 font-bold">
                        {item.productDescription}
                      </h3>
                      {/* <ReactStars
                        edit={false}
                        count={5}
                        value={item.productRating}
                        size={16}
                        color2={"#ffd700"}
                      /> */}
                      <p className="text-sm font-medium text-gray-900 mt-2">
                        <strike className="mr-5">
                          &#8377; {item.productPrice}
                        </strike>
                        <span className="text-lg">
                          &#8377; {item.productDiscountedPrice}
                        </span>
                      </p>
                    </div>

                    <div className="">
                      <div
                        className={`w-8 h-8 rounded-md flex-shrink-0`}
                        style={{ backgroundColor: item.fabricColor }}
                      ></div>
                      <p className="mr-1 w-8 h-8 border-2 rounded-md flex-shrink-0 flex mt-2 font-bold justify-center">
                        {item.size ? item.size.charAt(0) : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopNowMain;
