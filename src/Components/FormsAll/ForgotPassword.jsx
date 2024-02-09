import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext.js";
import logo from "../../Assets/white redesign.png";
import Swal from "sweetalert2";

const ForgotPassword = ({ alphaUser, setAlphaUser }) => {
  const { masterAuth, setMasterAuth } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showWelcomeAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Welcome to Orchyrex!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const handleLoginError = (errorMessage) => {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Wrong Email and Password",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simple validation
      if (!formData.email || !formData.password) {
        throw new Error("Email and password are required.");
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,

        formData
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("profile", JSON.stringify(response.data));
      setMasterAuth(true);
      setAlphaUser(true);
      if (localStorage.getItem("token")) navigate("/product-cart");
      navigate("/");
      showWelcomeAlert();
    } catch (error) {
      console.error("Login Failed:", error.message);
      handleLoginError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url('https://www.therugmaker.com.sg/wp-content/uploads/2021/11/Rugmaker_Blog-Piece-SideImages_Men-clothing-store.jpg')`,
      }}
    >
      <div className="max-w-md w-full p-6 bg-black bg-opacity-85 rounded shadow-md">
        <img
          className="mx-auto h-10 w-auto mb-3"
          src={logo}
          alt="Your Company"
        />
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          User Forget Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2 ">
              Email or Mobile Number
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
      
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold text-lg  p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue"
          >
            Send to Verify
          </button>
          <div className="text-center mb-2">
            <Link to="/signup-form" className="text-red-500 hover:text-red-800">
              Create an account?
            </Link>
            <Link to="/forgot-password" className="text-red-500 hover:text-red-800">
              Forget password?
            </Link>
            <div className="mt-2">
              <Link to={"/"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-3 text-center me-2 mb-2"
                >
                  Back To Home
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;