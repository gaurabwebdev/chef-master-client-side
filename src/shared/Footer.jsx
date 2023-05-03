import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-amber-700 py-4 px-8 text-gray-200 flex flex-col gap-3 md:gap-0 md:flex-row  justify-between items-center mt-8">
      <div className="flex items-center gap-2">
        <p className="text-2xl">© 2023</p>
        <div>
          <span className="text-3xl">c</span>hef_
          <span className="text-3xl">m</span>aster
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <p className="text-xl me-2">Find Us On: </p>
        <span className="cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/null/facebook-new.png"
            alt="facebook"
          />
        </span>
        <span className="cursor-pointer">
          <img
            src="https://img.icons8.com/fluency/48/null/youtube-play.png"
            alt="youtube"
          />
        </span>
        <span className="cursor-pointer">
          <img
            src="https://img.icons8.com/color/48/null/instagram-new--v1.png"
            alt="instagram"
          />
        </span>
      </div>
    </div>
  );
};

export default Footer;
