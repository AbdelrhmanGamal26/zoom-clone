import Image from "next/image";
import homeBanner from "../../public/images/hero-background.png";

const HomePageTopCard = () => {
  return (
    <div className="relative mt-6 w-fit mx-auto rounded-[20px] overflow-hidden">
      <Image src={homeBanner} alt="homeBanner" />
      <div className="absolute left-0 top-0 flex flex-col justify-between h-full px-12 pt-10 pb-6">
        <p className="bg-light-1 w-fit px-4 py-2 rounded-[8px] text-blue-3">Upcoming meeting at: 12:30 PM</p>
        <div>
          <p className="text-[72px] font-black">
            12:04 <span className="text-[24px] font-medium ms-[-8px]">PM</span>
          </p>
          <p className="text-[24px] text-blue-2 font-medium">Friday, 29 March 2024</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageTopCard;
