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

const DropdownMenuContainer = ({
  items,
  onSetLayout,
}: DropdownMenuContainerProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded-[6px] hover:bg-blue-1">
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

export default DropdownMenuContainer;
