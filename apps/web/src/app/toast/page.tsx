"use client";
import React from "react";
import { Button } from "../../../../../components/react/src/core/button";
import { Toast, toast } from "../../react/components/core/toast";

const ToastPage = () => {
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
      <div className="p-20">
        <Button variant="outline" onClick={showToast}>
          Show toast
        </Button>
      </div>

      <Toast />
    </div>
  );
};

export default ToastPage;
