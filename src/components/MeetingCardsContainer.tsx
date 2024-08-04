import { meetingCardsData } from "@/constants";
import MeetingCard from "./MeetingCard";

interface meetingCardDataTypes {
  title: string;
  description: string;
  cardBgColor: string;
  icon: string;
}

const MeetingCardsContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-20 mt-16">
      {meetingCardsData.map(
        ({ title, description, cardBgColor, icon }: meetingCardDataTypes) => {
          return (
            <MeetingCard
              key={title}
              title={title}
              description={description}
              cardBgColor={cardBgColor}
              icon={icon}
            />
          );
        }
      )}
    </div>
  );
};

export default MeetingCardsContainer;
