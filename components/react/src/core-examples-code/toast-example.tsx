export const toastExampleCode = `"use client";
import { Button } from "../core/button";
import { toast, Toast } from "../core/toast";

export const ToastExample = () => {
  const showToast = () => {
    toast.create({
      title: "Toast title",
      description:
        "Toast description znkmalznrkg amrgklnrmakgnzrmgnergn oern qz pfnz zrogn rgqozrlgnqzrùngqzrgùqzrgqzrùkg m!l",
      type: "success",
    });
  };
  return (
    <div>
      <div className="">
        <Button variant="outline" onClick={showToast}>
          Show toast
        </Button>
      </div>

      <Toast />
    </div>
  );
};
`