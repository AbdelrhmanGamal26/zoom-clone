import CallList from "@/components/CallList";
import PagesHeader from "@/components/PagesHeader";
import { MEETING_CARD_TYPE } from "@/data/constants";

const Upcoming = () => {
  return (
    <div className="text-white p-4 md:p-6 w-full">
      <PagesHeader title="upcoming" />
      <CallList type={MEETING_CARD_TYPE.UPCOMING as "upcoming"}/>
    </div>
  );
};

export default Upcoming;
