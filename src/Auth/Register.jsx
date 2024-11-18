import React, { useContext } from "react";
import { AuthContext } from "../Context API/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, setUser, passErrors, setPassErrors, error, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const photo = data.photo.value;
    const email = data.email.value;
    const password = data.password.value;

    // Validation flags
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    // Set errors based on validation
    setPassErrors({
      uppercase: hasUppercase ? "" : "Password must include at least one uppercase letter.",
      lowercase: hasLowercase ? "" : "Password must include at least one lowercase letter.",
      length: isValidLength ? "" : "Password must be at least 6 characters long.",
    });

    // If validation fails, prevent form submission
    if (!hasUppercase || !hasLowercase || !isValidLength) {
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("Registration Successful", user);

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("Profile Updated");

            // Manually update the user in the AuthContext after profile update
            const updatedUser = { ...user, displayName: name, photoURL: photo };
            setUser(updatedUser); // Update the local user object

            data.reset(); // Reset the form after successful registration
            setError(""); // Clear any previous errors
            navigate('/'); // Navigate to the home page
          })
          .catch((err) => {
            console.log("Error updating profile:", err.code, err.message);
            setError(err.message); // Display only the error message
          });
      })
      .catch((err) => {
        console.log(err.message, err.code);
        setError(err.message); // Set the error message to show to the user
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div className="text-red-600 mt-2">
                  {passErrors.uppercase && <p>{passErrors.uppercase}</p>}
                  {passErrors.lowercase && <p>{passErrors.lowercase}</p>}
                  {passErrors.length && <p>{passErrors.length}</p>}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center mb-3 text-red-600 text-[15px]">Already have an account? <Link className="font-bold text-black" to='/auth/login'>Login</Link> please</p>
            {error && <p className="text-red-600 text-center mb-3">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
