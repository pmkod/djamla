export const codeCode = `import { cva, VariantProps } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";

 const codeStyle = cva(
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



 interface CodeProps
  extends JSX.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeStyle> {}

 const Code = (props: CodeProps) => {

    const [local, rest] = splitProps(props, [
        "size"
      ]);
      const {children} = rest
    return (
      
      <code
        style={{
          "font-family": "Courier New, Arial, Georgia ,Times New Roman, ubuntu",
        }}
        class={codeStyle({ size: local.size })}
        {...rest}
      >
        {children}
      </code>
    )
  };


export {Code}`