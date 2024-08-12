"use client";

import {
  useCall,
  VideoPreview,
  DeviceSettings,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const MeetingSetup = ({
  onSetIsSetupComplete,
}: {
  onSetIsSetupComplete: (value: boolean) => void;
}) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const router = useRouter();
  const { microphone, isMute: micIsMute } = useMicrophoneState();
  const { camera, isMute: cameraIsMute } = useCameraState();

  const call = useCall();

  if (!call) {
    throw new Error("useCall must be used within StreamCall component");
  }

  const handleBackwardNavigation = async () => {
    await call?.camera.disable();
    await call?.microphone.disable();
    await call?.endCall();
    onSetIsSetupComplete(false);
    router.replace("/");
  };

  return (
    <div className="flex flex-col h-screen w-full gap-3 text-white justify-center items-center">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="h-16 flex justify-center items-center gap-3">
        <label className="flex justify-center items-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={!micIsMute}
            onClick={async () => await microphone.toggle()}
          />
          turn mic on or off
        </label>
        <label className="flex justify-center items-center gap-2 font-medium">
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
          onClick={handleBackwardNavigation}
        >
          Go back
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
