"use client";

import Table from "@/components/Table";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import PagesHeader from "@/components/PagesHeader";
import CustomButton from "@/components/CustomButton";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

const PersonalRoom = () => {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const client = useStreamVideoClient();

  const meetingId = user?.id;

  const { call } = useGetCallById(meetingId!);

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const startMeeting = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId!);

    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <div className="text-white p-6 w-full">
      <PagesHeader title="personal room" />
      <div className="w-full flex flex-col items-start gap-4">
        <Table
          title="Topic"
          description={`${user?.username ?? "personal"} meeting room`}
        />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite Link" description={meetingLink} />
      </div>
      <div className="mt-10 flex justify-center xl:justify-start gap-10">
        <CustomButton
          className="bg-blue-1 p-2 text-[14px]"
          onClick={startMeeting}
          textContent="Start meeting"
        />
        <CustomButton
          className="bg-dark-4 p-2 text-[14px]"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link copied" });
          }}
          textContent="Copy invitation"
        />
      </div>
    </div>
  );
};

export default PersonalRoom;
