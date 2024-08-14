"use client";

import {
  useCall,
  VideoPreview,
  DeviceSettings,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const MeetingSetup = ({
  onSetIsSetupComplete,
}: {
  onSetIsSetupComplete: (value: boolean) => void;
}) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute: micIsMute } = useMicrophoneState();
  const { camera, isMute: cameraIsMute } = useCameraState();
  const { toast } = useToast();
  const router = useRouter();
  const call = useCall();

  if (!call) {
    throw new Error("useCall must be used within StreamCall component");
  }

  const handleBackwardNavigation = async ({ reject }: { reject: boolean }) => {
    await call?.camera.disable();
    await call?.microphone.disable();
    if (call?.state?.participantCount >= 2) {
      await call?.leave({ reject });
    }
    if (
      call?.state?.participantCount === 1 ||
      call?.state?.participantCount === 0
    ) {
      await call?.endCall();
    }
    onSetIsSetupComplete(false);
    router.replace("/");
  };

  return (
    <div className="flex flex-col h-screen w-full gap-3 text-white justify-center items-center">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview className="w-[90vw] sm:w-[50vw] md:w-[600px] h-[250px] sm:h-[300px] md:h-[450px]" />
      <div className="h-16 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-3 mt-10 mb-5 md:mt-0 md:mb-0">
        <label className="text-[12px] sm:text-[14px] md:text-[16px] flex justify-center items-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={!micIsMute}
            onClick={async () => await microphone.toggle()}
          />
          turn mic on or off
        </label>
        <label className="text-[12px] sm:text-[14px] md:text-[16px] flex justify-center items-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={!cameraIsMute}
            onClick={async () => await camera.toggle()}
          />
          turn camera on or off
        </label>
        <DeviceSettings />
      </div>
      <div className="flex items-center justify-center gap-5">
        <Button
          className="rounded-md bg-red-500 hover:bg-red-400 px-4 py-2.5"
          onClick={() => handleBackwardNavigation({ reject: true })}
        >
          Go back
        </Button>
        <Button
          className="bg-blue-1 rounded-[6px] border-none"
          onClick={() => {
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call?.id}`
            );
            toast({ title: "Link copied" });
          }}
        >
          Copy link
        </Button>
        <Button
          className="rounded-md bg-green-500 hover:bg-green-700 px-4 py-2.5"
          onClick={() => {
            call.join();
            onSetIsSetupComplete(true);
          }}
        >
          Join meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetup;
