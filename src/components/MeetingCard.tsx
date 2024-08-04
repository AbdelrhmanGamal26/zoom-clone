import Image from "next/image";

interface meetingCardDataTypes {
  title: string;
  description: string;
  cardBgColor: string;
  icon: string;
}

const MeetingCard = ({title, description, cardBgColor, icon}: meetingCardDataTypes) => {
  return (
    <div className={`flex flex-col justify-between rounded-[8px] p-6 cursor-pointer h-[200px]`} style={{backgroundColor: cardBgColor}}>
      <div className="flex justify-center items-center w-[45px] h-[45px] rounded-[6px] bg-[#FFFFFF5E]">
        <Image src={icon} alt="icon" width={28} height={28}/>
      </div>
      <div>
        <p className="text-[24px] font-bold tracking-[0.5px]">{title}</p>
        <p className="text-[18px]">{description}</p>
      </div>
    </div>
  )
}

export default MeetingCard;
