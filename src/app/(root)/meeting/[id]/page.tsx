"use client";

import { useState } from "react";
import Alert from "@/components/Alert";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

const MeetingPage = () => {
  const { id } = useParams();
  const { user, isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (!call) return (
    <p className="text-center text-3xl font-bold text-white">
      Call Not Found
    </p>
  );

  if (!isLoaded || isCallLoading) return <Loader />;

  const notAllowed = call.type === 'invited' && (!user || !call?.state.members.find((m) => m.user.id === user.id));

  if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

  return (
    <main className="text-white w-full h-screen">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup onSetIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
