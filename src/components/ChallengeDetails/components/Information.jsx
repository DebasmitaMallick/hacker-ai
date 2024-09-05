import React from "react";
import { formatDateTime } from "../../../utils/utils";
import { AiOutlineClockCircle } from "react-icons/ai";

const Information = ({ details }) => {
  let timerStatus = "";
  let targetTime = "";
  if (details.status === "Upcoming") {
    timerStatus = "Starts on ";
    targetTime = details["start-date-time"];
  } else if (details.status === "Active") {
    timerStatus = "Ends on ";
    targetTime = details["end-date-time"];
  } else {
    timerStatus = "Ended on ";
    targetTime = details["end-date-time"];
  }

  targetTime = formatDateTime(targetTime);

  return (
    <div className="bg-blue py-20 px-12">
      <p className="bg-yellow-400 font-semibold text-sm w-fit px-4 py-1 rounded-sm flex gap-2 items-center mb-2">
        <AiOutlineClockCircle />
        <div>
          {timerStatus}
          {targetTime}
        </div>
      </p>
      <h1 className="text-white text-3xl font-semibold pb-6">
        {details["challenge-name"]}
      </h1>
      <p className="text-white mb-3">{details["description"]}</p>
      <div
        id="details-status-card"
        className="bg-white font-semibold w-24 text-center py-1 rounded-sm"
      >
        {details.status}
      </div>
    </div>
  );
};

export default Information;
