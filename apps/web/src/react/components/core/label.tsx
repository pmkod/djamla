import { DetailedHTMLProps, forwardRef } from "react";

const Label = forwardRef<
  HTMLLabelElement,
  DetailedHTMLProps<React.LabelHTMLAttributes<HTMLElement>, HTMLLabelElement>
>((props, ref) => (
  <label
    ref={ref}
    className="mb-1 text-sm font-medium data-[invalid]:text-red-500"
    {...props}
  />
));

Label.displayName = "Label";

export { Label };
