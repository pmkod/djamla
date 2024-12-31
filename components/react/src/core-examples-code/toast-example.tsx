export const toastExampleCode = `"use client";
import { Button } from "../core/button";
import { toast, Toast } from "../core/toast";

export const ToastExample = () => {
  const showToast = (type: string) => {
    toast.create({
      title: "Toast title",
      description:
        "Toast description znkmalznrkg amrgklnrmakgnzrmgnergn oern qz pfnz zrogn rgqozrlgnqzrùngqzrgùqzrgqzrùkg m!l",
      type,
    });
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          colorScheme="black"
          onClick={() => showToast("success")}
        >
          Show success toast
        </Button>
        <Button
          variant="outline"
          colorScheme="black"
          onClick={() => showToast("info")}
        >
          Show info toast
        </Button>
        <Button
          variant="outline"
          colorScheme="black"
          onClick={() => showToast("error")}
        >
          Show error toast
        </Button>
        {/* <Button variant="outline" colorScheme="black" onClick={() => showToast('')}>
          Show toast
        </Button> */}
      </div>

      <Toast />
    </>
  );
};
`