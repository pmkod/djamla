"use client";
// import { ComponentShowRoom } from "@/components/core/component-show-room";
import { Button } from "@/react/components/core/button";
import React from "react";

const ButtonPage = () => {
  const switchToLightMode = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  };
  const switchToDarkMode = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  };
  return (
    <div className="p-20 space-x-10">
      {/* <ComponentShowRoom
        defaultVariant="filled"
        variants={["filled", "outlined", "soft", "plain"]}
        sizes={["xs", "sm", "md", "lg", "xl"]}
        defaultSize="md"
        colorSchemes={["primary", "red", "black"]}
        defaultColorScheme="primary"
        fullWidth={false}
        loading={false}
        disabled={false}
      >
      </ComponentShowRoom> */}
      <Button variant="solid" size="md" onClick={switchToLightMode}>
        Light
      </Button>
      <Button variant="solid" size="xs" onClick={switchToDarkMode}>
        Dark
      </Button>

      <Button variant="solid" colorScheme="black">
        Download
      </Button>
    </div>
  );
};

export default ButtonPage;
