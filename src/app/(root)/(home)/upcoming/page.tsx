import CallList from "@/components/CallList";
import PagesHeader from "@/components/PagesHeader";

const Upcoming = () => {
  return (
    <div className="text-white p-4 md:p-6 w-full">
      <PagesHeader title="upcoming" />
      <CallList type="upcoming"/>
    </div>
  );
};

export default Upcoming;
