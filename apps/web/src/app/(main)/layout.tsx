import { Footer } from "@/components/partials/footer";
import { Header } from "@/components/partials/header";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
