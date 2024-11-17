import React, { useContext } from "react";
import { AuthContext } from "../Context API/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser,setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const photo = data.photo.value;
    const email = data.email.value;
    const password = data.password.value;
    // console.log(name,photo,email,password)

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
      console.log(`Registration Successful`, user);

      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
      .then(()=>{
        console.log('Profile Updated')
      })
      .catch((error) => {
        console.log('Error updating profile:', error.code, error.message);
      });
      
    })
    .catch((error)=>{
      console.log(error.message, error.code)
    })
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
