import {  Badge, Button, Code, Input, Kbd, KbdGroup, KbdSeparator, Label, Loader, QrCode, QrCodeOverlay, Skeleton, Tooltip, TooltipContent, TooltipTrigger } from "@repo/solid-ui";
import { Title } from "@solidjs/meta";
import { createEffect, createSignal } from "solid-js";

export default function Home() {

  const [isLoading, setIsLoading] = createSignal(false)

  createEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2000);
  });
  return (
    <main class="h-screen">
      <Title>Hello World</Title>
      <div class="p-5 flex items-center gap-10">
        <Badge>Aaaaa</Badge>
        <Badge variant="outline">Aaaaa</Badge>
      </div>
      <div class="p-5 flex gap-10">
      <Button size="xs">
        Download
      </Button>
      <Button isLoading={isLoading()}>
        Download
      </Button>
      </div>


      <div class="p-5 flex items-center gap-10">
        <Code size="lg">@tabler/icons-react</Code>
        <Code size="sm">@tabler/icons-react</Code>
      </div>

      <div class="p-5 flex items-center">
        <Input type="password"  />
      </div>



      <div class="p-5 flex gap-10">
      <KbdGroup>
      <Kbd size="sm">Ctrl</Kbd>
      <KbdSeparator>+</KbdSeparator>
      <Kbd size="sm">Shift</Kbd>
      <KbdSeparator>+</KbdSeparator>
      <Kbd size="sm">V</Kbd>
    </KbdGroup>
      </div>

      <div class="p-5 flex gap-10">
        <Label>First name</Label>
      </div>

      <div class="p-5 flex items-center gap-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>

      <div class="p-5 flex items-center gap-10">
      <div class="w-32">
      <QrCode value="http://ark-ui.com">
        <QrCodeOverlay>
          <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
        </QrCodeOverlay>
      </QrCode>
    </div>
      </div>

      <div class="p-5 flex items-center gap-10">
      <div class="border-base-200 flex w-72 items-center gap-x-2 rounded border px-4 py-3">
      <Skeleton width={40} height={40} rounded="full" />
      <div class="flex-1 space-y-1.5">
        <Skeleton width="100%" height={11} rounded="full" />
        <Skeleton width={50} height={11} rounded="full" />
      </div>
    </div>
        </div>

        <div class="p-5 flex items-center gap-10">
        <Tooltip>
      <TooltipTrigger>
        <Button variant="outline" size="sm">Hover to see</Button>
      </TooltipTrigger>
      <TooltipContent>Lorem ipsum</TooltipContent>
    </Tooltip>

        </div>

      {/* <Counter /> */}
    </main>
  );
}
