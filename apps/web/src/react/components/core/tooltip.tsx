import { forwardRef } from "react";
import { Tooltip as TooltipPrimitives, TooltipRootProps } from "@ark-ui/react";

const Tooltip = (props: TooltipRootProps) => {
  return (
    <TooltipPrimitives.Root
      positioning={{
        placement: "bottom",
        gutter: 2,
      }}
      openDelay={600}
      {...props}
    />
  );
};

Tooltip.displayName = "Tooltip";

const TooltipTrigger = TooltipPrimitives.Trigger;

const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitives.Content>
>((props, ref) => (
  <TooltipPrimitives.Positioner>
    <TooltipPrimitives.Content
      ref={ref}
      className="z-50 block max-w-52 overflow-hidden rounded border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white shadow-md transition-all duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
      {...props}
    />
  </TooltipPrimitives.Positioner>
));

TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent };
