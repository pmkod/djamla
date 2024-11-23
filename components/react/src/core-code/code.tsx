export const codeCode = `import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";

export const codeStyle = cva(
  "border-base-300 bg-base-100 text-base-800 inline-flex items-center whitespace-pre rounded border font-medium",
  {
    variants: {
      size: {
        sm: "px-0.5 text-xs",
        md: "px-1 pb-px text-sm",
        lg: "px-1.5 pb-0.5 pt-px",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface CodeProps
  extends Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
      "size"
    >,
    VariantProps<typeof codeStyle> {}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ size, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        style={{
          fontFamily: "Courier New, Arial, Georgia ,Times New Roman, ubuntu",
        }}
        className={codeStyle({ size })}
        {...props}
      >
        {children}
      </code>
    );
  },
);

Code.displayName = "Code";
`;
