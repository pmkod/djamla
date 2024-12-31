export const labelCode = `import { DetailedHTMLProps, forwardRef } from "react";

const Label = forwardRef<
  HTMLLabelElement,
  DetailedHTMLProps<React.LabelHTMLAttributes<HTMLElement>, HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={
      "text-base-900 mb-1 text-sm font-medium data-[invalid]:text-red-500 " +
      className
    }
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
`