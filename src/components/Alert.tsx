import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { Card, CardContent } from "./ui/card";

interface PermissionCardProps {
  title: string;
  iconUrl?: string;
}

const Alert = ({ title, iconUrl }: PermissionCardProps) => {
  return (
    <section className="flex justify-center items-center h-screen w-full">
      <Card className="w-full max-w-[520px] border-none bg-dark-3 p-6 py-9 text-white">
        <CardContent>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3.5">
              {iconUrl && (
                <div className="flex-center">
                  <Image src={iconUrl} width={72} height={72} alt="icon" />
                </div>
              )}
              <p className="text-center text-xl font-semibold">{title}</p>
            </div>
            <CustomButton asChild className="bg-blue-1">
              <Link href="/">Back to Home</Link>
            </CustomButton>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Alert;
