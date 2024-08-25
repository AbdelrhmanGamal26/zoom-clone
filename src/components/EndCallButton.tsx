"use client";

import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { useCall } from "@stream-io/video-react-sdk";

const EndCallButton = () => {
  const router = useRouter();
  const call = useCall();

  const endCallHandler = async () => {
    await call?.endCall();
    router.replace("/");
  };

  return (
    <CustomButton
      className="bg-red-500 hover:bg-red-400 p-2 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] rounded-[20px]"
      onClick={endCallHandler}
      textContent="End call for everyone"
    />
  );
};

export default EndCallButton;
