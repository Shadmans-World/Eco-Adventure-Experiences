import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context API/AuthProvider";
import { FcGoogle } from "react-icons/fc"; 
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
const Login = () => {
  const { setUser, logInUser, googleSignInUser, error, setError } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Redirect to previous page after login

  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError(""); 
        navigate(from, { replace: true }); 
      })
      .catch((error) => {
        const message = error.message;
        setError(`Error: ${message}`); 
      });
  };

  const handleGoogle = () => {
    googleSignInUser()
      .then(() => {
        setError(""); 
        navigate(from, { replace: true }); 
      })
      .catch((error) => {
        setError(`Google Sign-In Error: ${error.message}`); 
      });
  };

  return (
    <div className="mt-10">
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
  Welcome back! Please log in to access your account and enjoy all the features we offer. If you don't have an account yet, feel free to <Link className="text-blue-500 font-bold" to="/auth/register">register</Link> and get started.
</p>

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update the email state
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div
                    className="absolute right-3 top-5"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>

                <label className="label">
                  <Link
                    to="/forgotPass"
                    state={{ email }} 
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
              {/* Display Error Message */}
              {error && <p className="text-red-600 mb-3 text-center">{error}</p>}
            <div className="text-center text-[15px] mb-3 text-red-600">
              <p>
                New to this website?{" "}
                <span>
                  <Link className="text-black font-bold" to="/auth/register" onClick={()=>setError("")}>
                    Register
                  </Link>{" "}
                  please
                </span>
              </p>
            </div>

            {/* Google Sign-In Button */}
            <div className="flex flex-col justify-center items-center gap-y-2 my-3">
              <p>Or sign in with</p>
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-circle"
              >
                <FcGoogle className="w-8 h-8" />
              </button>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
