"use client";

import { useEffect, useState } from "react";

const now = new Date();
  let timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  let dateString = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

const DateTimeComponent = () => {
  const [time,setTime] = useState(timeString);
  const [date,setDate] = useState(dateString);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(timeString);
      setDate(dateString);
    }, 1000)
    
    return () => clearInterval(timer);
  }, [])

  return (
    <div className="px-4 mb-4">
      <p className="text-[clamp(16px,3vw,48px)] font-black">{timeString}</p>
      <p className="text-[clamp(12px,2vw,24px)] text-blue-2 font-medium">
        {dateString}
      </p>
    </div>
  );
};

export default DateTimeComponent;
