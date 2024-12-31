export const solidToggleGroupCode = `import { ToggleGroup as ToggleGroupPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

const toggleGroupStyle = cva(
  "flex self-start overflow-hidden rounded bg-transparent",
  {
    variants: {
      variant: {
        plain: "gap-1 [&>*]:rounded",
        outline: "border-base-300 divide-base-300 border",
      },
      orientation: {
        vertical: "flex-col",
        horizontal: "",
      },
      size: {
        xs: "data-[orientation=vertical]:w-7",
        sm: "data-[orientation=vertical]:w-8",
        md: "data-[orientation=vertical]:w-9",
        lg: "data-[orientation=vertical]:w-10",
        xl: "data-[orientation=vertical]:w-11",
      },
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        variant: "outline",
        class: "divide-x",
      },
      {
        orientation: "vertical",
        variant: "outline",
        class: "divide-y",
      },

      {
        orientation: "horizontal",
        size: "xs",
        class: "h-7",
      },
      {
        orientation: "horizontal",
        size: "sm",
        class: "h-8",
      },
      {
        orientation: "horizontal",
        size: "md",
        class: "h-9",
      },
      {
        orientation: "horizontal",
        size: "lg",
        class: "h-10",
      },
      {
        orientation: "horizontal",
        size: "xl",
        class: "h-11",
      },

      {
        orientation: "vertical",
        size: "xs",
        class: "w-7",
      },
      {
        orientation: "vertical",
        size: "sm",
        class: "w-8",
      },
      {
        orientation: "vertical",
        size: "md",
        class: "w-9",
      },
      {
        orientation: "vertical",
        size: "lg",
        class: "w-10",
      },
      {
        orientation: "vertical",
        size: "xl",
        class: "w-11",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      size: "md",
    },
  },
);

interface ToggleGroupProps extends ToggleGroupPrimitives.RootProps, Omit<VariantProps<typeof toggleGroupStyle>, "orientation"> {

}
const ToggleGroup = 
  (
    props: ToggleGroupProps
  ) => {
    const [local, rest] = splitProps(props, ["variant","orientation",'children'])
    return (
        (
            <ToggleGroupPrimitives.Root
              class={toggleGroupStyle({ variant: local.variant, orientation: local.orientation })}
              {...rest}
            >
              {local.children}
            </ToggleGroupPrimitives.Root>
          )
    )
  }




const toggleItemStyle = cva(
    "focus-visible:ring-ring hover:bg-base-200 data-[state=on]:bg-base-200 data-[state=off]:hover:bg-base-50 text-base-800 inline-flex items-center justify-center text-sm font-medium transition-colors first:rounded-l last:rounded-r focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          plain: "bg-transparent",
          outline:
            "border-base-300 hover:bg-base-300 border-y border-l bg-transparent last:border-r",
        },
        size: {
          xs: "min-h-7 min-w-7",
          sm: "min-h-8 min-w-8",
          md: "min-h-9 min-w-9",
          lg: "min-h-10 min-w-10",
          xl: "min-h-11 min-w-11",
        },
      },
      defaultVariants: {
        variant: "plain",
        size: "md",
      },
    },
  );

  interface ToggleItemProps extends ToggleGroupPrimitives.ItemProps, VariantProps<typeof toggleItemStyle> {

  }


const ToggleItem = (props: ToggleItemProps) => {
    const [local, rest] = splitProps(props, ["variant","size",'children'])
    return(
        <ToggleGroupPrimitives.Item
        class={
            toggleItemStyle({
                variant: local.variant,
                size: local.size,
                // class: rest.class
            })
        }
          {...rest}
        >
          {local.children}
        </ToggleGroupPrimitives.Item>
      )
};


export { ToggleGroup, ToggleItem };
`