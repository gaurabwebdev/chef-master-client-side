import React from "react";

const Register = () => {
  return (
    <div>
      <div className="card mt-28 m-auto w-3/4 lg:w-2/4 bg-base-100 drop-shadow-lg">
        <div className="card-body flex flex-col justify-between items-center">
          <h2 className="card-title text-2xl mb-5"> Please Register ! ! !</h2>
          <div className="form-control w-full max-w-xs flex flex-col justify-between items-center gap-4">
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
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
          </div>

          <div className="mt-5">
            <div className="flex gap-5 items-center border-dotted border-2 border-sky-500 mb-4 px-12 py-1 rounded-full cursor-pointer">
              <p>Continue With</p>
              <img
                src="https://img.icons8.com/color/48/null/google-logo.png"
                alt="google-sign-in"
                className="w-8"
              />
            </div>
            <div>
              <div className="flex items-center gap-5 border-dotted border-2 border-sky-500 mb-4 px-12 py-1 rounded-full cursor-pointer">
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
    </div>
  );
};

export default Register;
