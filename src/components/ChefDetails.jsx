import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Recipe from "./Recipe";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    recipes,
  } = singleChef;
  console.log(singleChef);
  return (
    <div className="px-12 py-6">
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-2 mt-10">
        <div className="rounded-lg p-3 border border-1">
          <LazyLoadImage
            className="rounded-lg"
            src={profile_image ? profile_image : ""}
            alt=""
          />
        </div>

        <div className="flex justify-center items-start  md:items-end flex-col gap-5 text-start md:text-end w-2/3 ">
          {chef_name && <h2 className="card-title">{chef_name}</h2>}
          <p className="">{bio ? bio : ""}</p>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col lg:flex-row py-3 px-5 gap-10">
        <div className="flex lg:flex-col">
          <div className="stat">
            <div className="stat-value text-primary text-xl">
              {total_likes} Likes
            </div>
          </div>
          <div className="stat">
            <div className="stat-value text-primary text-xl">
              {years_of_experience} Years
            </div>
            <p className="text-xl">of Experience</p>
          </div>
          <div className="stat">
            <div className="stat-value text-primary text-xl">
              {number_of_rcipes} Recipes
            </div>
            <p className="text-xl"> waiting for you</p>
          </div>
        </div>
        <div className="mt-8 px-8">
          {recipes
            ? recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe}></Recipe>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
