import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import logo from "../../public/icons/logo.svg";

const Header = () => {
  return (
    <header className="bg-dark-2 h-[72px] px-4 md:px-16 flex justify-between items-center">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <p className="text-white font-extrabold text-[24px] ms-2">Zoom</p>
      </Link>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
