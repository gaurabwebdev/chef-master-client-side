import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, userProfile, userEmail } = useContext(AuthContext);
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, url);
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        userProfile(name, url)
          .then((result) => {
            console.log("user updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });

    userEmail(email)
      .then((result) => {
        console.log("Email Updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="card mt-28 m-auto w-3/4 lg:w-2/4 bg-base-100 drop-shadow-lg">
        <div className="card-body flex flex-col justify-between items-center">
          <h2 className="card-title text-2xl mb-5"> Please Register ! ! !</h2>
          <form
            onSubmit={handleRegistration}
            className="form-control w-full max-w-xs flex flex-col justify-between items-center gap-4"
          >
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="url"
              type="url"
              placeholder="Your Photo Url"
              className="input input-bordered w-full max-w-xs"
            />
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
              Register
            </button>
          </form>

          <div className="mt-5 flex items-center">
            <p>Already Have Account?</p>
            <Link
              className="border-dotted border-2 border-sky-500 my-4  rounded-full px-6 py-1.5 ml-3"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
