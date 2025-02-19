export const solidInputCode = `import {JSX, splitProps} from "solid-js"
import { Field as FieldPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";

export const inputStyle = cva(
  "text-base-800 focus:border-primary-500 w-full px-2.5 outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-red-500",
  {
    variants: {
      variant: {
        outline: "border-base-400 border bg-transparent",
        soft: "bg-base-100",
        plain: "bg-transparent",
      },
      size: {
        sm: "h-9 rounded-sm text-xs",
        md: "h-10 rounded-[3px] text-sm",
        lg: "h-11 rounded",
      },
      colorScheme: {
        red: "",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);


interface InputProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "size" >, VariantProps<typeof inputStyle> {

}

export const Input = (props: InputProps) =>
    
    {
        const [local, rest] = splitProps(props, [
            "variant", "size", "colorScheme"
        ])
      return  (
  <FieldPrimitives.Input
    class={inputStyle({ variant: local.variant, size: local.size, colorScheme: local.colorScheme })}
    {...rest}
  />
);
}`