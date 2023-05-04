import React from "react";
import Marquee from "react-fast-marquee";

const PartnersSection = () => {
  return (
    <div className="mt-20 py-4">
      <h2 className="text-3xl font-semibold text-center my-5">
        Our Helping Partners
      </h2>
      <div className="">
        <Marquee>
          <img
            loading="lazy"
            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-2020-present.jpg"
            className=" w-64 h-52 mx-8 my-4 rounded-2xl"
            alt=""
          />
          <img
            loading="lazy"
            src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png"
            className="  w-64 h-52 mx-8 my-4 rounded-2xl"
            alt=""
          />
          <img
            loading="lazy"
            src="https://assets-global.website-files.com/60bded7e757b99324a8f1644/60ef0f6634c2209a153a534a_Untitled_Artwork.png"
            className=" w-64 h-52 mx-8 my-4 rounded-2xl"
            alt=""
          />
          <img
            loading="lazy"
            src="https://logos-world.net/wp-content/uploads/2021/03/Grubhub-Logo.jpg"
            className=" w-64 h-52 mx-8 my-4 rounded-2xl"
            alt=""
          />
          {/* <img loading="lazy"
              src="https://www.mindtickle.com/wp-content/uploads/2021/12/800px-ChowNow_logo.svg.png"
              className=" w-64 h-52 mx-8 my-4 rounded-2xl"
              alt=""
            /> */}
          <img
            loading="lazy"
            src="https://www.sunriseintegration.com/uploads/attachments/cktkixv521j4lyup7lekl6yq3-icon-onfleet.full.png"
            className=" w-64 h-52 mx-8 my-4 rounded-2xl"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default PartnersSection;
