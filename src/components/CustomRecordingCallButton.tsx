import { Button } from "./ui/button";
import { useCallback, useEffect, useState } from "react";
import RecordingIcon from "./myCustomIcons/RecordingIcon";
import RecordingStateLoader from "./RecordingStateLoader";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";


export const CustomRecordCallButton = () => {
  const call = useCall();
  const { useIsCallRecordingInProgress } = useCallStateHooks();
  const isCallRecordingInProgress = useIsCallRecordingInProgress();
  const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);

  useEffect(() => {
    setIsAwaitingResponse((isAwaiting) => {
      if (isAwaiting) return false;
      return isAwaiting;
    });
  }, [isCallRecordingInProgress]);

  const toggleRecording = useCallback(async () => {
    try {
      setIsAwaitingResponse(true);
      if (isCallRecordingInProgress) {
        await call?.stopRecording();
      } else {
        await call?.startRecording();
      }
    } catch (e) {
      console.error(`Failed start recording`, e);
    }
  }, [call, isCallRecordingInProgress]);

  return (
    <Button className="rounded-full p-2.5 bg-gray-500 hidden md:block" disabled={!call} title="Record call" onClick={toggleRecording}>
      <div
        className={`hover:bg-[#323B44] rounded-full outline-none ${
          isCallRecordingInProgress ? "bg-red-500" : "bg-transparent"
        }`}
      >
        {isAwaitingResponse ? <RecordingStateLoader /> : <RecordingIcon />}
      </div>
    </Button>
  );
};
