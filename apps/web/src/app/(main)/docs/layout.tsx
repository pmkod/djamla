import { Container } from "@/components/core/container";
import { Sidebar } from "@/components/partials/sidebar";
import React, { PropsWithChildren } from "react";

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <div className="flex gap-x-20">
        <div className="sticky top-14 hidden lg:block w-52 pt-4 h-[calc(100vh-56px)] overflow-auto scrollbar">
          <Sidebar />
        </div>
        <div className="flex-1 pt-4 pb-20">{children}</div>
        <div className="hidden xl:block w-52"></div>
      </div>
    </Container>
  );
};

export default DocsLayout;
