import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id: string | string[]) => {
  const { toast } = useToast();
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: { id },
        });

        if (calls.length > 0) setCall(calls[0]);

        setIsCallLoading(false);
      } catch (error) {
        toast({ title: "Failed to load call" });
        setIsCallLoading(false);
      }
    };

    loadCall();
  }, [client, id, toast]);

  return { call, isCallLoading };
};
