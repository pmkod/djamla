import { Footer } from "@/components/partials/footer";
import { Header } from "@/components/partials/header";
import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
