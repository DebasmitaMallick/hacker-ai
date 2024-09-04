import React from "react";
import StatusBadge from "./components/StatusBadge";
import Timer from "./components/Timer";



const HackathonCard = ({
  data
}) => {
  
  return (
    <div
      id="hackathon-card"
      className="max-w-80 shadow justify-center"
    >
      <img src={data.image} alt="hackathon-image" />
      <div className="p-5 bg-white min-h-52 rounded-b-xl">
        <StatusBadge status={data.status} />
        <h2 className="font-bold text-lg text-center pb-5">{data["challenge-name"]}</h2>
        <Timer status={data.status} startDateTime={data["start-date-time"]} endDateTime={data["end-date-time"]} />
      </div>
    </div>
  );
};

export default HackathonCard;