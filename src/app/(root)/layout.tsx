import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamVideoProvider";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="w-[100vw] h-[100vh] bg-dark-1">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
