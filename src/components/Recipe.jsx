import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Rating from "react-rating";

const Recipe = ({ recipe }) => {
  const { name, ingredients, method, rating } = recipe;
  console.log(recipe);
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-5">
      <figure>
        <img
          className="h-full"
          src="https://img.delicious.com.au/BeKyn8Dn/del/2022/10/p69-parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-and-cabbage-slaw-176385-1.png"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          <h4 className="text-l font-light">Ingredients:</h4>
          <p>
            {ingredients?.map((ingredient, index) => (
              <span key={index}>{ingredient},</span>
            ))}
          </p>
        </div>
        <div className="">
          <h4 className="text-l font-light">Steps:</h4>
          <p>{method ? method : ""}</p>
        </div>
        <div className="flex items-center gap-3">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<StarIcon className="w-6 h-6 text-orange-300" />}
            placeholderSymbol={<StarIcon className="w-6 h-6 text-orange-300" />}
            fullSymbol={<StarIcon className="w-6 h-6 text-orange-300" />}
          />
          <p className="inline">{rating ? rating : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
