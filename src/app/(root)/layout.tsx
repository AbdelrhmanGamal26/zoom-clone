import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamVideoProvider";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="w-screen h-screen bg-dark-1">
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
