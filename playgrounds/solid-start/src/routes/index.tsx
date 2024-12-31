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
        <Accor />
      </div>

      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>
      <div class="p-10 flex items-center"></div>

      {/* <Counter /> */}
    </main>
  );
}
