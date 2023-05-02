import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const ChefDetails = () => {
  const { chefInfo } = useContext(AuthContext);
  const { id } = useParams();
  const singleChef = chefInfo.find((chef) => chef.id == id);
  const {
    chef_name,
    bio,
    number_of_rcipes,
    profile_image,
    total_likes,
    years_of_experience,
  } = singleChef;
  console.log(singleChef);
  return (
    <div className="px-12 py-6">
      <div className="flex justify-evenly items-center gap-2 mt-10">
        <div className="rounded-lg ml-12 p-3 border border-1">
          <img className="rounded-lg" src={profile_image} alt="" />
        </div>

        <div className="flex justify-center  items-end flex-col gap-5 text-end w-2/3 ">
          <h2 className="card-title">{chef_name ? chef_name : ""}</h2>
          <p className="">{bio ? bio : ""}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChefDetails;
