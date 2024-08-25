import Loader from "./Loader";
import { useToast } from "./ui/use-toast";
import CustomButton from "./CustomButton";
import { useCallback, useEffect, useState } from "react";
import RecordingIcon from "./myCustomIcons/RecordingIcon";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";

export const CustomRecordCallButton = () => {
  const call = useCall();
  const { toast } = useToast();
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
      toast({ title: `Failed start recording ${e}` });
    }
  }, [call, isCallRecordingInProgress, toast]);

  return (
    <CustomButton
      className="rounded-full p-2.5 bg-gray-500 hidden md:block"
      disabled={!call}
      textContent="Record call"
      onClick={toggleRecording}
    >
      <div
        className={`hover:bg-[#323B44] rounded-full outline-none ${
          isCallRecordingInProgress ? "bg-red-500" : "bg-transparent"
        }`}
      >
        {isAwaitingResponse ? <Loader /> : <RecordingIcon />}
      </div>
    </CustomButton>
  );
};
