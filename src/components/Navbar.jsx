import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { auth, AuthContext } from "../Context API/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/bangladesh.png"
const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);

  const links = (
    <>
      <li className="mr-3 font-bold"><NavLink to='/'>Home</NavLink></li>
      <li className="mr-3 font-bold"><NavLink to='/blogs'>Blogs</NavLink></li>
      
      {user ? (
        <>
          <li className="mr-3 font-bold"><NavLink to='/update-profile'>Update Profile</NavLink></li>
          <li className="mr-3 font-bold"><NavLink to='/my-profile'>My Profile</NavLink></li>
        </>
      ) : (
        <li></li>
      )}
    </>
  );

  <div className="navbar-end flex gap-3">
  {user ? (
    user.photoURL ? (
      <div className="relative group">
        <img
          src={user.photoURL}
          alt="user"
          className="w-10 h-10 rounded-xl object-cover"
        />
        <span className="absolute -bottom-10 left-0 right-0 w-max bg-opacity-50 text-black text-sm text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal max-w-32 overflow-hidden">
          {user.displayName}
        </span>
      </div>
    ) : (
      <FaRegUserCircle className="text-2xl" />
    )
  ) : (
    <FaRegUserCircle className="text-2xl" />
  )}
  {user ? (
    <button onClick={handleLogOut} className="btn">Sign Out</button>
  ) : (
    <Link to='/auth/login' className="btn">Sign in</Link>
  )}
</div>;

  return (
    <div className="px-5 navbarExtra">
      <div className=" navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img src={logo} alt="logo" className="w-10 md:hidden ml-2"/>
          <a className="md:ml-2 lg:ml-0 text-3xl font-bold  hidden md:block ">BEAUTIFUL <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">BANGLADESH</span></a>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            user.photoURL ? (
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <span className="absolute -bottom-10 left-0 right-0 w-max bg-opacity-50 text-black text-sm text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal max-w-32 overflow-hidden">
                  {user.displayName}
                </span>
              </div>
            ) : (
              <FaRegUserCircle className="text-2xl" />
            )
          ) : (
            <FaRegUserCircle className="text-2xl" />
          )}
          {user ? (
            <button onClick={handleLogOut} className="btn">Sign Out</button>
          ) : (
            <Link to='/auth/login' className="btn">Sign in</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
