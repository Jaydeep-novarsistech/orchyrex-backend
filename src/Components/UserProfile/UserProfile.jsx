import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ logoutUser, setAlphaUser }) => {
  const [profile, setProfile] = useState({
    firstname: "John",
    lastname: "dave",
    email: "john@dave.com",
    mobile: "1234567890",
  });

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggleProfile = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleProfile}
        className="bg-yellow-600 hover:bg-yellow-900 p-2 rounded-full text-xl uppercase font-bold px-3 text-white"
      >
        {profile.firstname.substring(0, 1)}
      </button>

      <div
        className={`${
          toggle ? "block" : "hidden"
        }  w-[14rem] my-10 absolute top-5 left-0 z-[9999999999999] p-6 bg-white rounded-md shadow-md`}
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {profile.firstname} {profile.lastname}
          </h2>
        </div>
        <Link to={"/user-information"}>
          <button className="w-full py-2 my-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-blue-200">
            Profile
          </button>
        </Link>

        <button
          className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-blue-200"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
