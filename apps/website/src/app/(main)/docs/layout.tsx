import { Container } from "@/components/core/container";
import { Sidebar } from "@/components/partials/sidebar";
import React, { PropsWithChildren } from "react";

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <div className="flex gap-x-20">
        <div className="scrollbar sticky top-14 hidden h-[calc(100vh-56px)] w-52 overflow-auto pt-4 lg:block">
          <Sidebar />
        </div>
        <div className="flex-1 pb-20 pt-4">{children}</div>
        <div className="hidden w-52 xl:block"></div>
      </div>
    </Container>
  );
};

export default DocsLayout;
