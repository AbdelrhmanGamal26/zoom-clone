import Image from "next/image";

interface MeetingCardParticipantsProps {
  participants?: any[];
}

const MeetingCardParticipants = ({
  participants,
}: MeetingCardParticipantsProps) => {
  return (
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
  );
};

export default MeetingCardParticipants;
