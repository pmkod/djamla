import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef, HtmlHTMLAttributes } from "react";

const kbdStyle = cva(
  "inline-flex items-center whitespace-pre rounded border border-b-2 border-neutral-300 bg-neutral-50 font-medium",
  {
    variants: {
      size: {
        sm: "px-0.5 pt-px text-xs",
        md: "px-1 text-sm",
        lg: "px-1.5 pb-px pt-px",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface KbdProps
  extends Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
      "size"
    >,
    VariantProps<typeof kbdStyle> {}

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ size, children, ...props }, ref) => {
    return (
      <kbd ref={ref} className={kbdStyle({ size })} {...props}>
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";

const KbdGroup = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => {
    return (
      <div
        className="flex items-start gap-x-2 leading-none"
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

KbdGroup.displayName = "KbdGroup";

const KbdSeparator = forwardRef<
  HTMLDivElement,
  HtmlHTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div className="" ref={ref} {...props}>
      {children}
    </div>
  );
});

KbdSeparator.displayName = "KbdSeparator";

export { KbdGroup, Kbd, KbdSeparator };
