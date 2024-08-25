"use client";

import Loader from "./Loader";
import MeetingCard from "./MeetingCard";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetCalls } from "@/hooks/useGetCalls";
import { MEETING_CARD_TYPE } from "@/data/constants";
import { formatDateAndTime } from "@/utils/formatDateAndTime";
import { substringFileName } from "@/utils/substringFileName";
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
      case MEETING_CARD_TYPE.PREVIOUS:
        return endedCalls;
      case MEETING_CARD_TYPE.UPCOMING:
        return upcomingCalls;
      case MEETING_CARD_TYPE.RECORDINGS:
        return recordings;
      default:
        return [];
    }
  };

  const loadNoCallsMessage = () => {
    switch (type) {
      case MEETING_CARD_TYPE.PREVIOUS:
        return "No previous meetings found";
      case MEETING_CARD_TYPE.UPCOMING:
        return "No upcoming meetings found";
      case MEETING_CARD_TYPE.RECORDINGS:
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
        toast({ title: "Too many requests. Please try again later" });
      }
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [recordedCalls, type, toast]);

  const calls = loadCalls();
  const noCallsMessage = loadNoCallsMessage();

  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <Loader />
        </div>
      )}
      <div className="overflow-y-scroll h-auto lg:h-[calc(100vh-200px)] w-full grid grid-cols-1 gap-5 md:grid-cols-2">
        {!!(calls?.length > 0) ? (
          calls?.map((meeting: Call | CallRecording) => {
            return (
              <MeetingCard
                key={(meeting as Call).id}
                title={
                  substringFileName(
                    (meeting as Call).state?.custom?.description,
                    0,
                    20
                  ) ||
                  substringFileName(
                    (meeting as CallRecording)?.filename,
                    0,
                    20
                  ) ||
                  "Personal meeting"
                }
                cardType={
                  type === MEETING_CARD_TYPE.UPCOMING
                    ? "upcoming"
                    : type === MEETING_CARD_TYPE.PREVIOUS
                    ? "previous"
                    : "recordings"
                }
                date={
                  type !== MEETING_CARD_TYPE.RECORDINGS
                    ? formatDateAndTime(
                        { dateStyle: "long" },
                        (meeting as Call)?.state?.startsAt
                      )
                    : substringFileName(
                        (meeting as CallRecording).start_time,
                        0,
                        10
                      )
                }
                startTime={
                  type !== MEETING_CARD_TYPE.RECORDINGS
                    ? formatDateAndTime(
                        { timeStyle: "short" },
                        (meeting as Call)?.state?.startsAt
                      )
                    : substringFileName(
                        (meeting as CallRecording).start_time,
                        11,
                        19
                      )
                }
                endTime={
                  type !== MEETING_CARD_TYPE.RECORDINGS
                    ? formatDateAndTime(
                        { timeStyle: "short" },
                        (meeting as Call)?.state?.endedAt
                      )
                    : substringFileName(
                        (meeting as CallRecording).end_time,
                        11,
                        19
                      )
                }
                link={
                  type === MEETING_CARD_TYPE.RECORDINGS
                    ? (meeting as CallRecording).url
                    : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                        (meeting as Call).id
                      }`
                }
                handleClick={
                  type === MEETING_CARD_TYPE.RECORDINGS
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
    </>
  );
};

export default CallList;
