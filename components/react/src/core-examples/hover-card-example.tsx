import { Avatar, AvatarFallback, AvatarImage } from "../core/avatar";
import { Button } from "../core/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../core/hover-card";

export const HoverCardExample = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex w-80 justify-between space-x-4">
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
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
