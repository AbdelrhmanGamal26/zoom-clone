"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  useCall,
  CallControls,
  SpeakerLayout,
  PaginatedGridLayout,
  CallParticipantsList,
} from "@stream-io/video-react-sdk";
import { Users } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import EndCallButton from "./EndCallButton";
import { CallLayoutType } from "@/constants";
import LayoutTogglerDropdownMenuContainer from "./DropdownMenu";
import SmallScreenMeetingRoomControls from "./SmallScreenMeetingRoomControls";

const layoutItems = ["grid", "speaker-left", "speaker-right"];

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("grid");
  const [showParticipants, setShowParticipants] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const call = useCall();

  const CallLayout = () => {
    switch (layout) {
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition="right" />;
      default :
        return <PaginatedGridLayout />;
    }
  };

  const handleCallEndOrLeave = async () => {
    await call?.endCall();
    router.replace("/");
  };

  return (
    <section className="flex flex-col h-[calc(100vh)-80px] sm:h-screen w-full overflow-hidden pt-4 text-white">
      <div className="flex size-full items-center justify-center">
        <div className="flex flex-col md:flex-row md:max-w-[1000px]">
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
      <div className="flex flex-wrap w-full items-center justify-center gap-5 mt-6 pb-10">
        <div className="hidden sm:block">
          <CallControls onLeave={handleCallEndOrLeave} />
        </div>
        <SmallScreenMeetingRoomControls />
        <LayoutTogglerDropdownMenuContainer
          items={layoutItems}
          onSetLayout={setLayout}
        />
        <button
          onClick={() => setShowParticipants((prev) => !prev)}
          className="outline-none hidden md:block"
        >
          <div className="p-2.5 hover:bg-[#323B44] rounded-full">
            <Users size={20} />
          </div>
        </button>
        {user?.id === call?.state?.createdBy?.id && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
