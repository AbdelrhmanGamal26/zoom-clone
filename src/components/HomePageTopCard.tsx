import Image from "next/image";
import homeBanner from "../../public/images/hero-background.png";

const HomePageTopCard = () => {
  const now = new Date();
  let timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let dateString = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);

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
        <p className="bg-light-1 w-fit text-[clamp(12px,2vw,18px)] px-4 py-2 rounded-[8px] text-blue-3">
          Upcoming meeting at: 12:30 PM
        </p>
        <div className="px-4 mb-4">
          <p className="text-[clamp(16px,3vw,48px)] font-black">{timeString}</p>
          <p className="text-[clamp(12px,2vw,24px)] text-blue-2 font-medium">
            {dateString}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageTopCard;
