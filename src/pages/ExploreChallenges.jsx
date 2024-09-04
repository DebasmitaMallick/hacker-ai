import React from "react";
import Hackathons from "../components/Hackathons/index";
import Filters from "../components/Hackathons/components/Filters";

const ExploreChallenges = () => {
  
  return (
    <div className="bg-[#003145] px-12">
      <h1 className="text-2xl font-semibold text-white text-center">
        Explore Challenges
      </h1>
      <Filters />
      <Hackathons />
    </div>
  );
};

export default ExploreChallenges;
