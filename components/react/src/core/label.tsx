import { DetailedHTMLProps, forwardRef } from "react";

const Label = forwardRef<
  HTMLLabelElement,
  DetailedHTMLProps<React.LabelHTMLAttributes<HTMLElement>, HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={
      "mb-1 text-sm font-medium text-base-900 data-[invalid]:text-red-500 " +
      className
    }
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
