"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
// import MeetingCardParticipants from "./MeetingCardParticipants";

interface MeetingCardProps {
  icon: string;
  date: string;
  link: string;
  title: string;
  endTime?: string;
  startTime: string;
  // participants?: any[];
  handleClick?: () => void;
  cardType: "upcoming" | "previous" | "recording";
}

const MeetingCard = ({
  icon,
  link,
  date,
  title,
  endTime,
  cardType,
  startTime,
  handleClick,
}: // participants,
MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-4 justify-between w-full h-[300px] md:h-[280px] xl:h-[250px] bg-dark-3 p-6 rounded-[15px]">
      <div>
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="text-[clamp(16px,2vw,24px)] font-bold">
        {title.substring(0, 25)}
      </h2>
      <div className="flex flex-col gap-4">
        <p>Date: {date}</p>
        <div className="flex flex-col lg:flex-row gap-2">
          <p>Start time: {startTime}</p>
          {cardType !== "upcoming" && <span className="hidden lg:block">&</span>}
          <p>End time: {endTime && cardType !== "upcoming" && endTime}</p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 items-center justify-between w-full">
        {/* {cardType !== "recording" && (
          <MeetingCardParticipants participants={participants} />
        )} */}
        {cardType !== "previous" && (
          <div className="flex items-center gap-4">
            <Button
              className="bg-blue-1 h-[35px] text-[14px]"
              onClick={handleClick}
            >
              {cardType === "upcoming" ? "Start" : "Play"}
            </Button>
            <Button
              className="bg-dark-4 text-[14px]"
              onClick={() => {
                console.log(link);
                navigator.clipboard.writeText(link);
                toast({ title: "link copied" });
              }}
            >
              Copy invitation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;
