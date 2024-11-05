import React from "react";

import {
  Popover,
  PopoverCloseButton,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../../react/components/core/popover";
import { Button } from "../../react/components/core/button";

const PopoverPage = () => {
  return (
    <div>
      <div className="flex gap-x-10 p-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button>Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Title</PopoverTitle>
              <PopoverCloseButton />
            </PopoverHeader>
            <PopoverDescription>Description</PopoverDescription>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Title</PopoverTitle>
              <PopoverCloseButton />
            </PopoverHeader>
            <PopoverDescription>Description</PopoverDescription>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Title</PopoverTitle>
              <PopoverCloseButton />
            </PopoverHeader>
            <PopoverDescription>Description</PopoverDescription>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Title</PopoverTitle>
              <PopoverCloseButton />
            </PopoverHeader>
            <PopoverDescription>Description</PopoverDescription>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PopoverPage;
