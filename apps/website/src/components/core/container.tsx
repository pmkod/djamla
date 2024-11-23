import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto max-w-[1400px] px-7">{children}</div>;
};
