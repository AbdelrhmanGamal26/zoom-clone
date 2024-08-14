"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

const EndCallButton = () => {
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const router = useRouter();

  const call = useCall();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call?.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCallHandler = async () => {
    await call?.endCall();
    router.replace('/');
  }

  return (
    <Button className="bg-red-500 hover:bg-red-400 p-2 text-[12px] sm:text-[14px] md:text-[16px] rounded-[20px]" onClick={endCallHandler}>
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
