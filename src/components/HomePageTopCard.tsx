import Image from "next/image";
import DateTimeComponent from "./DateTimeComponent";
import homeBanner from "../../public/images/hero-background.png";
import FirstUpcomingMeetingTime from "./FirstUpcomingMeetingTime";

const HomePageTopCard = () => {
  return (
    <div className="relative mt-6 w-[90vw] lg:w-[calc(80vw-275px)] h-[150px] sm:h-[200px] lg:[250px] xl:h-[300px] mx-auto rounded-[8px] lg:rounded-[20px] overflow-hidden">
      <div className="w-full h-full">
        <Image
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-full cover"
        />
      </div>
      <div className="absolute left-0 top-0 flex flex-col justify-between h-full px-2 sm:px-4 pt-4 xl:pt-10 xl:pb-6">
        <FirstUpcomingMeetingTime />
        <DateTimeComponent />
      </div>
    </div>
  );
};

export default HomePageTopCard;
