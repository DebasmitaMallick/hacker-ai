import React from "react";
import Hackathons from "../components/Hackathons/index";
import Filters from "../components/Hackathons/components/Filters";

const ExploreChallenges = () => {
  return (
    <div className="pb-20">
      <Filters />
      {/* <hr className="opacity-60" /> */}
      <Hackathons />
    </div>
  );
};

export default ExploreChallenges;
