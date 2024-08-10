"use client";

import Loader from "./Loader";
import { useState } from "react";
import MeetingCard from "./MeetingCard";
import { useUser } from "@clerk/nextjs";
import MeetingModal from "./MeetingModal";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import newMeeting from "../../public/icons/add-meeting.svg";
import joinMeeting from "../../public/icons/join-meeting.svg";
import scheduleMeeting from "../../public/icons/schedule.svg";
import viewRecordings from "../../public/icons/recordings.svg";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const initialValues = {
  link: "",
  description: "",
  dateTime: new Date(),
};

const MeetingCardsContainer = () => {
  const router = useRouter();
  const { user } = useUser();
  const { toast } = useToast();
  const client = useStreamVideoClient();
  const [values, setValues] = useState(initialValues);
  const [callDetails, setCallDetails] = useState<Call>();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      // this condition here triggers a toast that tells the user to set a date and time for a scheduled meeting
      if (!values.dateTime) {
        toast({ title: "Please select a date and time for the meeting" });
        return;
      }

      // generating a random, unique call id
      const id = crypto.randomUUID();

      // creating a call object from the client that receives two parameters: a call type and a call id
      const call = client.call("default", id);

      if (!call) throw new Error("Failed to create a call");

      // the time the meeting starts at
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({ title: "Meeting created" });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create meeting" });
    }
  };

  if (!client || !user) return <Loader />;

  // const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <div className="flex items-center justify-center flex-wrap w-full gap-4 mx-auto sm:mx-0 mt-6 sm:mt-16">
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
