import MeetingRecordingsCard from "@/components/MeetingRecordingsCard";
import PagesHeader from "@/components/PagesHeader";

const Recordings = () => {
  return (
    <div className="text-white p-6 w-full">
      <PagesHeader title="Meeting recordings" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-4">
        <MeetingRecordingsCard
          icon="/icons/recordings.svg"
          title="hello"
          date={new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          }).format(new Date())}
          startTime={new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          endTime={new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
        <MeetingRecordingsCard
          icon="/icons/recordings.svg"
          title="hello"
          date={new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          }).format(new Date())}
          startTime={new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          endTime={new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      </div>
    </div>
  );
};

export default Recordings;
