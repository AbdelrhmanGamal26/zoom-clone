import Link from "next/link";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import { SignedIn, UserButton } from "@clerk/nextjs";
import SmallScreenSideMenu from "./SmallScreenSideMenu";

const Header = () => {
  return (
    <header className="bg-dark-2 h-[72px] px-4 md:px-16 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <p className="text-white font-extrabold text-[clamp(18px,2vw,24px)] ms-2">
          Zoom
        </p>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SmallScreenSideMenu />
      </div>
    </header>
  );
};

export default Header;
