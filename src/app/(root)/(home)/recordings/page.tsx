import CallList from "@/components/CallList";
import MeetingCard from "@/components/MeetingCard";
import PagesHeader from "@/components/PagesHeader";

const Recordings = () => {
  return (
    <div className="text-white p-6 w-full">
      <PagesHeader title="Meetings recordings" />
      <CallList type="recordings"/>
    </div>
  );
};

export default Recordings;
