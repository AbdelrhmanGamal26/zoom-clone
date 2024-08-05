import { ReactNode } from "react";

const AuthLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className="bg-dark-1 h-[100vh]">
      {children}
    </main>
  )
}

export default AuthLayout;
