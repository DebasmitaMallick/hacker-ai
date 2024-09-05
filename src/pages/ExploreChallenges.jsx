import React from "react";
import Hackathons from "../components/Hackathons/index";
import Filters from "../components/Hackathons/components/Filters";

const ExploreChallenges = () => {
  return (
    <div className="bg-blue">
      <Filters />
      <hr className="opacity-60" />
      <Hackathons />
    </div>
  );
};

export default ExploreChallenges;
