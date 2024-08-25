import CallList from "@/components/CallList";
import PagesHeader from "@/components/PagesHeader";
import { MEETING_CARD_TYPE } from "@/data/constants";

const Recordings = () => {
  return (
    <div className="text-white p-6 w-full">
      <PagesHeader title="Meetings recordings" />
      <CallList type={MEETING_CARD_TYPE.RECORDINGS as "recordings"}/>
    </div>
  );
};

export default Recordings;
