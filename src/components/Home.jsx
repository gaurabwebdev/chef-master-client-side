import React from "react";
import ChefSection from "./ChefSection";
import HeroSlider from "../Carousel/HeroSlider";
import PartnersSection from "./PartnersSection";
import Social from "./Social";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ChefSection />
      <PartnersSection />
      <Social />
    </div>
  );
};

export default Home;
