"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import PagesHeader from "@/components/PagesHeader";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:gap-4 xl:flex-row xl:items-center w-full">
      <h1 className="text-[clamp(14px,1.5vw,18px)] font-medium text-sky-100">
        {title}
      </h1>
      <p className="truncate font-medium text-[clamp(12px,1.5vw,16px)] w-[99%] sm:w-auto">
        {description}
      </p>
    </div>
  );
};

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
        <Button className="bg-blue-1 p-2 text-[14px]" onClick={startMeeting}>
          Start meeting
        </Button>
        <Button
          className="bg-dark-4 p-2 text-[14px]"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link copied" });
          }}
        >
          Copy invitation
        </Button>
      </div>
    </div>
  );
};

export default PersonalRoom;
