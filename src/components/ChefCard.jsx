import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    chef_name,
    id,
    number_of_rcipes,
    profile_image,
    total_likes,
    years_of_experience,
  } = chef;
  //   console.log(chef);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={profile_image}
          alt="Shoes"
          className="rounded-xl h-60 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{chef_name}</h2>
        <div className="">
          <p>Total Recipes: {number_of_rcipes}</p>
          <p>Experience: {years_of_experience} years</p>
        </div>
        <div className="card-actions">
          <Link to={`/chefs/${id}`}>
            <button className="btn bg-amber-700 border-0">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
