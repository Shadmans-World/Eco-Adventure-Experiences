import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context API/AuthProvider";

const Login = () => {
    const {setUser, logInUser} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const data = e.target;
        const email = data.email.value;
        const password = data.password.value;
        console.log(email, password)
      
        logInUser(email,password)
        .then(result =>{
          const user = result.user;
          setUser(user)
          console.log('Login Successful')
        })
        .catch(error=>{
          const code = error.code;
          const message = error.message;
          console.log(code,message)
        })
    }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to={'/forgotPass'} className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center text-[15px] mb-3 text-red-600">
                <p>New to this website? <span><Link className="text-black font-bold" to='/auth/register'>Register</Link> please</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
