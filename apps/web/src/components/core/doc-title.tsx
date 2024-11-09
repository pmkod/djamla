import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const docTitleStyle = cva(undefined, {
  variants: {
    level: {
      one: "text-4xl font-bold mb-7",
      two: "text-2xl font-semibold mb-5 mt-10",
    },
  },
  defaultVariants: {
    level: "one",
  },
});

interface DocTitleProps extends VariantProps<typeof docTitleStyle> {
  children: ReactNode;
}

const DocTitle = ({ children, level }: DocTitleProps) => {
  return <div className={docTitleStyle({ level })}>{children}</div>;
};

export { DocTitle };
