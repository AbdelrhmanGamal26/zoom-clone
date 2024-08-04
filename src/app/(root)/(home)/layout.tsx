import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-dark-1 h-[100vh] w-[100vw]">
      <Header />
      <div className="flex">
        <SideMenu />
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;
