"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";

interface CustomButtonProps {
  asChild?: boolean;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  textContent?: string;
}

const CustomButton = ({
  onClick,
  asChild,
  children,
  disabled,
  className,
  textContent,
}: CustomButtonProps) => {
  return (
    <Button
      asChild={asChild}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {textContent} {children}
    </Button>
  );
};

export default CustomButton;
