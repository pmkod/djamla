import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../react/components/core/avatar";

const AvatarPage = () => {
  return (
    <div className="flex gap-x-10 px-7 py-4">
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/300" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/300" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/300" />
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://i.pravatar.cc/300" />
      </Avatar>
      <Avatar size="xs">
        <AvatarImage />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarPage;
