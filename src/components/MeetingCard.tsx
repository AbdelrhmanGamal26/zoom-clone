"use client";

import Image from "next/image";
import { useToast } from "./ui/use-toast";
import CustomButton from "./CustomButton";
import { MEETING_CARD_TYPE } from "@/data/constants";
import previous from "../../public/icons/previous.svg";
import upcoming from "../../public/icons/upcoming.svg";
import MeetingCardDateTime from "./MeetingCardDateTime";
import recordings from "../../public/icons/recordings.svg";

interface MeetingCardProps {
  date: string;
  link: string;
  title: string;
  endTime?: string;
  startTime: string;
  handleClick?: () => void;
  cardType: "upcoming" | "previous" | "recordings";
}

const MeetingCard = ({
  link,
  date,
  title,
  endTime,
  cardType,
  startTime,
  handleClick,
}: MeetingCardProps) => {
  const { toast } = useToast();

  const cardIcon = () => {
    switch (cardType) {
      case MEETING_CARD_TYPE.PREVIOUS:
        return previous;
      case MEETING_CARD_TYPE.UPCOMING:
        return upcoming;
      case MEETING_CARD_TYPE.RECORDINGS:
        return recordings;
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-between w-full h-[300px] md:h-[280px] xl:h-[250px] bg-dark-3 p-6 rounded-[15px]">
      <div>
        <Image src={cardIcon()} alt="icon" width={28} height={28} />
      </div>
      <h2 className="text-[clamp(16px,2vw,24px)] font-bold">
        {title.substring(0, 25)}
      </h2>
      <MeetingCardDateTime
        date={date}
        endTime={endTime}
        cardType={cardType}
        startTime={startTime}
      />
      <div className="flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 items-center justify-between w-full">
        {cardType !== "previous" && (
          <div className="flex items-center gap-4">
            <CustomButton
              onClick={handleClick}
              className="bg-blue-1 h-[35px] text-[14px]"
              textContent={
                cardType === "upcoming" ? "Start meeting" : "Play recording"
              }
            />
            <CustomButton
              className="bg-dark-4 text-[14px]"
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({ title: "link copied" });
              }}
              textContent={
                cardType === "upcoming" ? "Copy invitation" : "Copy link"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingCard;
