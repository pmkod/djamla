import { Button } from "../core/button";
import { toast, Toast } from "../core/toast";

export const ToastExample = () => {
  const showToast = () => {
    toast.create({
      title: "Toast title",
      description:
        "Toast description znkmalznrkg amrgklnrmakgnzrmgnergn oern m!l",
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
