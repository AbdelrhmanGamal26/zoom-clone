"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sideMenuLinks } from "@/constants";
import { usePathname } from "next/navigation";
import logo from "../../public/icons/logo.svg";
import hamburgerIcon from "../../public/icons/hamburger.svg";

const SmallScreenSideMenu = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={hamburgerIcon}
            alt="icon"
            width={27}
            height={27}
            className="lg:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 sideMenu">
          <Link href="/" className="flex items-center mb-10">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="text-white font-extrabold text-[24px] ms-2">Zoom</p>
          </Link>
          <section>
            {sideMenuLinks.map(({ title, url, icon }) => {
              return (
                <SheetClose key={title} asChild>
                  <Link
                    href={url}
                    className={`mb-5 flex items-center h-[45px] w-full p-2 rounded-[8px] ${
                      pathname === url ? "bg-blue-1" : ""
                    } hover:bg-blue-1 transition-colors duration-300`}
                  >
                    <Image src={icon} alt="icon" width={24} height={24} />
                    <p className="ms-3 text-white">{title}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </section>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default SmallScreenSideMenu;
