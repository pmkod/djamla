import { forwardRef } from "react";
import { PinInput as PinInputPrimitives } from "@ark-ui/react";

interface PinInputProps {
  length: number;
}

const PinInput = forwardRef<
  React.ElementRef<typeof PinInputPrimitives.Root> & PinInputProps,
  React.ComponentPropsWithoutRef<typeof PinInputPrimitives.Root> & PinInputProps
>(({ length, ...props }, ref) => {
  return (
    <PinInputPrimitives.Root ref={ref} {...props}>
      <PinInputPrimitives.Control className="space-x-2">
        {Array(length)
          .fill(1)
          .map((id, index) => (
            <PinInputPrimitives.Input
              key={index}
              index={index}
              className="h-16 w-12 rounded border border-base-300 text-center text-xl outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 placeholder:focus:opacity-0 data-[disabled]:opacity-50"
              placeholder="_"
            />
          ))}
      </PinInputPrimitives.Control>
      <PinInputPrimitives.HiddenInput />
    </PinInputPrimitives.Root>
  );
});

PinInput.displayName = "PinInput";

export { PinInput };
