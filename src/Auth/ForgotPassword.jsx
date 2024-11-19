

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Context API/AuthProvider"; // Assuming you have auth exported from context provider

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    // Check if the email is passed via the state from the Login page
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleResetPassword = (e) => {
        e.preventDefault();

        // Send password reset email through Firebase Auth
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent! Check your inbox.");
                // Redirect to Gmail by opening a new tab with Gmail
                window.open("https://mail.google.com", "_blank");
                navigate("/auth/login"); // Redirect back to login
            })
            .catch((error) => {
                setError(`Error: ${error.message}`);
            });
    };

    return (
        <div className="mt-10">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleResetPassword} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                    value={email || ""} // Ensure email value is always a string
                                    onChange={(e) => setEmail(e.target.value)} // Allow email to be changed
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                        {error && <p className="text-red-600 text-center mt-3">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;


