import Image from "next/image";
import { cn } from "@/lib/utils";

interface meetingCardDataTypes {
  icon: string;
  title: string;
  description: string;
  cardBgColor: string;
  clickHandler: () => void;
}

const MeetingCardAction = ({
  icon,
  title,
  description,
  cardBgColor,
  clickHandler,
}: meetingCardDataTypes) => {
  return (
    <div
      className={cn(
        "flex flex-col w-[90vw] sm:w-[40vw] lg:w-[300px] justify-between rounded-[8px] p-4 lg:p-6 cursor-pointer h-[200px]",
        cardBgColor
      )}
      onClick={clickHandler}
    >
      <div className="flex justify-center items-center w-[35px] md:w-[45px] h-[35px] md:h-[45px] rounded-[6px] bg-[#FFFFFF5E]">
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <div>
        <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold tracking-[0.5px]">
          {title}
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MeetingCardAction;
