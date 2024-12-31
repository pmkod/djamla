export const kbdCode = `import { cva, VariantProps } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";

const kbdStyle = cva(
  "text-base-800 border-base-300 bg-base-50 inline-flex items-center whitespace-pre rounded border border-b-2 font-medium",
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
  },
);

interface KbdProps extends JSX.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdStyle> {}

const Kbd = (props: KbdProps) => {
    const [local, rest] = splitProps(props, [
        "size",
      ]);
    return (
      <kbd ref={rest.ref} class={kbdStyle({ size: local.size })} {...rest}>
        {rest.children}
      </kbd>
    );
  };

//   
// 
// 
// 


  interface KbdGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const KbdGroup = (props: KbdGroupProps) => {
    // const [local, rest] = splitProps(props);
    const {children} = props
    return (
      <div
        class="flex items-start gap-x-2 leading-none"
        {...props}
      >
        {children}
      </div>
    );
  };

//   
// 
// 
// 
// 

interface KbdSeparatorProps extends JSX.HTMLAttributes<HTMLDivElement> {}


const KbdSeparator = (props: KbdSeparatorProps) => {
  return (
    <div {...props} />
  );
};


export { Kbd, KbdGroup, KbdSeparator };
`