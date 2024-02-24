import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../HomeComponent/Footer";
import Services from "../HomeComponent/Services";
import Navbar from "../HomeComponent/Navbar";

const TshirtAll = ({ alphaUser, setAlphaUser }) => {
  const [apiProducts, setApiProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get( `${process.env.REACT_APP_API_URL}/api/product`);
        setApiProducts(res.data);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  // Use an object to store favorite states for each item
  const [favoriteStates, setFavoriteStates] = useState({});

  const favCall = (itemId) => {
    // Clone the current state
    const newFavoriteStates = { ...favoriteStates };

    // Toggle the favorite state for the specific item
    newFavoriteStates[itemId] = !newFavoriteStates[itemId];

    // Update the state
    setFavoriteStates(newFavoriteStates);

    // Show success message based on the state of the specific item
    newFavoriteStates[itemId]
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
          title: "Wishlist item removed successfully",
          showConfirmButton: false,
          timer: 1500,
        });
  };

  // Filter products based on category (e.g., 'casual')
  const filteredProducts = apiProducts.filter(
    (product) => product.categories === "t-shirt"
  );

  return (
    <>
      <div className=" p-4 md:px-[150px] ">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 md:mb-[5rem] mt-[8rem] py-6 sm:px-6 sm:py-24 md:py-5 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-bold mb-6 text-center">T-Shirt</h1>

            {loading && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-700"></div>
              </div>
            )}

            {!loading && filteredProducts.length === 0 && (
              <p className="text-center text-gray-700">
                No t-shirts available at the moment.
              </p>
            )}

            {!loading && filteredProducts.length > 0 && (
              <>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {filteredProducts.map((item) => (
                    <div key={item._id} className="group relative">
                      <div className="relative" style={{ height: "300px" }}>
                        <Link to={`/product-details/${item._id}`}>
                          <img
                            src={item.img[0]}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            alt={item.productName}
                          />
                        </Link>
                        <button
                          onClick={() => favCall(item._id)}
                          className="absolute top-2 right-2 bg-[#eee9e9] shadow-2xl rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {favoriteStates[item._id] ? (
                            <FaRegHeart className="text-red-600 size-23 hover:text-red-600" />
                          ) : (
                            <FaRegHeart className="text-black size-23 hover:text-red-600" />
                          )}
                        </button>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-900 font-bold">
                            {item.desc}
                          </h3>
                          <ReactStars
                            edit={false}
                            count={5}
                            value={item.rating}
                            size={24}
                            color2={"#ffd700"}
                          />
                          <p className="text-sm font-medium text-gray-900 mt-2">
                            <strike className="mr-5">
                              &#8377; {item.price}
                            </strike>
                            <span className="text-lg">
                              &#8377; {item.discountedPrice}
                            </span>
                          </p>
                        </div>
                        <div
                          className="w-10 h-10 rounded-md flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link to="/all-products" className="text-blue-600 underline">
                    Browse All Products
                  </Link>
                </div>
              </>
            )}
          </div>
          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TshirtAll;
