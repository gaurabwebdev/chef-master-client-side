import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ChefCard from "./ChefCard";



const ChefSection = () => {
  const { chefInfo } = useContext(AuthContext);
  console.log(chefInfo);
  return (
    <div className="py-4">
      <h2 className="text-3xl font-semibold text-center my-5">
        Our Beloved Chefs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-20">
        {chefInfo &&
          chefInfo.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
      </div>

      
    </div>
  );
};

export default ChefSection;
