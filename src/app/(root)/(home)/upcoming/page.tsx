import PagesHeader from "@/components/PagesHeader";
import UpcomingMeetingCard from "@/components/UpcomingMeetingCard";

const Upcoming = () => {
  return (
    <div className="text-white p-4 md:p-6 w-full">
      <PagesHeader title="upcoming" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-4">
        <UpcomingMeetingCard
          icon="/icons/upcoming.svg"
          title="hello"
          date={new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          }).format(new Date())}
          startTime={new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          participants={[
            "/images/avatar-1.jpeg",
            "/images/avatar-2.jpeg",
            "/images/avatar-3.png",
            "/images/avatar-4.png",
          ]}
        />
        <UpcomingMeetingCard
          icon="/icons/upcoming.svg"
          title="hello"
          date={new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
          }).format(new Date())}
          startTime={new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          participants={[
            "/images/avatar-1.jpeg",
            "/images/avatar-2.jpeg",
            "/images/avatar-3.png",
            "/images/avatar-4.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Upcoming;
