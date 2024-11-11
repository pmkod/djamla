export const paginationCode = `"use client";
import React, { forwardRef } from "react";
import { Pagination as PaginationPrimitives } from "@ark-ui/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const basePaginationButtonClassName =
  "size-9 aspect-square flex items-center justify-center rounded-sm hover:bg-base-100 data-[disabled]:hover:bg-transparent transition-colors";

const Pagination = forwardRef<
  React.ElementRef<typeof PaginationPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof PaginationPrimitives.Root>
>((props, ref) => {
  return (
    <PaginationPrimitives.Root
      ref={ref}
      className="flex max-w-full gap-x-2"
      {...props}
    >
      <PaginationPrimitives.PrevTrigger
        className={\`\${basePaginationButtonClassName}\`}
      >
        <IconChevronLeft className="h-5 w-5" />
      </PaginationPrimitives.PrevTrigger>
      <PaginationPrimitives.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <PaginationPrimitives.Item
                key={index}
                className={\`\${basePaginationButtonClassName} border border-base-300 data-[selected]:border-primary-600 data-[selected]:bg-primary-600 data-[selected]:text-white\`}
                {...page}
              >
                {page.value}
              </PaginationPrimitives.Item>
            ) : (
              <PaginationPrimitives.Ellipsis key={index} index={index}>
                &#8230;
              </PaginationPrimitives.Ellipsis>
            )
          )
        }
      </PaginationPrimitives.Context>
      <PaginationPrimitives.NextTrigger
        className={\`\${basePaginationButtonClassName}\`}
      >
        <IconChevronRight className="h-5 w-5" />
      </PaginationPrimitives.NextTrigger>
    </PaginationPrimitives.Root>
  );
});

Pagination.displayName = "Pagination";

export { Pagination };
`