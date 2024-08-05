"use client";

import Link from "next/link";
import Image from "next/image";
import { sideMenuLinks } from "@/constants";
import { usePathname } from "next/navigation";

const SideMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block w-[275px] text-white bg-dark-2 h-[92.5vh] pt-10 px-4">
      <ul>
        {sideMenuLinks.map(({ title, url, icon }) => {
          return (
            <li key={title} className="w-full mb-5">
              <Link
                href={url}
                className={`flex items-center h-[45px] md:h-[50px] w-full p-2 rounded-[8px] ${
                  pathname === url ? "bg-blue-1" : ""
                } hover:bg-blue-1 transition-colors duration-300`}
              >
                <Image src={icon} alt="icon" width={24} height={24} />
                <p className="ms-3 hidden md:block">{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenu;
