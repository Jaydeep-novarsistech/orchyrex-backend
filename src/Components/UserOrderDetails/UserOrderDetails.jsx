import React, { useEffect, useState } from "react";
import Footer from "../HomeComponent/Footer";
import Services from "../HomeComponent/Services";
import Navbar from "../HomeComponent/Navbar";

const UserOrderDetails = ({ alphaUser, setAlphaUser }) => {
  const [orderData, setOrderData] = useState(null);
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/user/getallorders`;

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setOrderData(data);
        } else {
          // Handle fetch failure
        }
      } catch (error) {
        // Handle API request error
      }
    };

    fetchOrderData();
  }, [accessToken]);

  return (
    <>
      <div className="p-4 md:px-[150px]">
        <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
        <div className="mt-[7rem]">
          <div className="py-10 px-4 md:px-6 min-h-screen">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-3xl font-semibold leading-7 text-gray-800 mb-6">
                Order Details
              </h2>
              {orderData ? (
                orderData.map((order) => (
                  <div key={order._id}>
                    <div className="flex flex-col space-y-4 mb-10">
                      <div className="text-2xl font-semibold leading-7 text-gray-800">
                        OrderID : {order._id}
                      </div>
                      <p className="text-base font-medium leading-6 text-gray-800">
                        Order Date : {order.createdAt}
                      </p>
                      <p className="text-base font-medium leading-6 text-gray-800">
                        Payment Status : {order.orderStatus}
                      </p>
                    </div>
                    {order.products.map((product) => (
                      <div
                        key={product._id}
                        className="mb-8 flex items-start space-x-4"
                      >
                        <img
                          className="w-16 h-16 object-cover rounded"
                          src={product.product.productImage[0].url}
                          alt={product.product.productName}
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold leading-6 text-gray-800">
                            {product.product.productName}
                          </h3>
                          <p className="text-sm leading-5 text-gray-600 line-clamp-2">
                            {product.product.productDescription}
                          </p>
                          <p className="text-sm leading-5 text-gray-600">
                            {product.color}
                          </p>
                        </div>
                        {/* <div className="flex flex-col flex-grow items-center">
                        <p className="text-sm leading-5 text-gray-600">
                            {product.color}
                          </p>
                        </div> */}
                        <div className="flex flex-col items-end">
                          <p className="text-base font-semibold leading-6 text-gray-800">
                          Quantity: {product.count}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div className="mt-8 flex mb-8 justify-between items-center bg-gray-200 p-4 rounded-md">
                      <p className="text-xl font-semibold leading-6 text-gray-800">
                        Total Amount:&#8377; {order.paymentIntent.amount}
                      </p>
                      <p className="text-xl font-semibold leading-6 text-gray-800">
                        Payment Method: {order.paymentIntent.method}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserOrderDetails;
