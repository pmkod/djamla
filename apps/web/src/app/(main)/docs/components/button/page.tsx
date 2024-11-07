"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/react/components/core/avatar";
// import { ComponentShowRoom } from "@/components/core/component-show-room";
import { Button } from "@/react/components/core/button";
import React from "react";

const ButtonPage = () => {
  const switchToLightMode = () => {
    document.body.classList.value = "bg-base-0 light";
  };
  const switchToDarkMode = () => {
    document.body.classList.value = "bg-base-0 dark";
  };

  return (
    <div>
      <div className="p-20 space-x-10 space-y-10">
        <Button variant="solid" onClick={switchToLightMode}>
          Light
        </Button>
        <Button variant="outline" onClick={switchToDarkMode}>
          Dark
        </Button>
        <Avatar size="xs">
          <AvatarImage />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>

        <Button variant="solid" colorScheme="black">
          Download
        </Button>
      </div>

      <div className="mt-20 flex flex-wrap">
        <div className="size-20 bg-base-0"></div>
        <div className="size-20 bg-base-50"></div>
        <div className="size-20 bg-base-100"></div>
        <div className="size-20 bg-base-200"></div>
        <div className="size-20 bg-base-300"></div>
        <div className="size-20 bg-base-400"></div>
        <div className="size-20 bg-base-500"></div>
        <div className="size-20 bg-base-600"></div>
        <div className="size-20 bg-base-700"></div>
        <div className="size-20 bg-base-800"></div>
        <div className="size-20 bg-base-900"></div>
        <div className="size-20 bg-base-1000"></div>
      </div>
    </div>
  );
};

export default ButtonPage;
