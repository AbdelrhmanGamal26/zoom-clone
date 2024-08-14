"use client";

import Loader from "./Loader";
import MeetingCard from "./MeetingCard";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";

interface CallListType {
  type: "upcoming" | "previous" | "recordings";
}

const CallList = ({ type }: CallListType) => {
  const router = useRouter();
  const { toast } = useToast();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const { endedCalls, upcomingCalls, recordedCalls, isLoading } = useGetCalls();

  const loadCalls = () => {
    switch (type) {
      case "previous":
        return endedCalls;
      case "upcoming":
        return upcomingCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  };

  const loadNoCallsMessage = () => {
    switch (type) {
      case "previous":
        return "No previous meetings found";
      case "upcoming":
        return "No upcoming meetings found";
      case "recordings":
        return "No recorded meetings found";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          recordedCalls?.map((meeting) => meeting?.queryRecordings()) ?? []
        );

        const recordings = callData
          ?.filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch (error) {
        console.log(error);
        toast({ title: "Too many requests. Please try again later" });
      }
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [recordedCalls, type]);

  if (isLoading) return <Loader />;

  const calls = loadCalls();
  const noCallsMessage = loadNoCallsMessage();

  return (
    <div className="overflow-y-scroll h-auto lg:h-[calc(100vh-200px)] grid grid-cols-1 gap-5 md:grid-cols-2">
      {calls && calls?.length > 0 ? (
        calls?.map((meeting: Call | CallRecording) => {
          return (
            <MeetingCard
              key={(meeting as Call).id}
              title={
                (meeting as Call)?.state?.custom?.description?.substring(
                  0,
                  20
                ) ||
                (meeting as CallRecording).filename?.substring(0, 20) ||
                "Personal meeting"
              }
              cardType={
                type === "upcoming"
                  ? "upcoming"
                  : type === "previous"
                  ? "previous"
                  : "recording"
              }
              icon={
                type === "upcoming"
                  ? "/icons/upcoming.svg"
                  : type === "previous"
                  ? "/icons/previous.svg"
                  : "/icons/recordings.svg"
              }
              date={
                type !== "recordings"
                  ? new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long",
                    }).format((meeting as Call)?.state?.startsAt)
                  : (meeting as CallRecording).start_time.substring(0, 10)
              }
              startTime={
                type !== "recordings"
                  ? new Intl.DateTimeFormat("en-US", {
                      timeStyle: "short",
                    }).format((meeting as Call)?.state?.startsAt)
                  : (meeting as CallRecording).start_time.substring(11, 19)
              }
              endTime={
                type !== "recordings"
                  ? new Intl.DateTimeFormat("en-US", {
                      timeStyle: "short",
                    }).format((meeting as Call)?.state?.endedAt)
                  : (meeting as CallRecording).end_time.substring(11, 19)
              }
              link={
                type === "recordings"
                  ? (meeting as CallRecording).url
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                      (meeting as Call).id
                    }`
              }
              handleClick={
                type === "recordings"
                  ? () => router.push(`${(meeting as CallRecording).url}`)
                  : async () => {
                      router.push(`/meeting/${(meeting as Call).id}`);
                      await (meeting as Call).update({
                        starts_at: new Date().toISOString(),
                      });
                    }
              }
            />
          );
        })
      ) : (
        <h1 className="text-sm sm:text-lg lg:text-2xl font-bold text-white">
          {noCallsMessage}
        </h1>
      )}
    </div>
  );
};

export default CallList;
