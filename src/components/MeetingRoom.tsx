"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  useCall,
  CallControls,
  SpeakerLayout,
  PaginatedGridLayout,
  CallParticipantsList,
} from "@stream-io/video-react-sdk";
import { Users } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import CustomButton from "./CustomButton";
import EndCallButton from "./EndCallButton";
import { usePathname, useRouter } from "next/navigation";
import { CallLayoutType, LAYOUT_ITEMS } from "@/data/constants";
import LayoutTogglerDropdownMenuContainer from "./DropdownMenu";
import SmallScreenMeetingRoomControls from "./SmallScreenMeetingRoomControls";

const CallLayout = ({layout}: {layout: CallLayoutType}) => {
  switch (layout) {
    case LAYOUT_ITEMS.SPEAKER_RIGHT:
      return <SpeakerLayout participantsBarPosition="left" />;
    case LAYOUT_ITEMS.SPEAKER_LEFT:
      return <SpeakerLayout participantsBarPosition="right" />;
    default:
      return <PaginatedGridLayout />;
  }
};

const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>("grid");
  const [showParticipants, setShowParticipants] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const call = useCall();


  useEffect(() => {
    const endCall = async () => {
      if (!pathname.includes("/meeting")) {
        await call?.endCall();
      }
    };

    endCall();
  }, [pathname, call]);

  const handleCallEndOrLeave = async () => {
    await call?.endCall();
    router.replace("/");
  };

  return (
    <section className="flex flex-col h-screen w-full overflow-hidden pt-4 text-white">
      <div className="flex size-full items-center justify-center">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
          <CallLayout layout={layout} />
        </div>
        <div
          className={cn("h-[76vh] hidden ml-2", {
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
        <LayoutTogglerDropdownMenuContainer onSetLayout={setLayout} />
        <CustomButton
          onClick={() => setShowParticipants((prev) => !prev)}
          className="outline-none hidden md:flex justify-center items-center p-0"
        >
          <div className="p-2.5 hover:bg-[#323B44] rounded-full">
            <Users size={20} />
          </div>
        </CustomButton>
        {user?.id === call?.state.createdBy?.id && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
