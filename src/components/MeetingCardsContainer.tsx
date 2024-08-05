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

  const createMeeting = () => {

  }

  return (
    <div className="flex items-center justify-center flex-wrap w-[95vw] lg:w-full gap-4 mx-auto sm:mx-0 mt-6 sm:mt-16">
      <MeetingCard
        title="New Meeting"
        description="Setup a new meeting"
        icon={newMeeting}
        cardBgColor="bg-[#FF742E]"
        clickHandler={() => setMeetingState("isInstantMeeting")}
      />
      <MeetingCard
        title="Join Meeting"
        description="Via invitation link"
        icon={joinMeeting}
        cardBgColor="bg-[#0E78F9]"
        clickHandler={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingCard
        title="Schedule Meeting"
        description="Plan your meeting"
        icon={scheduleMeeting}
        cardBgColor="bg-[#830EF9]"
        clickHandler={() => setMeetingState("isScheduleMeeting")}
      />
      <MeetingCard
        title="View Recordings"
        description="Meeting recordings"
        icon={viewRecordings}
        cardBgColor="bg-[#F9A90E]"
        clickHandler={() => router.push("/recordings")}
      />

      <MeetingModal 
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
      />
    </div>
  );
};

export default MeetingCardsContainer;
