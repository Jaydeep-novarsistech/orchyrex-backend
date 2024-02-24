// import React, { useState } from 'react'
// import { FaEdit, FaShoppingCart, FaUser, FaUserTie, FaSave } from "react-icons/fa";
// import { MdOutlinePayment, MdCancel } from "react-icons/md";
// import Navbar from '../HomeComponent/Navbar';
// import Services from '../HomeComponent/Services';
// import Footer from '../HomeComponent/Footer';
// const UserInfo = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [firstName, setFirstName] = useState('Master');
//   const [lastName, setLastName] = useState('Man');
//   const [email, setEmail] = useState('masterman@gmail.com');
//   const [mobile, setMobile] = useState('7692943969');
//   const handleEditClick = () => {
//     setIsEditing(true);
//   };
//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };
//   const handleCancelClick = () => {
//     setIsEditing(false);
//   };
//   return (
//     <>
//     <Navbar/>

//     <section >
//       <div className='w-full mt-[8rem] mb-[5rem] lg:max-w-[1240px] lg:h-screen mx-auto gap-8 flex lg:flex-row flex-col items-center justify-center'>
//         {/* first  */}
//         <section className=' shadow-2xl w-full lg:w-1/3 h-full flex items-center flex-col'>
//           <div className='px-2 p-1 font-bold  bg-orange-500 w-[200px] my-8 h-[200px] rounded-full flex items-center text-white justify-center shadow-2xl  text-center text-8xl'>{firstName.substring(0,1).toUpperCase()}</div>
//           <div className='text-center text-black'>
//             <h2 className='text-2xl'>Hello,</h2>
//             <h1 className='text-3xl font-bold'>{firstName}{" "}{lastName}</h1>
//           </div>
//           <div className='lg:mt-5 mt-8'>
//             <ul className='lg:block flex flex-wrap justify-center gap-3'>
//               <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'><FaShoppingCart color={"orange"} />My Orders</li>
//               <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>< FaUser color={"orange"} />Account Settings</li>
//               <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>< MdOutlinePayment color={"orange"} />Payments</li>
//               <li className='uppercase pb-2  text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'><FaUserTie color={"orange"} />My Stuff</li>
//             </ul>
//           </div>
//         </section>
//         {/* second */}
//         <section className=' shadow-2xl  w-full lg:h-full flex flex-col items-center '>
//           <div className='lg:mt-8'>
//             <h3 className='text-3xl lg:text-4xl font-bold font-mono text-orange-500'>Personal Information</h3>
//           </div>
//           <div className="flex  flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
//             <div className="flex-grow">
//               <h1 className="font-bold text-lg lg:text-xl ">First name</h1>
//               {isEditing ? (
//                 <input
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
//                   type="text"
//                 />
//               ) : (
//                 <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
//                   {firstName}
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
//             <div className="flex-grow">
//               <h1 className="font-bold text-lg lg:text-xl">Last name</h1>
//               {isEditing ? (
//                 <input
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
//                   type="text"
//                 />
//               ) : (
//                 <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
//                   {lastName}
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
//             <div className="flex-grow">
//               <h1 className="font-bold text-lg lg:text-xl">Email</h1>
//               {isEditing ? (
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
//                   type="text"
//                 />
//               ) : (
//                 <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
//                   {email}
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full">
//             <div className="flex-grow">
//               <h1 className="font-bold text-lg lg:text-xl">Mobile No</h1>
//               {isEditing ? (
//                 <input
//                   value={mobile}
//                   onChange={(e) => setMobile(e.target.value)}
//                   className="mt-2 px-4 py-3 outline-none rounded shadow-lg w-full"
//                   type="text"
//                 />
//               ) : (
//                 <div className="mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100">
//                   {mobile}
//                 </div>
//               )}
//             </div>
//           </div>
//           {isEditing ? (
//             <div className='flex items-center mt-6 w-full gap-4 justify-around'>
//               <button
//                 onClick={handleSaveClick}
//                 className="text-xl px-3 p-2 rounded-md w-[50%] text-white  mt-4 flex items-center gap-3 justify-center  lg:mt-0 mx-2 bg-orange-600 hover:bg-orange-800"
//               >
//                 <FaSave /> Save
//               </button>
//               <button
//                 onClick={handleCancelClick}
//                 className="text-xl px-3 p-2 rounded-md w-[50%] text-white flex items-center justify-center gap-3  mt-4  lg:mt-0 mx-2 bg-red-600 hover:bg-red-400"
//               >
//                 <MdCancel />Cancel
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={handleEditClick}
//               className="text-xl px-3 p-2 rounded-md w-[80%] text-white  mt-4 flex items-center gap-3 justify-center   mx-2 bg-orange-600 hover:bg-orange-800"
//             >
//               <FaEdit /> Edit
//             </button>
//           )}
//         </section>
//       </div>
//     </section>
//     <Services/>

//     <Footer/>
//     </>
//   )
// }
// export default UserInfo


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaShoppingCart, FaUser, FaUserTie, FaSave } from 'react-icons/fa';
import { MdOutlinePayment, MdCancel } from 'react-icons/md';
import Navbar from '../HomeComponent/Navbar';
import Services from '../HomeComponent/Services';
import Footer from '../HomeComponent/Footer';
import { Link } from 'react-router-dom';

const UserInfo = ({ alphaUser, setAlphaUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userData, setUserData] = useState(null);
  const [originalData, setOriginalData] = useState(null); // Store the original user data
  const accessToken = localStorage.getItem('token');
  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const profile = JSON.parse(localStorage.getItem('profile'));
        const userId = profile._id;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        const { data } = response;
        setUserData(data.getaUser);
        setOriginalData(data.getaUser); // Save the original user data
        setFirstName(data.getaUser.firstname || '');
        setLastName(data.getaUser.lastname || '');
        setEmail(data.getaUser.email || '');
        setMobile(data.getaUser.mobile || '');
      } catch (error) {
        //console.error('Error fetching user info:', error);
      }
    };

    if (accessToken) {
      fetchUserInfo();
    }
  }, [accessToken]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      if (isDataChanged()) { // Check if data is changed before saving
        await axios.put(
          `http://localhost:9000/api/user/edit-user/${userData._id}`,
          {
            firstname: firstName,
            lastname: lastName,
            email,
            mobile,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
      }
      setIsEditing(false);
    } catch (error) {
      // console.error('Error updating user info:', error);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the state to the original data when canceling
    setFirstName(originalData.firstname || '');
    setLastName(originalData.lastname || '');
    setEmail(originalData.email || '');
    setMobile(originalData.mobile || '');
  };

  const isDataChanged = () => {
    // Check if there are changes in user data
    return (
      firstName !== originalData.firstname ||
      lastName !== originalData.lastname ||
      email !== originalData.email ||
      mobile !== originalData.mobile
    );
  };

  return (
    <>
      <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
      <section>
        <div className='w-full mt-[8rem] mb-[5rem] lg:max-w-[1240px] lg:h-screen mx-auto gap-8 flex lg:flex-row flex-col items-center justify-center'>
          {/* first */}
          <section className='shadow-2xl w-full lg:w-1/3 h-full flex items-center flex-col'>
            <div className='px-2 p-1 font-bold bg-orange-500 w-[200px] my-8 h-[200px] rounded-full flex items-center text-white justify-center shadow-2xl text-center text-8xl'>
              {firstName ? firstName.substring(0, 1).toUpperCase() : ''}
            </div>
            <div className='text-center text-black'>
              <h2 className='text-2xl'>Hello,</h2>
              <h1 className='text-3xl font-bold pt-3'>
                {firstName} {lastName}
              </h1>
            </div>
            <div className='lg:mt-5 mt-8'>
              <ul className='lg:block flex flex-wrap justify-center gap-3'>
                <Link to="/user-order-details">
                <li className='uppercase pb-4 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
                  <FaShoppingCart color={'orange'} /> My Orders
                </li>
                </Link>
                
                <Link to="/delete-account">
                <li className='uppercase pb-4 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
                  <FaUser color={'orange'} /> Account Settings
                </li>
                </Link>
                <li className='uppercase pb-4 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
                  <MdOutlinePayment color={'orange'} /> Payments
                </li>
                <li className='uppercase pb-4 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
                  <FaUserTie color={'orange'} /> My Stuff
                </li>
              </ul>
            </div>
          </section>
          {/* second */}
          <section className='shadow-2xl w-full lg:h-full flex flex-col items-center'>
            <div className='lg:mt-8'>
              <h3 className='text-3xl lg:text-4xl font-bold font-mono text-orange-500'>Personal Information</h3>
            </div>
            <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
              <div className='flex-grow'>
                <h1 className='font-bold text-lg lg:text-xl'>First name</h1>
                {isEditing ? (
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
                    type='text'
                  />
                ) : (
                  <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{firstName}</div>
                )}
              </div>
            </div>
            <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
              <div className='flex-grow'>
                <h1 className='font-bold text-lg lg:text-xl'>Last name</h1>
                {isEditing ? (
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
                    type='text'
                  />
                ) : (
                  <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{lastName}</div>
                )}
              </div>
            </div>
            <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
              <div className='flex-grow'>
                <h1 className='font-bold text-lg lg:text-xl'>Email</h1>
                {isEditing ? (
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
                    type='text'
                  />
                ) : (
                  <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{email}</div>
                )}
              </div>
            </div>
            <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
              <div className='flex-grow'>
                <h1 className='font-bold text-lg lg:text-xl'>Mobile No</h1>
                {isEditing ? (
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
                    type='text'
                  />
                ) : (
                  <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{mobile}</div>
                )}
              </div>
            </div>
            {isEditing ? (
              <div className='flex items-center mt-6 w-full gap-4 justify-around'>
                <button
                  onClick={handleSaveClick}
                  className='text-xl px-3 p-2 rounded-md w-[50%] text-white mt-4 flex items-center gap-3 justify-center lg:mt-0 mx-2 bg-orange-600 hover:bg-orange-800'
                >
                  <FaSave /> Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className='text-xl px-3 p-2 rounded-md w-[50%] text-white flex items-center justify-center gap-3 mt-4 lg:mt-0 mx-2 bg-red-600 hover:bg-red-400'
                >
                  <MdCancel /> Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={handleEditClick}
                className='text-xl px-3 p-2 rounded-md w-[80%] text-white mt-4 flex items-center gap-3 justify-center mx-2 bg-orange-600 hover:bg-orange-800'
              >
                <FaEdit /> Edit
              </button>
            )}
          </section>
        </div>
      </section>
      <Services />
      <Footer />
    </>
  );
};

export default UserInfo;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaEdit, FaShoppingCart, FaUser, FaUserTie, FaSave } from 'react-icons/fa';
// import { MdOutlinePayment, MdCancel } from 'react-icons/md';
// import Navbar from '../HomeComponent/Navbar';
// import Services from '../HomeComponent/Services';
// import Footer from '../HomeComponent/Footer';

// const UserInfo = ({ alphaUser, setAlphaUser }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [userData, setUserData] = useState(null);
//   const accessToken = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       const profile = JSON.parse(localStorage.getItem('profile'));
//       const userId = profile._id;
  
//       try {
//         const response = await axios.get(`http://localhost:9000/api/user/${userId}`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
  
//         const { data } = response;
  
//         if (data) {
//           setUserData(data);
//           setFirstName(data.firstname || '');
//           setLastName(data.lastname || '');
//           setEmail(data.email || '');
//           setMobile(data.mobile || '');
//         }
//       } catch (error) {
//         console.error('Error fetching user info:', error);
//       }
//     };
  
//     if (accessToken && !userData) {
//       fetchUserInfo();
//     }
//   }, [accessToken, userData]);
  
//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       await axios.put(
//         `http://localhost:9000/api/user/${userData._id}`,
//         {
//           firstname: firstName,
//           lastname: lastName,
//           email,
//           mobile,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating user info:', error);
//     }
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//   };


//   return (
//     <>
//       <Navbar alphaUser={alphaUser} setAlphaUser={setAlphaUser} />
//       <section>
//         <div className='w-full mt-[8rem] mb-[5rem] lg:max-w-[1240px] lg:h-screen mx-auto gap-8 flex lg:flex-row flex-col items-center justify-center'>
//           {/* first */}
//           <section className='shadow-2xl w-full lg:w-1/3 h-full flex items-center flex-col'>
//             <div className='px-2 p-1 font-bold bg-orange-500 w-[200px] my-8 h-[200px] rounded-full flex items-center text-white justify-center shadow-2xl text-center text-8xl'>
//               {firstName ? firstName.substring(0, 1).toUpperCase() : ''}
//             </div>
//             <div className='text-center text-black'>
//               <h2 className='text-2xl'>Hello,</h2>
//               <h1 className='text-3xl font-bold'>
//                 {firstName} {lastName}
//               </h1>
//             </div>
//             <div className='lg:mt-5 mt-8'>
//               <ul className='lg:block flex flex-wrap justify-center gap-3'>
//                 <li className='uppercase pb-2 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
//                   <FaShoppingCart color={'orange'} /> My Orders
//                 </li>
//                 <li className='uppercase pb-2 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
//                   <FaUser color={'orange'} /> Account Settings
//                 </li>
//                 <li className='uppercase pb-2 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
//                   <MdOutlinePayment color={'orange'} /> Payments
//                 </li>
//                 <li className='uppercase pb-2 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
//                   <FaUserTie color={'orange'} /> My Stuff
//                 </li>
//               </ul>
//             </div>
//           </section>
//           {/* second */}
//           <section className='shadow-2xl w-full lg:h-full flex flex-col items-center'>
//             <div className='lg:mt-8'>
//               <h3 className='text-3xl lg:text-4xl font-bold font-mono text-orange-500'>Personal Information</h3>
//             </div>
//             <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
//               <div className='flex-grow'>
//                 <h1 className='font-bold text-lg lg:text-xl '>First name</h1>
//                 {isEditing ? (
//                   <input
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
//                     type='text'
//                   />
//                 ) : (
//                   <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{firstName}</div>
//                 )}
//               </div>
//             </div>
//             <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
//               <div className='flex-grow'>
//                 <h1 className='font-bold text-lg lg:text-xl'>Last name</h1>
//                 {isEditing ? (
//                   <input
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
//                     type='text'
//                   />
//                 ) : (
//                   <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{lastName}</div>
//                 )}
//               </div>
//             </div>
//             <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
//               <div className='flex-grow'>
//                 <h1 className='font-bold text-lg lg:text-xl'>Email</h1>
//                 {isEditing ? (
//                   <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
//                     type='text'
//                   />
//                 ) : (
//                   <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{email}</div>
//                 )}
//               </div>
//             </div>
//             <div className='flex flex-col px-6 lg:flex-row mt-8 gap-5 w-full'>
//               <div className='flex-grow'>
//                 <h1 className='font-bold text-lg lg:text-xl'>Mobile No</h1>
//                 {isEditing ? (
//                   <input
//                     value={mobile}
//                     onChange={(e) => setMobile(e.target.value)}
//                     className='mt-2 px-4 py-3 outline-none rounded shadow-lg w-full'
//                     type='text'
//                   />
//                 ) : (
//                   <div className='mt-2 px-4 py-3 rounded shadow-lg w-full bg-gray-100'>{mobile}</div>
//                 )}
//               </div>
//             </div>
//             {isEditing ? (
//               <div className='flex items-center mt-6 w-full gap-4 justify-around'>
//                 <button
//                   onClick={handleSaveClick}
//                   className='text-xl px-3 p-2 rounded-md w-[50%] text-white mt-4 flex items-center gap-3 justify-center lg:mt-0 mx-2 bg-orange-600 hover:bg-orange-800'
//                 >
//                   <FaSave /> Save
//                 </button>
//                 <button
//                   onClick={handleCancelClick}
//                   className='text-xl px-3 p-2 rounded-md w-[50%] text-white flex items-center justify-center gap-3 mt-4 lg:mt-0 mx-2 bg-red-600 hover:bg-red-400'
//                 >
//                   <MdCancel /> Cancel
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={handleEditClick}
//                 className='text-xl px-3 p-2 rounded-md w-[80%] text-white mt-4 flex items-center gap-3 justify-center mx-2 bg-orange-600 hover:bg-orange-800'
//               >
//                 <FaEdit /> Edit
//               </button>
//             )}
//           </section>
//         </div>
//       </section>
//       <Services />
//       <Footer />
//     </>
//   );
// };

// export default UserInfo;




// http://localhost:9000/api/user/edit-user/65af4fc33a5af9f93e65b1ff