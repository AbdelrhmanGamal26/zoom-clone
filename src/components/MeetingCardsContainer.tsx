"use client";

import { useState } from "react";
import MeetingCard from "./MeetingCard";
import MeetingModal from "./MeetingModal";
import { useRouter } from "next/navigation";
import newMeeting from "../../public/icons/add-meeting.svg";
import joinMeeting from "../../public/icons/join-meeting.svg";
import scheduleMeeting from "../../public/icons/schedule.svg";
import viewRecordings from "../../public/icons/recordings.svg";

const MeetingCardsContainer = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();

  const createMeeting = () => {};

  return (
    <div className="flex items-center justify-center flex-wrap w-[95vw] lg:w-full gap-4 mx-auto sm:mx-0 mt-6 sm:mt-16">
      <MeetingCard
        icon={newMeeting}
        title="New Meeting"
        cardBgColor="bg-[#FF742E]"
        description="Setup a new meeting"
        clickHandler={() => setMeetingState("isInstantMeeting")}
      />
      <MeetingCard
        icon={joinMeeting}
        title="Join Meeting"
        cardBgColor="bg-[#0E78F9]"
        description="Via invitation link"
        clickHandler={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingCard
        icon={scheduleMeeting}
        title="Schedule Meeting"
        cardBgColor="bg-[#830EF9]"
        description="Plan your meeting"
        clickHandler={() => setMeetingState("isScheduleMeeting")}
      />
      <MeetingCard
        icon={viewRecordings}
        title="View Recordings"
        cardBgColor="bg-[#F9A90E]"
        description="Meeting recordings"
        clickHandler={() => router.push("/recordings")}
      />

      <MeetingModal
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
        title="Start an instant meeting"
        onClose={() => setMeetingState(undefined)}
        isOpen={meetingState === "isInstantMeeting"}
      />
    </div>
  );
};

export default MeetingCardsContainer;
