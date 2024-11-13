import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const docTextStyle = cva(undefined, {
  variants: {
    level: {
      titleOne: "text-4xl font-bold text-base-800 mb-7",
      titleTwo: "text-2xl font-semibold text-base-800 mb-5 mt-10",
      paragraph: "text-xl text-base-500 mb-4",
      paragraphTwo: "text-lg text-base-500 mb-4",
    },
  },
  defaultVariants: {
    level: "titleOne",
  },
});

interface DocTextProps extends VariantProps<typeof docTextStyle> {
  children: ReactNode;
}

const DocText = ({ children, level }: DocTextProps) => {
  return <div className={docTextStyle({ level })}>{children}</div>;
};

export { DocText };
