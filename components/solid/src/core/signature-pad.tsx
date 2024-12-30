import { SignaturePad as SignaturePadPrimitives, SignaturePadDrawEndDetails } from "@ark-ui/solid";

const SignaturePad = (props: SignaturePadPrimitives.RootProps) => {
  return (
    <SignaturePadPrimitives.Root
      class="border-base-200 bg-base-50 fill-base-900 h-full w-full rounded border"
      drawing={{ size: 2, simulatePressure: true }}
      {...props}
    >
      <SignaturePadPrimitives.Control class="relative h-full w-full">
        <SignaturePadPrimitives.ClearTrigger class="border-base-300 text-base-900 hover:bg-base-100 absolute right-3 top-3 rounded border px-2 pb-1 pt-0.5 text-xs transition-colors">
          Clear
        </SignaturePadPrimitives.ClearTrigger>
        <SignaturePadPrimitives.Segment class="h-full w-full" />
        <SignaturePadPrimitives.Guide class="border-b-base-400 absolute bottom-4 left-5 right-4 h-px border-b border-dashed" />
      </SignaturePadPrimitives.Control>
    </SignaturePadPrimitives.Root>
  );
};


export { SignaturePad, type SignaturePadDrawEndDetails };
