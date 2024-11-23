import { Container } from "@/components/core/container";
import { PropsWithChildren } from "react";

const BlocksLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <div className="min-h-screen pb-10 pt-10">{children}</div>
    </Container>
  );
};

export default BlocksLayout;
