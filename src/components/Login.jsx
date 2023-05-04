import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { login, googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const targetLocation = location.state?.from?.pathname || "/";
  console.log(targetLocation);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(targetLocation);
      })
      .catch((error) => {
        console.log(error.message);
        if ((error.message = "(auth/wrong-password)")) {
          toast("Wrong Email or Password. Please Try Again.");
        }
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(targetLocation);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubLogin = () => {
    gitHubLogin()
      .then((result) => {
        console.log(result.user);
        navigate(targetLocation);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="card mt-28 m-auto w-3/4 lg:w-2/4 bg-base-100 drop-shadow-lg">
        <div className="card-body flex flex-col justify-between items-center">
          <h2 className="card-title text-2xl mb-5">
            {" "}
            Login To Your Account ! ! !
          </h2>
          <form
            onSubmit={handleLogin}
            className="form-control w-full max-w-xs flex flex-col justify-between items-center gap-4"
          >
            <input
              required
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              required
              name="password"
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn" type="submit">
              Login
            </button>
          </form>

          <div className="mt-5">
            <div className="flex gap-5 items-center border-dotted border-2 border-sky-500 mb-4 px-12 py-2 rounded-full">
              <Link to={"/register"}>Create An Account</Link>
            </div>
            <div
              onClick={handleGoogleLogin}
              className="flex gap-5 items-center border-dotted border-2 border-sky-500 mb-4 px-12 py-1 rounded-full cursor-pointer"
            >
              <p>Continue With</p>
              <img
                src="https://img.icons8.com/color/48/null/google-logo.png"
                alt="google-sign-in"
                className="w-8"
              />
            </div>
            <div>
              <div
                onClick={handleGithubLogin}
                className="flex items-center gap-5 border-dotted border-2 border-sky-500 mb-4 px-12 py-1 rounded-full cursor-pointer"
              >
                <p>Continue With</p>
                <img
                  src="https://img.icons8.com/3d-fluency/94/null/github.png"
                  alt="google-sign-in"
                  className="w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
