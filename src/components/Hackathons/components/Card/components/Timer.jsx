import React, { useCallback, useEffect, useState } from "react";
import Button from "../../../../Button";
import { formatDateTime } from "../../../../../utils/utils";

const Timer = ({ status, startDateTime, endDateTime }) => {
    // 2024-09-11T08:23
    let targetDateTime = ''
    if(status === 'Upcoming') {
        targetDateTime = startDateTime
    }
    if(status === 'Active') {
        targetDateTime = endDateTime
    }

    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const difference = new Date(targetDateTime) - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60)
          };
        }
    
        return timeLeft;
      }, [targetDateTime]);
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, [calculateTimeLeft]);
    
  return (
    <div className="text-center">
      <p className="text-slate-700 font-semibold text-center">
        {status === "Upcoming"
          ? "Starts in"
          : status === "Active"
          ? "Ends in"
          : "Ended on"}
      </p>
      {timeLeft.days !== undefined ? (
        <div className="text-center flex gap-x-1 justify-center">
          <div className="mb-2 flex flex-col">
            <div className="font-bold text-lg text-slate-700">{timeLeft.days}</div>
            <div className="text-xs">Days</div>
          </div>
          <div>:</div>
          <div className="mb-2">
            <div className="font-bold text-lg text-slate-700">{timeLeft.hours}</div>
            <div className="text-xs">Hours</div>
          </div>
          <div>:</div>
          <div className="mb-2">
            <div className="font-bold text-lg text-slate-700">{timeLeft.minutes}</div>
            <div className="text-xs">Mins</div>
          </div>
        </div>
      ) : (
        <div className="text-center font-bold text-lg mb-6 text-slate-700">{formatDateTime(endDateTime)}</div>
      )}
      <Button classes="bg-green-700 text-white my-4">Participate Now</Button>
    </div>
  );
};

export default Timer;
