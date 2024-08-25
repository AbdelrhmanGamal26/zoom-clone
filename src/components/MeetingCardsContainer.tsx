"use client";

import Loader from "./Loader";
import { useState } from "react";
import { Input } from "./ui/input";
import { useUser } from "@clerk/nextjs";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import MeetingModal from "./MeetingModal";
import DatePicker from "react-datepicker";
import { useRouter } from "next/navigation";
import MeetingCardAction from "./MeetingCardAction";
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
      toast({ title: "Failed to create meeting" });
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <div className="flex items-center justify-center flex-wrap w-full gap-4 mx-auto sm:mx-0 my-6 sm:my-16">
      <MeetingCardAction
        icon={newMeeting}
        title="New Meeting"
        cardBgColor="bg-[#FF742E]"
        description="Setup a new meeting"
        clickHandler={() => setMeetingState("isInstantMeeting")}
      />
      <MeetingCardAction
        icon={joinMeeting}
        title="Join Meeting"
        cardBgColor="bg-[#0E78F9]"
        description="Via invitation link"
        clickHandler={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingCardAction
        icon={scheduleMeeting}
        title="Schedule Meeting"
        cardBgColor="bg-[#830EF9]"
        description="Plan your meeting"
        clickHandler={() => setMeetingState("isScheduleMeeting")}
      />
      <MeetingCardAction
        icon={viewRecordings}
        title="View Recordings"
        cardBgColor="bg-[#F9A90E]"
        description="Meeting recordings"
        clickHandler={() => router.push("/recordings")}
      />
      {!callDetails ? (
        <MeetingModal
          className="text-left"
          title="Create Meeting"
          handleClick={createMeeting}
          buttonText="Schedule Meeting"
          onClose={() => setMeetingState(undefined)}
          isOpen={meetingState === "isScheduleMeeting"}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base leading-[22px] text-sky-100">
              Add a description
            </label>
            <Textarea
              className="border-none text-white bg-dark-4 focus-visible:ring-0 focus-visible:ring-offset-0 mb-4"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
            <div className="flex flex-col gap-2.5">
              <label className="text-base leading-[22px] text-sky-100">
                Select date and time for the meeting
              </label>
              <DatePicker
                showTimeSelect
                selected={values.dateTime}
                onChange={(date) => setValues({ ...values, dateTime: date! })}
                className="bg-dark-4 rounded w-full p-2 focus:outline-none text-white"
              />
            </div>
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          className="text-center"
          title="Meeting created"
          image="/icons/checked.svg"
          buttonText="Copy meeting link"
          onClose={() => setMeetingState(undefined)}
          isOpen={meetingState === "isScheduleMeeting"}
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "link copied" });
          }}
        />
      )}
      <MeetingModal
        className="text-center"
        buttonText="Start meeting"
        handleClick={createMeeting}
        title="Start an instant meeting"
        onClose={() => setMeetingState(undefined)}
        isOpen={meetingState === "isInstantMeeting"}
      />
      <MeetingModal
        className="text-center"
        buttonText="Join meeting"
        title="Type the link here"
        onClose={() => setMeetingState(undefined)}
        handleClick={() => router.push(values.link)}
        isOpen={meetingState === "isJoiningMeeting"}
      >
        <label className="text-base leading-[22px] text-sky-100">
          Enter meeting link
        </label>
        <Input
          className="border-none text-white bg-dark-4 focus-visible:ring-0 focus-visible:ring-offset-0 mb-4"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
        />
      </MeetingModal>
    </div>
  );
};

export default MeetingCardsContainer;
