import { Header } from "@/components/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="overflow-hidden">
      <Header href={"/sign-in"} type={"SignIn"} />
      {children}
    </main>
  );
};

export default layout;
