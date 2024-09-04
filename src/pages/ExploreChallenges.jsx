import React from "react";
import { useSelector } from "react-redux";
import HackathonCard from "../components/HackathonCard";

const ExploreChallenges = () => {
  const hackathons = useSelector((state) => state.hackathons.hackathons);
  console.log("hackathons", hackathons);
  return (
    <div className="bg-[#003145]">
      <h1 className="text-2xl font-semibold text-white text-center">Explore Challenges</h1>
      {
        // hackathons.map(hackathon => <HackathonCard key={hackathon.id} data={hackathon} />)
        <HackathonCard />
      }
    </div>
  );
};

export default ExploreChallenges;
