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
  ["block relative rounded px-5 py-3.5 shadow-xl", "max-w-96"],
  {
    variants: {
      type: {
        success: "bg-green-500 text-white",
        info: "border border-base-200 bg-white",
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
              height: "var(--height)",
              width: "var(--width)",
              zIndex: "var(--z-index)",
              translate: "var(--x) var(--y) 0",
              scale: "var(--scale)",
              opacity: "var(--opacity)",
              overflowWrap: "anywhere",
              willChange: "translate, opacity, scale",
              transitionProperty: "translate, scale, opacity, height",
              transitionDuration: "300ms",
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
