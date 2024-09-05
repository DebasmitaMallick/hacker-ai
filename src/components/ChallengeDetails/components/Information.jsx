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
    <div className="bg-darkBlue">
      <p className="bg-yellow-400 font-semibold text-sm w-fit px-4 py-1 rounded-sm flex gap-2 items-center">
        <AiOutlineClockCircle />
        <div>
        {timerStatus}
        {targetTime}
        </div>
      </p>
      <h1 className="text-white">{details["challenge-name"]}</h1>
      <p className="text-white">{details["description"]}</p>
    </div>
  );
};

export default Information;
