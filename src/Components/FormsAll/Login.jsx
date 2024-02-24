// import React, { useContext, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import ProductContext from "../../context/ProductContext.js";
// import logo from "../../Assets/white redesign.png";
// import Swal from "sweetalert2";

// const Login = ({ alphaUser, setAlphaUser }) => {
//   const { masterAuth, setMasterAuth } = useContext(ProductContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const showWelcomeAlert = () => {
//     Swal.fire({
//       icon: "success",
//       title: "Welcome to Orchyrex!",
//       showConfirmButton: false,
//       timer: 3000,
//     });
//   };

//   const handleLoginError = (errorMessage) => {
//     Swal.fire({
//       icon: "error",
//       title: "Login Failed",
//       text: "Wrong Email and Password",
//       showConfirmButton: false,
//       timer: 3000,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Simple validation
//       if (!formData.email || !formData.password) {
//         throw new Error("Email and password are required.");
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/user/login`,

//         formData
//       );
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("profile", JSON.stringify(response.data));
//       setMasterAuth(true);
//       setAlphaUser(true);
//       if (localStorage.getItem("token")) navigate("/product-cart");
//       navigate("/");
//       showWelcomeAlert();
//     } catch (error) {
//       console.error("Login Failed:", error.message);
//       handleLoginError(error.message);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover"
//       style={{
//         backgroundImage: `url('https://www.therugmaker.com.sg/wp-content/uploads/2021/11/Rugmaker_Blog-Piece-SideImages_Men-clothing-store.jpg')`,
//       }}
//     >
//       <div className="max-w-md w-full p-6 bg-black bg-opacity-85 rounded shadow-md">
//         <img
//           className="mx-auto h-10 w-auto mb-3"
//           src={logo}
//           alt="Your Company"
//         />
//         <h2 className="text-2xl font-semibold mb-4 text-center text-white">
//           User Login
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2 ">
//               Email or Mobile Number
//             </label>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your Email"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2 ">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your Password"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black font-bold text-lg  p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue"
//           >
//             Login
//           </button>
//           <div className="text-center mb-2">
//             <Link to="/signup-form" className="text-red-500 hover:text-red-800">
//               Create an account?
//             </Link>
//             <Link to="/forgot-password" className="text-red-500 hover:text-red-800">
//               Forget password?
//             </Link>
//             <div className="mt-2">
//               <Link to={"/"}>
//                 <button
//                   type="button"
//                   className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-3 text-center me-2 mb-2"
//                 >
//                   Back To Home
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../../context/ProductContext.js";
import logo from "../../Assets/white redesign.png";
import Swal from "sweetalert2";

const Login = ({ alphaUser, setAlphaUser }) => {
  const { masterAuth, setMasterAuth } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validation for mobile number
    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: "",
        email: "",
      }));
      
      const isMobileValid = /^[6-9]\d{9}$/.test(value);

      if (!isMobileValid) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile: "Enter a valid mobile number starting with 6 to 9 and length 10.",
        }));
      }
    }

    // Validation for email
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address.",
      }));
    }
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
          User Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Email or Mobile Number
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email or Mobile Number"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold text-lg p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
          <div className="text-center mb-2 ">
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

export default Login;


//firbase code

// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import ProductContext from '../../context/ProductContext.js';
// import logo from '../../Assets/white redesign.png'
// const Login = ({ alphaUser, setAlphaUser }) => {
//   const { masterAuth, setMasterAuth } = useContext(ProductContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9000/api/user/login', formData);
//       //console.log('Login Successful:', response.data);
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("profile", JSON.stringify(response.data));
//       // console.table(response.data);
//       setMasterAuth(true);
//       setAlphaUser(true);
//       if (localStorage.getItem("token")) navigate("/product-cart");
//       navigate("/");
//     } catch (error) {
//       // console.error('Login Failed:', error.response.data);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: `url('https://www.therugmaker.com.sg/wp-content/uploads/2021/11/Rugmaker_Blog-Piece-SideImages_Men-clothing-store.jpg')` }}>
//       <div className="max-w-md w-full p-6 bg-black bg-opacity-70 rounded shadow-md">
//         <img
//           className="mx-auto h-10 w-auto mb-3"
//           src={logo}
//           alt="Your Company" />
//         <h2 className="text-2xl font-semibold mb-4 text-center text-white">User Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2 ">Email or Mobile Number</label>
//             <input
//               type="text"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2 ">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue"
//           >
//             Login
//           </button>
//           <div className="text-center">
//             <Link to="/signup-form" className="text-red-500 hover:text-red-800">
//               Create an account ?
//             </Link>
//             <div className='mt-2'>
//               <Link to={"/"}>
//                 <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-3 text-center me-2 mb-2">Back To Home</button>
//               </Link>
//             </div>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// login email/no. and password
// LoginForm.js

// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import ProductContext from '../../context/ProductContext.js';

// const Login = ({ alphaUser, setAlphaUser }) => {

//   const { masterAuth, setMasterAuth } = useContext(ProductContext);

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     // mobile: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9000/api/user/login', formData);
//       console.log('Login Successful:', response.data);
//       localStorage.setItem("token",response.data.token);
//       localStorage.setItem("profile",JSON.stringify(response.data));
//       console.table(response.data);
//       setMasterAuth(true);
//       setAlphaUser(true);
//       if(localStorage.getItem("token")) navigate("/product-cart");
//       navigate("/");
//       // Handle successful login, maybe store the token in local storage
//     } catch (error) {
//       console.error('Login Failed:', error.response.data);
//       // Handle login failure, show error message
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-semibold mb-2">
//             Email or Mobile Number
//           </label>
//           <input
//             type="text"
//             // name="mobile"
//             name="email"
//             // value={formData.mobile}
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//         >
//           Login
//         </button>
//         <Link to={"/signup-form"}>
//           <button
//           className="ml-12 bg-red-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//         >
//         Signup
//         </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Login;

// // import React, { useContext, useEffect, useState } from 'react'
// // import PhoneInput from 'react-phone-input-2'
// // import 'react-phone-input-2/lib/style.css'
// // import { auth } from '../../backend/Setup.js';
// // import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
// // import { TailSpin } from 'react-loader-spinner'
// // import ProductContext from '../../context/ProductContext.js';
// // import { useNavigate } from 'react-router-dom'
// // import logo from '../../Assets/white redesign.png'
// // const Login = ({ alphaUser, setAlphaUser }) => {

// // useEffect(()=>{
// // setAlphaUser(false);
// // },[])

// //   const [phone, setPhone] = useState("");
// //   const [user, setUser] = useState(null);
// //   const [otp, setOtp] = useState("");
// //   const [toggle, setToggle] = useState(true);
// //   const [loader, setLoader] = useState(false);

// //   const [alert, setAlert] = useState(false);

// //   const { masterAuth, setMasterAuth } = useContext(ProductContext);

// //   const navigate = useNavigate();

// //   const sendOtp = async () => {
// //     if (phone.length <= 10) {
// //       // alert("Please enter 10 digits number");
// //       return;
// //     }
// //     try {
// //       setLoader(true);
// //       const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
// //         'size': 'invisible',
// //         'callback': (response) => {
// //           // onSignInSubmit();
// //         }
// //       })
// //       const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
// //       console.log(confirmation);
// //       setUser(confirmation);
// //       console.log("OTP Sent!")
// //       setLoader(false);
// //       setToggle(false)
// //     } catch (error) {
// //       console.log("Code Destroy!!!!!", error);
// //       console.log("Failed!")
// //       setLoader(false);
// //     }
// //   }

// //   const verifyOtp = async () => {
// //     try {
// //       setLoader(true);
// //       const data = await user.confirm(otp)
// //       localStorage.setItem("auth_token", data._tokenResponse.localId);
// //       console.log("1111");
// //       console.log(data);
// //       console.log("okkkkkkk");
// //       console.log(data._tokenResponse.phoneNumber)
// //       console.log(data._tokenResponse.localId)
// //       console.log(data.user.metadata.creationTime);
// //       setLoader(false);
// //       setUser(data);
// //       // alert('Login Successfully!')
// //       setMasterAuth(true);
// //       setAlphaUser(true);
// //       navigate("/product-cart");
// //     } catch (error) {
// //       console.log("Code Destroy!!!!!V", error);
// //       // alert("Please Enter Correct OTP number")
// //       setLoader(false);
// //     }
// //   }

// //   return (
// //     <main>
// //       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{ backgroundImage: `url('https://www.therugmaker.com.sg/wp-content/uploads/2021/11/Rugmaker_Blog-Piece-SideImages_Men-clothing-store.jpg')` }}>
// //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// //           <img
// //             className="mx-auto h-10 w-auto"
// //             src={logo}
// //             alt="Your Company"
// //           />
// //           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
// //             Login
// //           </h2>

// //         </div>
// //         <div className="mt-6 text-center text-sm text-gray-500">
// //           <p className=" font-semibold leading-6 text-yellow-600 hover:text-yellow-500">
// //             Get access to your Orders, <br /> Wishlist and Recommendations
// //           </p>
// //         </div>

// //         <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">

// //           <section className="space-y-6 flex flex-col items-center justify-center">
// //             <div className='text-xl font-bold'>
// //               <h1>
// //                 {
// //                   toggle ? " Enter Mobile number"
// //                     : "Enter OTP number"
// //                 }
// //               </h1>
// //             </div>

// //             <div>
// //               {
// //                 toggle ?
// //                   <PhoneInput
// //                     country={"in"}
// //                     value={phone}
// //                     onChange={(phone) => setPhone("+" + phone)}
// //                   />
// //                   :
// //                   <input type="text"
// //                     value={otp}
// //                     onChange={(e) => setOtp(e.target.value)}
// //                     autoComplete="false"
// //                     required
// //                     className="block w-[300px] outline-none px-6 focus:text-xl py-2 focus:border-none rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
// //                   />
// //               }
// //             </div>

// //             <div>
// //               {
// //                 toggle ?
// //                   <button
// //                     onClick={sendOtp}
// //                     className="flex w-[300px] justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //                   >
// //                     {
// //                       loader ? <TailSpin
// //                         height="30"
// //                         width="30"
// //                         color="white"
// //                       />
// //                         :
// //                         " request OTP"
// //                     }
// //                   </button>
// //                   :
// //                   <button
// //                     onClick={verifyOtp}
// //                     className="flex w-[300px] justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //                   >

// //                     {
// //                       loader ? <TailSpin
// //                         height="30"
// //                         width="30"
// //                         color="white"
// //                       />
// //                         :
// //                         "   Verify OTP"
// //                     }
// //                   </button>
// //               }
// //               <div id='recaptcha'></div>
// //             </div>
// //           </section>

// //         </div>
// //       </div>

// //     </main >
// //   )
// // }

// // export default Login
