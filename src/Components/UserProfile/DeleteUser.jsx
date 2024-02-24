import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaShoppingCart, FaUser, FaUserTie, FaSave } from 'react-icons/fa';
import { MdOutlinePayment, MdCancel } from 'react-icons/md';
import Navbar from '../HomeComponent/Navbar';
import Services from '../HomeComponent/Services';
import Footer from '../HomeComponent/Footer';
import { Link } from 'react-router-dom';

const DeleteUser = ({ alphaUser, setAlphaUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userData, setUserData] = useState(null);
  const [originalData, setOriginalData] = useState(null); // Store the original user data
  const accessToken = localStorage.getItem('token');

  React.useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const profile = JSON.parse(localStorage.getItem('profile'));
        const userId = profile._id;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/${userId}`, {
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
        // Handle error
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
      if (isDataChanged()) {
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
      // Handle error
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFirstName(originalData.firstname || '');
    setLastName(originalData.lastname || '');
    setEmail(originalData.email || '');
    setMobile(originalData.mobile || '');
  };

  const isDataChanged = () => {
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
                <Link to='/user-order-details'>
                  <li className='uppercase pb-4 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
                    <FaShoppingCart color={'orange'} /> My Orders
                  </li>
                </Link>
                <li className='uppercase pb-4 text-gray-700 flex items-center gap-3 hover:translate-x-2 duration-300 cursor-pointer'>
                  <FaUser color={'orange'} /> Account Settings
                </li>
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
            <div className='px-2 p-1 font-bold bg-orange-500 w-[100px] my-8 h-[100px] rounded-full flex items-center text-white justify-center shadow-2xl text-center text-5xl'>
              {firstName ? firstName.substring(0, 1).toUpperCase() : ''}
            </div>
            <div className='text-center text-black'>
              <h1 className='text-5xl font-bold pt-3 pb-[2rem]'>
                {firstName} {lastName}
              </h1>
              <div className='px-[6rem]'>
                <p className='mb-8 text-gray-800 font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id sint quia qui, tenetur repellat.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error voluptates eum non! Rerum voluptatibus alias esse illo sapiente minus ut consequuntur est inventore, eum labore iure atque nulla quo.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button
                  type='submit'
                  className='py-4 px-8 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-br from-black to-yellow-500 hover:from-yellow-500 hover:to-yellow-500 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 rounded-md'
                >
                  Delete your account
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Services />
      <Footer />
    </>
  );
};

export default DeleteUser;
