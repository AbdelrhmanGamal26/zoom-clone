import { ReactNode } from "react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-dark-1 min-h-[100vh] w-[100vw]">
      <Header />
      <div className="flex w-full">
        <SideMenu />
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;
