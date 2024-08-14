"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { LayoutList } from "lucide-react";
import { CallLayoutType } from "@/constants";

interface DropdownMenuContainerProps {
  items: string[];
  onSetLayout: (value: CallLayoutType) => void;
}

const LayoutTogglerDropdownMenuContainer = ({
  items,
  onSetLayout,
}: DropdownMenuContainerProps) => {
  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2.5 rounded-full hover:bg-[#323B44]">
          <LayoutList size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-dark-4 text-white border-none">
          {items.map((item) => (
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
