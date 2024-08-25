import Link from "next/link";
import Image from "next/image";
import SideMenuLinks from "./SideMenuLinks";
import logo from "../../public/icons/logo.svg";
import hamburgerIcon from "../../public/icons/hamburger.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SmallScreenSideMenu = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            alt="icon"
            width={27}
            height={27}
            src={hamburgerIcon}
            className="lg:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 sideMenu w-full sm:w-[275px] md:w-[300px]">
          <Link href="/" className="flex items-center mb-10">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="text-white font-extrabold text-[24px] ms-2">Zoom</p>
          </Link>
          <SideMenuLinks withWrapper={true} />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default SmallScreenSideMenu;
