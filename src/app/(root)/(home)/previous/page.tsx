import CallList from "@/components/CallList";
import PagesHeader from "@/components/PagesHeader";
import { MEETING_CARD_TYPE } from "@/data/constants";

const Previous = () => {
  return (
    <div className="text-white p-6 w-full">
      <PagesHeader title="previous" />
      <CallList type={MEETING_CARD_TYPE.PREVIOUS as "previous"} />
    </div>
  );
};

export default Previous;
