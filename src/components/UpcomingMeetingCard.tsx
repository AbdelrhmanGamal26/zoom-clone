"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface UpcomingMeetingCardProps {
  icon: string;
  date: string;
  title: string;
  startTime: string;
  participants?: string[];
}
const UpcomingMeetingCard = ({
  icon,
  date,
  title,
  startTime,
  participants,
}: UpcomingMeetingCardProps) => {
  return (
    <div className="flex flex-col gap-4 justify-between w-full h-[300px] xl:h-[250px] bg-dark-3 px-6 md:px-4 py-6 md:py-4 rounded-[15px]">
      <div>
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2>{title.substring(0, 25)}</h2>
      <p>
        {date} - {startTime}
      </p>
      <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 items-center justify-between w-full">
        <div className="flex">
          {participants?.map((part, idx) => {
            return (
              <div
                key={part}
                className={`w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full overflow-hidden ${
                  idx === 0 ? "" : "ms-[-15px]"
                } border-[5px] border-dark-1`}
              >
                <Image
                  src={part}
                  alt="avatar"
                  width={60}
                  height={60}
                  className="w-full h-full contain"
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-blue-1 h-[35px] text-[14px]">Start</Button>
          <Button className="bg-dark-4 text-[14px]">Copy invitation</Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetingCard;
