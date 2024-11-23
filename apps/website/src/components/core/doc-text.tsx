import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const docTextStyle = cva(undefined, {
  variants: {
    level: {
      titleOne: "text-base-800 mb-7 text-4xl font-bold",
      titleTwo: "text-base-800 mb-5 mt-10 text-2xl font-semibold",
      paragraph: "text-base-500 mb-4 text-xl",
      paragraphTwo: "text-base-500 mb-4 text-lg",
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
