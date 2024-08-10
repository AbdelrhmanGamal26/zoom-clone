"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  useCall,
  CallControls,
  SpeakerLayout,
  CallStatsButton,
  PaginatedGridLayout,
  CallParticipantsList,
} from "@stream-io/video-react-sdk";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";
import EndCallButton from "./EndCallButton";
import { CallLayoutType } from "@/constants";
import DropdownMenuContainer from "./DropdownMenu";

const layoutItems = ["grid", "speaker-left", "speaker-right"];

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);
  const router = useRouter();
  const call = useCall();

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition="right" />;
      default:
        return <SpeakerLayout participantsBarPosition="left" />;
    }
  };

  const handleCallEndOrLeave = async () => {
    await call?.endCall();
    router.replace("/");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-4 flex flex-wrap w-full items-center justify-center gap-5">
        <CallControls onLeave={handleCallEndOrLeave} />
        <DropdownMenuContainer items={layoutItems} onSetLayout={setLayout} />
        <div className="hidden lg:block">
          <CallStatsButton />
        </div>
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="p-2 rounded-[6px]">
            <Users size={20} />
          </div>
        </button>
        <EndCallButton />
      </div>
    </section>
  );
};

export default MeetingRoom;
