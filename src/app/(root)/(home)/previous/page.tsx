import CallList from "@/components/CallList";
import PagesHeader from "@/components/PagesHeader";

const Previous = () => {
  return (
    <div className="text-white p-6 w-full">
      <PagesHeader title="previous" />
      <CallList type="previous" />
    </div>
  );
};

export default Previous;
