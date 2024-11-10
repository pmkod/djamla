import React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../react/components/core/hover-card";
import { Button } from "../../../../../components/react/src/core/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../react/components/core/avatar";

const HoverCardPage = () => {
  return (
    <div>
      <div className="flex gap-10 p-20 pl-96">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="w-80 flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default HoverCardPage;
