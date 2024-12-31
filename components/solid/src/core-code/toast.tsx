export const solidToastCode = `"use client";
import {
  Toast as ToastPrimitives,
  Toaster,
  createToaster,
} from "@ark-ui/solid";
import { IconX } from "@tabler/icons-solidjs";
import { VariantProps, cva } from "class-variance-authority";

const toast = createToaster({
  placement: "bottom-end",
  gap: 24,
  max: 20,
  overlap: true,
});

const defaultToastType = "info";

const toastStyle = cva(["w-max max-w-96 rounded px-5 py-3.5 shadow-xl"], {
  variants: {
    type: {
      success: "bg-green-500 text-white",
      info: "border-base-200 text-base-800 border bg-white",
      error: "bg-red-600 text-white",
    },
  },
  defaultVariants: {
    type: defaultToastType,
  },
});

const toastDescriptionStyle = cva(["text-sm"], {
  variants: {
    type: {
      success: "bg-green-500 text-white",
      info: "text-base-500",
      error: "bg-red-600 text-white",
    },
  },
  defaultVariants: {
    type: defaultToastType,
  },
});
const Toast = () => {
  return (
    <Toaster toaster={toast}>
      {(toast) => {
        return (
          <ToastPrimitives.Root
            style={{
              height: "var(--height)",
              translate: "var(--x) var(--y) 0",

              scale: "var(--scale)",
              "z-index": "var(--z-index)",
              opacity: "var(--opacity)",
              "overflow-wrap": "anywhere",
              "will-change": "translate, opacity, scale",
              "transition-property": "translate, scale, opacity, height",
              "transition-duration": "300ms",
              "pointer-events": "auto",
              position: "absolute",
            }}
            class={toastStyle({
              type: toast().type as VariantProps<typeof toastStyle>["type"],
            })}
          >
            <ToastPrimitives.Title class="mb-0.5 text-base font-medium">
              {toast().title}
            </ToastPrimitives.Title>
            <ToastPrimitives.Description
              class={toastDescriptionStyle({
                type: toast().type as VariantProps<typeof toastStyle>["type"],
              })}
            >
              {toast().description}
            </ToastPrimitives.Description>
            <ToastPrimitives.CloseTrigger class="absolute right-4 top-3">
              <IconX class="h-4 w-4" />
            </ToastPrimitives.CloseTrigger>
          </ToastPrimitives.Root>
        );
      }}
    </Toaster>
  );
};

Toast.displayName = "Toast";

export { Toast, toast };
`