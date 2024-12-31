export const skeletonCode = `import { cva, VariantProps } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";

const skeletonStyle = cva("bg-base-200 animate-pulse", {
  variants: {
    rounded: {
      xs: "rounded-sm",
      sm: "rounded-sm",
      default: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    rounded: "default",
  },
});

type SizeProperty =
  | number
  | \`\${number}\${"%" | "px" | "cm" | "mm" | "rem" | "vh" | "vw"}\`;

interface SkeletonProps extends VariantProps<typeof skeletonStyle>, JSX.HTMLAttributes<HTMLDivElement> {
  width: SizeProperty;
  height: SizeProperty;
  flex?: number;
}


const Skeleton = (props: SkeletonProps) => {
    const [local, rest] = splitProps(props, [
        "width", "height", "rounded", "flex"
    ])
    return (
      <div
        class={skeletonStyle({ rounded: local.rounded })}
        style={{
          width: local.width.toString(),
          height: local.height.toString(),
          flex: local.flex,
        }}
        {...rest}
      />
    );
  };

Skeleton.displayName = "Skeleton";

export { Skeleton };
`