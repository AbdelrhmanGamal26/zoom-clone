"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SideMenuLinkItemProps {
  url: string;
  icon: string;
  title: string;
}

const SideMenuLinkItem = ({
  url,
  icon,
  title,
}: SideMenuLinkItemProps) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={url}
        className={`flex items-center h-[45px] md:h-[50px] w-full p-2 rounded-[8px] ${
          pathname === url ? "bg-blue-1" : ""
        } hover:bg-blue-1 transition-colors duration-300`}
      >
        <Image src={icon} alt="icon" width={24} height={24} />
        <p className="ms-3 text-white text-[14px] sm:text-[16px]">{title}</p>
      </Link>
    </>
  );
};

export default SideMenuLinkItem;
