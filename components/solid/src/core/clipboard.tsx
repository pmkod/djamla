import { Clipboard as ClipboardPrimitives } from "@ark-ui/solid";
import { IconCheck, IconClipboard } from "@tabler/icons-solidjs";
import { cva, VariantProps } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";
import { IconButton } from "./icon-button";

const clipboardInputStyle = cva(
  "border-base-300 bg-base-0 text-base-500 w-full rounded-sm border pl-3",
  {
    variants: {
      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6",
        xl: "h-12 px-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface ClipboardProps extends ClipboardPrimitives.RootProps, VariantProps<typeof clipboardInputStyle> {

}

const Clipboard = (props: ClipboardProps) => {
    const [local, rest] = splitProps(props, ['size'])
  return (
    <ClipboardPrimitives.Root  {...rest}>
      <ClipboardPrimitives.Control class="flex w-full items-center gap-x-2">
        <ClipboardPrimitives.Input class={clipboardInputStyle({ size: local.size })} />
        <ClipboardPrimitives.Trigger>
          <IconButton variant="outline" size={local.size} colorScheme="black">
            <ClipboardPrimitives.Indicator
              copied={<IconCheck class="h-4 w-4" />}
            >
              <IconClipboard class="h-4 w-4" />
            </ClipboardPrimitives.Indicator>
          </IconButton>
        </ClipboardPrimitives.Trigger>
      </ClipboardPrimitives.Control>
    </ClipboardPrimitives.Root>
  );
};


export { Clipboard };
