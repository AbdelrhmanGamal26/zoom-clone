interface MeetingCardDateTimeProps {
  date: string;
  endTime?: string;
  cardType: string;
  startTime: string;
}

const MeetingCardDateTime = ({
  date,
  startTime,
  cardType,
  endTime,
}: MeetingCardDateTimeProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p>Date: {date}</p>
      <div className="flex flex-col lg:flex-row gap-2">
        <p>Start time: {startTime}</p>
        {cardType !== "upcoming" && <span className="hidden lg:block">&</span>}
        <p>End time: {endTime && cardType !== "upcoming" && endTime}</p>
      </div>
    </div>
  );
};

export default MeetingCardDateTime;
