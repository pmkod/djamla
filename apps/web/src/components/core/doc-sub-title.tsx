import React, { PropsWithChildren } from "react";

const DocSubTitle = ({ children }: PropsWithChildren) => {
  return <div className="text-3xl font-semibold">{children}</div>;
};

export { DocSubTitle };
