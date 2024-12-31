export const reactClipboardCode = `import { Clipboard as ClipboardPrimitives } from "@ark-ui/react";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
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

const Clipboard = forwardRef<
  React.ElementRef<typeof ClipboardPrimitives.Root> &
    VariantProps<typeof clipboardInputStyle>,
  React.ComponentPropsWithoutRef<typeof ClipboardPrimitives.Root> &
    VariantProps<typeof clipboardInputStyle>
>(({ size, ...props }, ref) => {
  return (
    <ClipboardPrimitives.Root ref={ref} {...props}>
      <ClipboardPrimitives.Control className="flex w-full items-center gap-x-2">
        <ClipboardPrimitives.Input className={clipboardInputStyle({ size })} />
        <ClipboardPrimitives.Trigger asChild>
          <IconButton variant="outline" size={size} colorScheme="black">
            <ClipboardPrimitives.Indicator
              copied={<IconCheck className="h-4 w-4" />}
            >
              <IconClipboard className="h-4 w-4" />
            </ClipboardPrimitives.Indicator>
          </IconButton>
        </ClipboardPrimitives.Trigger>
      </ClipboardPrimitives.Control>
    </ClipboardPrimitives.Root>
  );
});

Clipboard.displayName = "Clipboard";

export { Clipboard };
`