export const breadcrumbCode = `import { IconChevronRight, IconDots } from "@tabler/icons-solidjs";
import {JSX} from "solid-js"

export const Breadcrumb = ( props: JSX.HTMLAttributes<HTMLElement>) => <nav aria-label="breadcrumb" {...props} />;


export const BreadcrumbList = (props: JSX.OlHTMLAttributes<HTMLOListElement>) => (
  <ol
    class="text-base-900 flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5"
    {...props}
  />
);


export const BreadcrumbItem = (props: JSX.LiHTMLAttributes<HTMLLIElement>) => (
  <li class="inline-flex items-center gap-1.5" {...props} />
);


export const BreadcrumbLink = (props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      class="hover:text-foreground transition-colors"
      {...props}
    />
  );
};


export const BreadcrumbPage = (props: JSX.HTMLAttributes<HTMLSpanElement>) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    class="text-foreground font-normal"
    {...props}
  />
);

BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = (props: JSX.LiHTMLAttributes<HTMLLIElement>) => (
  <li
    role="presentation"
    aria-hidden="true"
    class="[&>svg]:size-3.5"
    {...props}
  >
    {props.children ?? <IconChevronRight />}
  </li>
);


export const BreadcrumbEllipsis = (props: JSX.HTMLAttributes<HTMLSpanElement>) => (
  <span
    role="presentation"
    aria-hidden="true"
    class="flex h-9 w-9 items-center justify-center"
    {...props}
  >
    <IconDots class="h-4 w-4" />
    <span class="sr-only">More</span>
  </span>
);
`