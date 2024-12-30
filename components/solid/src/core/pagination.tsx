"use client";
import { Pagination as PaginationPrimitives } from "@ark-ui/solid";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-solidjs";
import { For } from "solid-js";

const basePaginationButtonClassName =
  "size-9 aspect-square flex items-center justify-center rounded-sm hover:bg-base-100 text-base-900 data-[disabled]:hover:bg-transparent transition-colors";

const Pagination = (props: PaginationPrimitives.RootProps) => {
  return (
    <PaginationPrimitives.Root
      class="flex max-w-full gap-x-2"
      {...props}
    >
      <PaginationPrimitives.PrevTrigger
        class={`${basePaginationButtonClassName}`}
      >
        <IconChevronLeft class="h-5 w-5" />
      </PaginationPrimitives.PrevTrigger>
      <PaginationPrimitives.Context>
        {(pagination) =>






<For each={pagination().pages}>
{(page, index) =>
  page.type === 'page' ? (
    <PaginationPrimitives.Item
    class={`${basePaginationButtonClassName} border-base-300 data-[selected]:border-primary-600 data-[selected]:bg-primary-600 border data-[selected]:text-white`}
    {...page}
  >
    {page.value}
  </PaginationPrimitives.Item>
) : (
  <PaginationPrimitives.Ellipsis
    index={index()}
    class="text-base-900"
  >
    &#8230;
  </PaginationPrimitives.Ellipsis>
  )
}
</For>}
      </PaginationPrimitives.Context>
      <PaginationPrimitives.NextTrigger
        class={`${basePaginationButtonClassName}`}
      >
        <IconChevronRight class="h-5 w-5" />
      </PaginationPrimitives.NextTrigger>
    </PaginationPrimitives.Root>
  );
};

Pagination.displayName = "Pagination";

export { Pagination };
