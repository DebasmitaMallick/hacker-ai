import React from "react";
import StatusBadge from "./components/StatusBadge";
import Timer from "./components/Timer";
import { Link } from "react-router-dom";

const HackathonCard = ({ data }) => {
  return (
    <Link
      to="details"
      state={{ details: data }}
    >
      <div id="hackathon-card" className="w-80 shadow justify-center">
        <div className="h-[158px] max-h-[159px]">
          <img src={data.image} alt="hackathon-image" className="w-full h-full object-cover rounded-t-2xl" />
        </div>
        <div className="p-5 bg-white min-h-52 rounded-b-xl">
          <StatusBadge status={data.status} />
          <h2 className="font-bold text-lg text-center pb-5">
            {data["challenge-name"]}
          </h2>
          <Timer
            status={data.status}
            startDateTime={data["start-date-time"]}
            endDateTime={data["end-date-time"]}
          />
        </div>
      </div>
    </Link>
  );
};

export default HackathonCard;
