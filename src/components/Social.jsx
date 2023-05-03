import React from "react";

const Social = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-5">
        Explore Your Recipe
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-3 mt-16">
        <div className="m-auto">
          <iframe
            width="375"
            height="250"
            src="https://www.youtube.com/embed/0kxuFVG-Gh4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-auto">
          <iframe
            width="375"
            height="250"
            src="https://www.youtube.com/embed/rIjk-mPG4gg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="m-auto">
          <iframe
            width="375"
            height="250"
            src="https://www.youtube.com/embed/axon9qBTmXc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Social;
