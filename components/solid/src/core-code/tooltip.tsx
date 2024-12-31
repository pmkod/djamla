export const solidTooltipCode = `import { Tooltip as TooltipPrimitives, TooltipRootProps } from "@ark-ui/solid";


// 
// 
// 
// 
// 

const Tooltip = (props: TooltipPrimitives.RootProps) => {
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

// 
// 
// 
// 
// 

const TooltipTrigger = TooltipPrimitives.Trigger;

// 
// 
// 
// 
// 

const TooltipContent = (props: TooltipPrimitives.ContentProps) => (
  <TooltipPrimitives.Positioner>
    <TooltipPrimitives.Content
      class="border-base-900 bg-base-900 text-base-0 z-50 block max-w-52 overflow-hidden rounded border px-3 py-1.5 text-sm font-medium shadow-md transition-all duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
      {...props}
    />
  </TooltipPrimitives.Positioner>
);


export { Tooltip, TooltipContent, TooltipTrigger };
`