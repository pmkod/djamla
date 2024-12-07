"use client";
import {
  Toast as ToastPrimitives,
  Toaster,
  createToaster,
  useToastContext,
} from "@ark-ui/react";
import { IconX } from "@tabler/icons-react";
import { VariantProps, cva } from "class-variance-authority";

const toast = createToaster({
  placement: "bottom-end",
  gap: 24,
  max: 20,
  overlap: true
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
      {({ id, type, title, description, meta }) => {
        return (
          <ToastPrimitives.Root
            key={id}
            style={{
              height: "var(--height)",
              translate: "var(--x) var(--y) 0",

              scale: "var(--scale)",
              zIndex: "var(--z-index)",
              opacity: "var(--opacity)",
              overflowWrap: "anywhere",
              willChange: "translate, opacity, scale",
              transitionProperty: "translate, scale, opacity, height",
              transitionDuration: "300ms",
              pointerEvents: "auto",
              position: "absolute",
            }}
            className={toastStyle({
              type: type as VariantProps<typeof toastStyle>["type"],
            })}
          >
            <ToastPrimitives.Title className="mb-0.5 text-base font-medium">
              {title}
            </ToastPrimitives.Title>
            <ToastPrimitives.Description
              className={toastDescriptionStyle({
                type: type as VariantProps<typeof toastStyle>["type"],
              })}
            >
              {description}
            </ToastPrimitives.Description>
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
