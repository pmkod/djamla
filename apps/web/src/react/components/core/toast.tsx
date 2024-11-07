"use client";
import {
  Toast as ToastPrimitives,
  Toaster,
  createToaster,
} from "@ark-ui/react";
import { IconX } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";

const toast = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 20,
  max: 20,
});

const toastStyle = cva(
  [
    "relative",
    "translate-x-[--x] translate-y-[--y] rotate-0",
    // "opacity-[--opacity]",
    "data-[state=closed]:scale-75 data-[state=open]:scale-[--scale]",
    "rounded px-5 py-3.5 shadow sm:w-96 transition-all transform duration-500",
    "",
  ],
  {
    variants: {
      type: {
        success: "bg-green-500 text-white",
        info: "border border-neutral-200 bg-white",
        error: "bg-red-600 text-white",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
);

const Toast = () => {
  return (
    <Toaster toaster={toast} className="w-screen flex flex-col gap-y-4">
      {(toast) => {
        return (
          <ToastPrimitives.Root
            style={{
              overflowWrap: "anywhere",
              transitionProperty: "opacity",
              height: "var(--height)",
              zIndex: "var(--z-index)",
              //   opacity: "var(--opacity)",
              //   scale: "var(--scale)",
              //   transform: "translate(var(--x), calc(var(--y) * 4))",
            }}
            className={toastStyle({
              type: toast.type as VariantProps<typeof toastStyle>["type"],
            })}
          >
            <ToastPrimitives.Title className="mb-0.5 text-base font-medium">
              {toast.title}
            </ToastPrimitives.Title>
            <ToastPrimitives.Description className="text-sm">
              {toast.description}
            </ToastPrimitives.Description>
            {/* <ToastPrimitives.ActionTrigger>
            Do Action
          </ToastPrimitives.ActionTrigger> */}
            <ToastPrimitives.CloseTrigger className="absolute right-4 top-3">
              <IconX className="h-4 w-4" />
            </ToastPrimitives.CloseTrigger>
          </ToastPrimitives.Root>
        );
      }}
    </Toaster>
  );
};

Toast.displayName = "Toast";

export { Toast, toast };
