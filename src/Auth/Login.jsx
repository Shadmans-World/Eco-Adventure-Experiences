

import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context API/AuthProvider";
import { FcGoogle } from "react-icons/fc"; // Import the Google icon

const Login = () => {
    const { setUser, logInUser, googleSignInUser, error, setError } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; // Redirect to previous page after login

    const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const data = e.target;
        const email = data.email.value;
        const password = data.password.value;

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError(""); // Clear any previous error
                navigate(from, { replace: true }); // Redirect to the requested page or home
            })
            .catch((error) => {
                const message = error.message;
                setError(`Error: ${message}`); // Display more detailed error message
            });
    };

    const handleGoogle = () => {
        googleSignInUser()
            .then(() => {
                setError(""); // Clear any previous errors
                navigate(from, { replace: true }); // Redirect to the requested page or home
            })
            .catch((error) => {
                setError(`Google Sign-In Error: ${error.message}`); // Show error message
            });
    };

    return (
        <div className="mt-10">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
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
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <Link
                                        to="/forgotPass"
                                        state={{ email }} // Pass the email via state
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
                        <div className="text-center text-[15px] mb-3 text-red-600">
                            <p>
                                New to this website?{" "}
                                <span>
                                    <Link className="text-black font-bold" to="/auth/register">
                                        Register
                                    </Link>{" "}
                                    please
                                </span>
                            </p>
                        </div>

                        {/* Google Sign-In Button */}
                        <div className="flex flex-col justify-center items-center gap-y-2 my-3">
                            <p>Or sign in with</p>
                            <button onClick={handleGoogle} className="btn btn-outline btn-circle">
                                <FcGoogle className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Display Error Message */}
                        {error && <p className="text-red-600 mb-3 text-center">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;



