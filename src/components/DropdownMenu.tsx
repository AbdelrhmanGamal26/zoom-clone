"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { LayoutList } from "lucide-react";
import { CallLayoutType } from "@/data/constants";

interface DropdownMenuContainerProps {
  onSetLayout: (value: CallLayoutType) => void;
}

const layoutItems = ["grid", "speaker-left", "speaker-right"];

const LayoutTogglerDropdownMenuContainer = ({
  onSetLayout,
}: DropdownMenuContainerProps) => {
  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2.5 rounded-full hover:bg-[#323B44]">
          <LayoutList size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-dark-4 text-white border-none">
          {layoutItems.map((item) => (
            <DropdownMenuItem
              key={item}
              onClick={() => onSetLayout(item.toLowerCase() as CallLayoutType)}
            >
              {item}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LayoutTogglerDropdownMenuContainer;
