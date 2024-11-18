import React, { useContext } from "react";
import { AuthContext } from "../Context API/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Getting the current user from context
  const navigate = useNavigate();

  // Function to navigate to update profile page
  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };

  return (
    <div className="container mx-auto p-6 flex flex-col ">
      <h1 className="text-3xl font-semibold mb-4 flex ">Welcome, {user?.displayName || "User"}!</h1>

      <div className="profile-details flex flex-col items-center">
        {/* Display User Image */}
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="user-photo"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <FaUserEdit className="text-xl text-gray-500" />
          </div>
        )}

        {/* Display User Name */}
        <h2 className="text-xl font-medium">{user?.displayName || "No Name Available"}</h2>

        {/* Display User Email */}
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Update Profile Button */}
      <div className="mt-6 flex justify-center w-full">
        <button
          onClick={handleUpdateProfile}
          className="btn btn-primary flex items-center gap-2 justify-center text-center"
        >
          <FaUserEdit /> Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
