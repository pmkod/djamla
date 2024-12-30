import { PinInput as PinInputPrimitives } from "@ark-ui/solid";
import { Index } from 'solid-js'


interface PinInputProps extends PinInputPrimitives.RootProps {
  length: number;
}

const PinInput = (props: PinInputProps) => {
  return (
    <PinInputPrimitives.Root {...props}>
      <PinInputPrimitives.Control class="space-x-2">
      <Index each={Array(props.length).fill(0)}>{(id) => <PinInputPrimitives.Input index={id()}
                    class="border-base-300 text-base-800 focus:border-primary-500 focus:ring-primary-500 h-16 w-12 rounded border bg-transparent text-center text-xl outline-none focus:ring-1 placeholder:focus:opacity-0 data-[disabled]:opacity-50"
                    />}</Index>


      </PinInputPrimitives.Control>
      <PinInputPrimitives.HiddenInput />
    </PinInputPrimitives.Root>
  );
};


export { PinInput };
