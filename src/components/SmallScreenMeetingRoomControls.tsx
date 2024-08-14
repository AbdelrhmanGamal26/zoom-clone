"use state";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import CameraIcon from "./myCustomIcons/CameraIcon";
import EndCallIcon from "./myCustomIcons/EndCallIcon";
import MicrophoneIcon from "./myCustomIcons/MicrophoneIcon";
import MutedCameraIcon from "./myCustomIcons/MutedCameraIcon";
import { CustomRecordCallButton } from "./CustomRecordingCallButton";
import MutedMicrophoneIcon from "./myCustomIcons/MutedMicrophoneIcon";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

const SmallScreenMeetingRoomControls = () => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const { microphone, isMute: micIsMute } = useMicrophoneState();
  const { camera, isMute: cameraIsMute } = useCameraState();
  const router = useRouter();
  const call = useCall();

  const endCallHandler = async ({ reject }: { reject?: boolean }) => {
    await call?.camera.disable();
    await call?.microphone.disable();
    if (call?.state?.participantCount !== 1) {
      await call?.leave({ reject });
    }
    if (call?.state?.participantCount === 1) {
      await call?.endCall();
    }
    router.replace("/");
  };

  return (
    <div className="flex sm:hidden items-center gap-3">
      <Button
        onClick={() => microphone.toggle()}
        className={`rounded-full outline-none ${
          micIsMute ? "bg-red-500" : "bg-gray-500"
        }`}
      >
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          {micIsMute ? <MutedMicrophoneIcon /> : <MicrophoneIcon />}
        </div>
      </Button>
      <Button
        onClick={() => camera.toggle()}
        className={`rounded-full outline-none ${
          cameraIsMute ? "bg-red-500" : "bg-gray-500"
        }`}
      >
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          {cameraIsMute ? <MutedCameraIcon /> : <CameraIcon />}
        </div>
      </Button>
      <Button
        className="bg-red-500 rounded-full outline-none"
        onClick={() => endCallHandler({ reject: true })}
      >
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <EndCallIcon />
        </div>
      </Button>
      <CustomRecordCallButton />
    </div>
  );
};

export default SmallScreenMeetingRoomControls;
