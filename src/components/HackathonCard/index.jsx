import React, { useState } from "react";
import img from "../../assets/cardimage/Group 1000002466.png"
import StatusBadge from "./components/StatusBadge";
import Timer from "./components/Timer";

const HackathonCard = ({
  data
}) => {
    data = {
        id: "0.3071462518664867jgiuguig",
        "challenge-name": "Data Science Bootcamp",
        "start-date-time": "2024-10-04",
        "end-date-time": "2024-11-11",
        description: "kihilhi",
        level: "Easy",
        image: "",
        status: "Upcoming"
      }
  
  return (
    <div
      id="hackathon-card"
      className="max-w-80 border rounded-lg border-none shadow"
    >
      <img src={img} alt="hackathon-image" />
      <div className="p-5 bg-white">
        <StatusBadge status={data.status} />
        <h2 className="font-bold text-lg text-center pb-5">{data["challenge-name"]}</h2>
        <Timer status={data.status} startDateTime={data["start-date-time"]} endDateTime={data["end-date-time"]} />
      </div>
    </div>
  );
};

export default HackathonCard;
