// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../Assets/white redesign.png";
// import Swal from "sweetalert2";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     mobile: "",
//   });

//   const [validationMessages, setValidationMessages] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     mobile: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const showSuccessAlert = () => {
//     Swal.fire({
//       icon: "success",
//       title: "Signup Successful!",
//       showConfirmButton: false,
//       timer: 3000,
//     });
//   };

//   const showErrorAlert = (errorMessage) => {
//     Swal.fire({
//       icon: "error",
//       title: "Signup Failed",
//       text: errorMessage,
//     });
//   };

//   const validateForm = () => {
//     const newValidationMessages = {
//       firstname: "",
//       lastname: "",
//       email: "",
//       password: "",
//       mobile: "",
//     };

//     if (!formData.firstname) {
//       newValidationMessages.firstname = "First name is required.";
//     }

//     if (!formData.lastname) {
//       newValidationMessages.lastname = "Last name is required.";
//     }

//     if (!formData.email) {
//       newValidationMessages.email = "Email is required.";
//     }

//     if (!formData.password) {
//       newValidationMessages.password = "Password is required.";
//     }

//     if (!formData.mobile) {
//       newValidationMessages.mobile = "Mobile number is required.";
//     }

//     setValidationMessages(newValidationMessages);

//     // Check if any validation message is present
//     return Object.values(newValidationMessages).every(
//       (message) => message === ""
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       // Submit the form if all validations pass
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/user/register`,

//         formData
//       );
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("profile", JSON.stringify(response.data));
//       navigate("/login-form");
//       showSuccessAlert();
//     } catch (error) {
//       console.error("Signup Failed:", error.message);
//       showErrorAlert(error.message);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D')`,
//       }}
//     >
//       <div className="max-w-md w-full p-6 bg-black bg-opacity-80 rounded shadow-md">
//         <img
//           className="mx-auto h-10 w-auto mb-3"
//           src={logo}
//           alt="Your Company"
//         />
//         <h2 className="text-2xl font-semibold mb-4 text-center text-white">
//           User Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-gray-200 text-sm font-semibold mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 placeholder="Enter First Name"
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//               {validationMessages.firstname && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {validationMessages.firstname}
//                 </p>
//               )}
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-200 text-sm font-semibold mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 placeholder="Enter Last Name"
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//               {validationMessages.lastname && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {validationMessages.lastname}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Your Email"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//             {validationMessages.email && (
//               <p className="text-red-500 text-xs mt-1">
//                 {validationMessages.email}
//               </p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Your Password"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//             {validationMessages.password && (
//               <p className="text-red-500 text-xs mt-1">
//                 {validationMessages.password}
//               </p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               placeholder="Enter Your Mobile Number"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//             {validationMessages.mobile && (
//               <p className="text-red-500 text-xs mt-1">
//                 {validationMessages.mobile}
//               </p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black font-bold text-lg p-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:shadow-outline-blue"
//           >
//             Sign Up
//           </button>
//           <div className="text-center">
//             <Link
//               to="/login-form"
//               className="text-green-500 hover:text-green-600"
//             >
//               Already have an account? Login
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

// export default Signup;



// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../Assets/white redesign.png";
// import Swal from "sweetalert2";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     mobile: "",
//   });

//   const [validationMessages, setValidationMessages] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     mobile: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Validate that only alphabetical characters are entered in the firstname and lastname fields
//     if ((name === 'firstname' || name === 'lastname') && /\d/.test(value)) {
//       setValidationMessages((prevMessages) => ({
//         ...prevMessages,
//         [name]: "Numbers are not allowed in the name field.",
//       }));
//       return;
//     }

//     // Validate mobile field
//     if (name === 'mobile') {
//       // Validate starting digit for mobile field
//       if (value && !/^[6-9]\d{0,9}$/.test(value)) {
//         setValidationMessages((prevMessages) => ({
//           ...prevMessages,
//           mobile: "Mobile number should start with a digit between 6 and 9.",
//         }));
//       } else if (value.length > 10) {
//         setValidationMessages((prevMessages) => ({
//           ...prevMessages,
//           mobile: "Mobile number should not exceed 10 digits.",
//         }));
//       } else {
//         setValidationMessages((prevMessages) => ({
//           ...prevMessages,
//           mobile: "",
//         }));
//       }
//     }

//     // Update the state with the new value
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleBlur = (e) => {
//     const { name, value } = e.target;

//     // Validate starting digit for mobile field on blur
//     if (name === 'mobile' && value && !/^[6-9]\d{0,9}$/.test(value)) {
//       setValidationMessages((prevMessages) => ({
//         ...prevMessages,
//         mobile: "Mobile number should start with a digit between 6 and 9.",
//       }));
//     }
//   };

//   const showSuccessAlert = () => {
//     Swal.fire({
//       icon: "success",
//       title: "Signup Successful!",
//       showConfirmButton: false,
//       timer: 3000,
//     });
//   };

//   const showErrorAlert = (errorMessage) => {
//     Swal.fire({
//       icon: "error",
//       title: "Signup Failed",
//       text: errorMessage,
//     });
//   };

//   const validateForm = () => {
//     const newValidationMessages = {
//       firstname: "",
//       lastname: "",
//       email: "",
//       password: "",
//       mobile: "",
//     };

//     if (!formData.firstname) {
//       newValidationMessages.firstname = "First name is required.";
//     }

//     if (!formData.lastname) {
//       newValidationMessages.lastname = "Last name is required.";
//     }

//     if (!formData.email) {
//       newValidationMessages.email = "Email is required.";
//     }

//     if (!formData.password) {
//       newValidationMessages.password = "Password is required.";
//     }

//     if (!formData.mobile) {
//       newValidationMessages.mobile = "Mobile number is required.";
//     }

//     setValidationMessages(newValidationMessages);

//     // Check if any validation message is present
//     return Object.values(newValidationMessages).every(
//       (message) => message === ""
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the form
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       // Submit the form if all validations pass
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/user/register`,
//         formData
//       );
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("profile", JSON.stringify(response.data));
//       navigate("/login-form");
//       showSuccessAlert();
//     } catch (error) {
//       console.error("Signup Failed:", error.message);
//       showErrorAlert(error.message);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D')`,
//       }}
//     >
//       <div className="max-w-md w-full p-6 bg-black bg-opacity-80 rounded shadow-md">
//         <img
//           className="mx-auto h-10 w-auto mb-3"
//           src={logo}
//           alt="Your Company"
//         />
//         <h2 className="text-2xl font-semibold mb-4 text-center text-white">
//           User Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-gray-200 text-sm font-semibold mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 placeholder="Enter First Name"
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//               {validationMessages.firstname && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {validationMessages.firstname}
//                 </p>
//               )}
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-200 text-sm font-semibold mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 placeholder="Enter Last Name"
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//               {validationMessages.lastname && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {validationMessages.lastname}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter Your Email"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//             {validationMessages.email && (
//               <p className="text-red-500 text-xs mt-1">
//                 {validationMessages.email}
//               </p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter Your Password"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//             {validationMessages.password && (
//               <p className="text-red-500 text-xs mt-1">
//                 {validationMessages.password}
//               </p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Enter Your Mobile Number"
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//             {validationMessages.mobile && (
//               <p className="text-red-500 text-xs mt-1">
//                 {validationMessages.mobile}
//               </p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black font-bold text-lg p-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:shadow-outline-blue"
//           >
//             Sign Up
//           </button>
//           <div className="text-center">
//             <Link
//               to="/login-form"
//               className="text-green-500 hover:text-green-600"
//             >
//               Already have an account? Login
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

// export default Signup;






import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/white redesign.png";
import Swal from "sweetalert2";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Validate that only alphabetical characters are entered in the firstname and lastname fields
    if ((name === 'firstname' || name === 'lastname') && /\d/.test(value)) {
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        [name]: "Only alphabetical characters are allowed.",
      }));
      return;
    }
  
    // Validate mobile field
    if (name === 'mobile') {
      // Validate that only numeric characters are entered in the mobile field
      if (!/^\d*$/.test(value)) {
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          mobile: "Only numeric characters are allowed.",
        }));
        return;
      }
  
      // Validate starting digit for mobile field
      if (value && !/^[6-9]\d{0,9}$/.test(value)) {
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          mobile: "Mobile number should start with a digit between 6 and 9.",
        }));
      } else if (value.length > 10) {
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          mobile: "Mobile number should not exceed 10 digits.",
        }));
      } else {
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          mobile: "",
        }));
      }
    }
  
    // Update the state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    try {
      // Submit the form if all validations pass
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/register`,
        formData
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("profile", JSON.stringify(response.data));
      navigate("/login-form");
      showSuccessAlert();
    } catch (error) {
      console.error("Signup Failed:", error.message);
      showErrorAlert(error.message);
    }
  };

  const validateForm = () => {
    const newValidationMessages = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      mobile: "",
    };

    if (!formData.firstname) {
      newValidationMessages.firstname = "First name is required.";
    }

    if (!formData.lastname) {
      newValidationMessages.lastname = "Last name is required.";
    }

    if (!formData.email) {
      newValidationMessages.email = "Email is required.";
    }

    if (!formData.password) {
      newValidationMessages.password = "Password is required.";
    }

    if (!formData.mobile) {
      newValidationMessages.mobile = "Mobile number is required.";
    }

    setValidationMessages(newValidationMessages);

    // Check if any validation message is present
    return Object.values(newValidationMessages).every(
      (message) => message === ""
    );
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate starting digit for mobile field on blur
    if (name === 'mobile' && value && !/^[6-9]\d{0,9}$/.test(value)) {
      setValidationMessages((prevMessages) => ({
        ...prevMessages,
        mobile: "Mobile number should start with a digit between 6 and 9.",
      }));
    }
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Signup Successful!",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const showErrorAlert = (errorMessage) => {
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: errorMessage,
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D')`,
      }}
    >
      <div className="max-w-md w-full p-6 bg-black bg-opacity-80 rounded shadow-md">
        <img
          className="mx-auto h-10 w-auto mb-3"
          src={logo}
          alt="Your Company"
        />
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          User Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-200 text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {validationMessages.firstname && (
                <p className="text-red-500 text-xs mt-1">
                  {validationMessages.firstname}
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-200 text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
              {validationMessages.lastname && (
                <p className="text-red-500 text-xs mt-1">
                  {validationMessages.lastname}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {validationMessages.email && (
              <p className="text-red-500 text-xs mt-1">
                {validationMessages.email}
              </p>
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
              placeholder="Enter Your Password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {validationMessages.password && (
              <p className="text-red-500 text-xs mt-1">
                {validationMessages.password}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Your Mobile Number"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            {validationMessages.mobile && (
              <p className="text-red-500 text-xs mt-1">
                {validationMessages.mobile}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold text-lg p-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:shadow-outline-blue"
          >
            Sign Up
          </button>
          <div className="text-center">
            <Link
              to="/login-form"
              className="text-green-500 hover:text-green-600"
            >
              Already have an account? Login
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

export default Signup;


// // SignUpForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../Assets/white redesign.png'
// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     mobile: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9000/api/user/register', formData);
//       // console.log('Signup Successful:', response.data);
//       // Handle successful signup, maybe redirect to login page
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("profile", JSON.stringify(response.data));
//       navigate("/login-form");
//     } catch (error) {
//       // console.error('Signup Failed:', error.response.data);
//       // Handle signup failure, show error message
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D')` }}>
//       <div className="max-w-md w-full p-6 bg-black bg-opacity-70 rounded shadow-md">
//         <img
//           className="mx-auto h-10 w-auto mb-3"
//           src={logo}
//           alt="Your Company" />
//         <h2 className="text-2xl font-semibold mb-4 text-center text-white">User Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-gray-200 text-sm font-semibold mb-2">First Name</label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-200 text-sm font-semibold mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">Mobile Number</label>
//             <input
//               type="tel"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-700 focus:outline-none focus:shadow-outline-blue"
//           >
//             Sign Up
//           </button>
//           <div className="text-center">
//             <Link to="/login-form" className="text-green-500 hover:text-green-600">
//               Already have an account? Login
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

// export default Signup;

// // for email password to signup
// // SignUpForm.js

// // SignUpForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     mobile: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9000/api/user/register', formData);
//       console.log('Signup Successful:', response.data);
//       // Handle successful signup, maybe redirect to login page
//       localStorage.setItem("token",response.data.token);
//       localStorage.setItem("profile",JSON.stringify(response.data));
//       navigate("/");
//     } catch (error) {
//       console.error('Signup Failed:', error.response.data);
//       // Handle signup failure, show error message
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <div className="flex gap-4">
//             <div className="w-1/2">
//               <label className="block text-gray-600 text-sm font-semibold mb-2">First Name</label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div className="w-1/2">
//               <label className="block text-gray-600 text-sm font-semibold mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
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
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-semibold mb-2">Mobile Number</label>
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//         >
//           Sign Up
//         </button>
//         <Link to={"/login-form"}>
//           <button
//           className="ml-12 bg-green-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
//         >
//           Login
//         </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Signup;

// import React, { useContext, useEffect, useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import { auth } from '../../backend/Setup.js';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { TailSpin } from 'react-loader-spinner';
// import ProductContext from '../../context/ProductContext.js';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../Assets/white redesign.png'; // Ensure the correct path to your logo image

// const Signup = ({ alphaUser, setAlphaUser }) => {
//   useEffect(() => {
//     setAlphaUser(false);
//   }, []);

//   const [phone, setPhone] = useState('');
//   const [user, setUser] = useState(null);
//   const [otp, setOtp] = useState('');
//   const [toggle, setToggle] = useState(true);
//   const [loader, setLoader] = useState(false);

//   const [alert, setAlert] = useState(false);

//   const { masterAuth, setMasterAuth } = useContext(ProductContext);

//   const navigate = useNavigate();

//   const sendOtp = async () => {
//     if (phone.length <= 10) {
//       // alert("Please enter 10 digits number");
//       return;
//     }
//     try {
//       setLoader(true);
//       const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {
//         size: 'invisible',
//         callback: (response) => {
//           // onSignInSubmit();
//         },
//       });
//       const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
//       console.log(confirmation);
//       setUser(confirmation);
//       console.log('OTP Sent!');
//       setLoader(false);
//       setToggle(false);
//     } catch (error) {
//       console.log('Code Destroy!!!!!', error);
//       console.log('Failed!');
//       setLoader(false);
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       setLoader(true);
//       const data = await user.confirm(otp);
//       localStorage.setItem('auth_token', data._tokenResponse.localId);
//       console.log('1111');
//       console.log(data);
//       console.log('okkkkkkk');
//       console.log(data._tokenResponse.phoneNumber);
//       console.log(data._tokenResponse.localId);
//       console.log(data.user.metadata.creationTime);
//       setLoader(false);
//       setUser(data);
//       // alert('Login Successfully!')
//       setMasterAuth(true);
//       setAlphaUser(true);
//       navigate('/user-registration');
//     } catch (error) {
//       console.log('Code Destroy!!!!!V', error);
//       // alert("Please Enter Correct OTP number")
//       setLoader(false);
//     }
//   };

//   return (
//     <main className="login-main" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D')` }}>
//       <div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
//         <div className="max-w-md w-full p-8 bg-gray-800 bg-opacity-80 backdrop-blur-md text-white rounded-md shadow-md">
//           <div className="sm:w-full max-w-sm">
//             <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
//             <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
//               Signup
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-300">
//               Get access to your Orders, <br /> Wishlist and Recommendations
//             </p>
//           </div>

//           <div className="mt-5 sm:w-full max-w-sm">
//             <section className="space-y-6 flex flex-col items-center justify-center">
//               <div className="text-xl text font-bold">
//                 <h1>{toggle ? 'Enter Mobile number' : 'Enter OTP number'}</h1>
//               </div>

//               <div className='text-black'>
//                 {toggle ? (
//                   <PhoneInput
//                     country={'in'}
//                     value={phone}
//                     onChange={(phone) => setPhone('+' + phone)}
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     autoComplete="false"
//                     required
//                     className="w-full px-3 py-2 border rounded-md shadow-sm  focus:outline-none focus:ring focus:border-indigo-500 text-black"
//                   />
//                 )}
//               </div>

//               <div>
//                 <button
//                   onClick={toggle ? sendOtp : verifyOtp}
//                   className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   {loader ? (
//                     <TailSpin height="30" width="30" color="white" />
//                   ) : (
//                     toggle ? 'Continue' : 'Verify OTP'
//                   )}
//                 </button>
//                 <div id="recaptcha"></div>
//               </div>
//               <div>
//                 <Link to={"/login-form"}>
//                   <button
//                     type="submit"
//                     className="w-full py-2 px-4 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-100 focus:outline-none focus:ring focus:border-indigo-500"
//                   >
//                     Existing User ? Login
//                   </button>
//                 </Link>
//               </div>
//               <div className='mt-12'>
//                 <Link to={"/"}>
//                   <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-3 text-center me-2 mb-2">Back To Home</button>
//                 </Link>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;
