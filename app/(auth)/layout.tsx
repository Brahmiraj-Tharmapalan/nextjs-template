import { Header } from "@/components/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header href={"/"} type={"Home"} />
      {children}
    </main>
  );
};

export default layout;
