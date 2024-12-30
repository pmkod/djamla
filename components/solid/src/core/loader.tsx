import { cva, VariantProps } from "class-variance-authority";
import {JSX, splitProps} from "solid-js"

const loaderStyle = cva(
  "inline-block animate-spin rounded-full border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "size-6 border-2",
        md: "size-7 border-[3px]",
        lg: "size-9 border-4",
        xl: "size-10 border-[5px]",
      },

      colorScheme: {
        primary: "border-primary-600",
        red: "border-red-600",
        black: "border-base-900",
        green: "border-green-500",
      },
    },
    defaultVariants: {
      size: "md",
      colorScheme: "primary",
    },
  },
);

// 
// 
// 
// 
// 


interface LoaderProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderStyle> {}

const Loader = (props: LoaderProps) => {
  const [local, rest] = splitProps(props, ['size', 'colorScheme'])
    return (
      <div
        class={loaderStyle({
          size: local.size,
          colorScheme: local.colorScheme,
        })}
        role="status"
        aria-label="loading"
        {...rest}
      />
    );
};

export { Loader };
