"use client";

import { useEffect, useState } from "react";

const DateTimeComponent = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 mb-4">
      <p className="text-[clamp(16px,3vw,48px)] font-black">{time}</p>
      <p className="text-[clamp(12px,2vw,24px)] text-blue-2 font-medium">
        {date}
      </p>
    </div>
  );
};

export default DateTimeComponent;
