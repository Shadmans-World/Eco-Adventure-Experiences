import React, { useContext, useState } from "react";
import { AuthContext } from "../Context API/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const {
    createUser,
    setUser,
    passErrors,
    setPassErrors,
    error,
    setError,
    googleSignInUser,
  } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const [visible, setVisible] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const photo = data.photo.value;
    const email = data.email.value;
    const password = data.password.value;

    
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    
    setPassErrors({
      uppercase: hasUppercase
        ? ""
        : "Password must include at least one uppercase letter.",
      lowercase: hasLowercase
        ? ""
        : "Password must include at least one lowercase letter.",
      length: isValidLength
        ? ""
        : "Password must be at least 6 characters long.",
    });

    
    if (!hasUppercase || !hasLowercase || !isValidLength) {
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
           

           
            const updatedUser = { ...user, displayName: name, photoURL: photo };
            setUser(updatedUser);

            data.reset(); 
            setError(""); 
            navigate("/"); 
          })
          .catch((err) => {
           
            setError(err.message); 
          });
      })
      .catch((err) => {
        
        setError(err.message); 
      });
  };

  const handleGoogle = () => {
    googleSignInUser()
      .then(() => {
        navigate("/"); 
      })
      .catch((err) => {
        
        setError(err.message); 
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
  Welcome! Create an account to enjoy all the amazing features and benefits we offer. Already have an account? <Link className="text-blue-500 font-bold" to="/auth/login">Log in</Link> now.
</p>

          </div>
          <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
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
                <div className="relative">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <div
                    className="absolute top-5 right-3"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                </div>

                <div className="text-red-600 mt-2">
                  {passErrors?.uppercase && <p>{passErrors.uppercase}</p>}
                  {passErrors?.lowercase && <p>{passErrors.lowercase}</p>}
                  {passErrors?.length && <p>{passErrors.length}</p>}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            
             {error && (
              <div className="form-control mb-3">
                <p className="text-center text-red-600 text-sm">{error}</p>
              </div>
            )}
            <p className="text-center mb-3 text-red-600 text-[15px]">
              Already have an account?{" "}
              <Link className="font-bold text-black" to="/auth/login" onClick={()=>setError("")}>
                Login
              </Link>{" "}
              please
            </p>

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

export default Register;
