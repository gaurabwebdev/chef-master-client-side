import React from "react";
import ChefSection from "./ChefSection";
import HeroSlider from "../Carousel/HeroSlider";
import PartnersSection from "./PartnersSection";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ChefSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
