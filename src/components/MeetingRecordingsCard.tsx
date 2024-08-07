import Image from "next/image";
import { Button } from "./ui/button";

interface MeetingRecordingProps {
  icon: string;
  date: string;
  title: string;
  endTime?: string;
  startTime: string;
  participants?: string[];
}

const MeetingRecordingsCard = ({
  icon,
  date,
  title,
  endTime,
  startTime,
}: MeetingRecordingProps) => {
  return (
    <div className="flex flex-col gap-4 justify-between w-full h-[300px] xl:h-[250px] bg-dark-3 px-6 md:px-4 py-6 md:py-4 rounded-[15px]">
      <div>
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2>{title.substring(0, 25)}</h2>
      <p>
        {date} - {startTime} - {endTime}
      </p>
      <div className="w-full flex gap-x-4 items-center justify-between">
        <Button className="bg-blue-1 h-[35px] text-[14px] flex-1">Start</Button>
        <Button className="bg-dark-4 text-[14px] flex-1">
          Copy invitation
        </Button>
      </div>
    </div>
  );
};

export default MeetingRecordingsCard;
