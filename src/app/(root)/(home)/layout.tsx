import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title: 'Zoom-clone',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="bg-dark-1 min-h-[100vh] w-[100vw]">
      <Header />
      <section className="flex w-full">
        <SideMenu />
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
};

export default HomeLayout;
