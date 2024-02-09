import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Navbar from "../HomeComponent/Navbar";
import Footer from "../HomeComponent/Footer";
import Services from "../HomeComponent/Services";
import { Link } from "react-router-dom";

function FavouriteList({ alphaUser, setAlphaUser }) {
  const [userWishlist, setUserWishlist] = useState([]);
  const [wishlistLength, setWishlistLength] = useState(0);
  const accessToken = localStorage.getItem("token");

  const fetchUserWishlist = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/wishlist`,

        axiosConfig
      );
      setUserWishlist(response.data.wishlist);
      setWishlistLength(response.data.wishlist.length);
    } catch (error) {
      //console.error("Error fetching wishlist:", error);
    }
  };

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);

    fetchUserWishlist();
  }, []);
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const handleClick = (productId) => {};

  const removeFromWishlist = (productId) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/product/wishlist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        fetchUserWishlist();

        Swal.fire({
          icon: "success",
          title: "Product Removed from Wishlist!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.error("Error:", error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  };

  return (
    <>
      <div className="p-4 md:px-[150px] ">
        <Navbar
          alphaUser={alphaUser}
          setAlphaUser={setAlphaUser}
          wishlistLength={wishlistLength}
        />

        <div className="bg-white mt-[8rem] mb-[5rem]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Your Wishlist
            </h2>

            {userWishlist.length === 0 ? (
              <p className="text-center text-xl text-gray-700">
                No products found.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {userWishlist.map((product) => (
                  <Link to={`/product-details/${product._id}`}>
                    <div
                      key={product._id}
                      className="group block relative"
                      onClick={() => handleClick(product._id)}
                    >
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                        <img
                          src={product.productImage[0].url}
                          className="w-full h-80 object-cover object-center group-hover:opacity-75"
                          alt={product.productName}
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {product.productName}
                          </h3>
                          <p className="text-gray-700">
                            {product.productDescription}
                          </p>
                          <button
                            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                            onClick={() => removeFromWishlist(product._id)}
                          >
                            Remove
                          </button>
                          <p className="mt-2 text-lg font-semibold text-gray-900">
                            {"\u20B9"} {product.productDiscountedPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FavouriteList;
