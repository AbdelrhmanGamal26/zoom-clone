"use client";

import { useGetCalls } from "@/hooks/useGetCalls";

const FirstUpcomingMeetingTime = () => {
  const { upcomingCalls } = useGetCalls() || [];

  const upcomingCallsCount = upcomingCalls.length;

  const upcomingDate =
    upcomingCalls[upcomingCallsCount - 1]?.state?.startsAt?.toLocaleString();

  return (
    <p className="bg-light-1 w-fit text-[clamp(12px,2vw,18px)] px-4 py-2 rounded-[8px] text-blue-3">
      {upcomingCallsCount > 0
        ? `Upcoming meeting happens at: ${upcomingDate}`
        : "No scheduled upcoming meetings"}
    </p>
  );
};

export default FirstUpcomingMeetingTime;
