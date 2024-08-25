import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import CustomButton from "./CustomButton";
import { Dialog, DialogContent, DialogTitle } from "./ui/Dialog";

interface MeetingModalProps {
  title: string;
  image?: string;
  isOpen: boolean;
  className?: string;
  buttonText: string;
  buttonIcon?: string;
  onClose: () => void;
  children?: ReactNode;
  handleClick?: () => void;
}

const MeetingModal = ({
  title,
  image,
  isOpen,
  onClose,
  children,
  className,
  buttonText,
  buttonIcon,
  handleClick,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "w-[90vw] sm:w-full max-w-[520px] bg-dark-2 py-9 border-none modalStyles",
          className
        )}
      >
        <DialogTitle className="text-white text-xl font-bold">
          {title}
        </DialogTitle>
        <div className="flex justify-center">
          {image && <Image src={image} alt="image" width={72} height={72} />}
        </div>
        {children}
        <CustomButton
          className="bg-blue-1 mt-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={handleClick}
        >
          {buttonIcon && (
            <Image src={buttonIcon} alt="buttonIcon" width={13} height={13} />
          )}
          &nbsp;
          {buttonText || "Schedule meeting"}
        </CustomButton>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
