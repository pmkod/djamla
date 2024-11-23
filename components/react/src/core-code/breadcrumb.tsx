export const breadcrumbCode = `import * as React from "react";
import { IconChevronRight, IconDots } from "@tabler/icons-react";
import { ark } from "@ark-ui/react";

export const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);

Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className="text-base-900 flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5"
    {...props}
  />
));

BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className="inline-flex items-center gap-1.5" {...props} />
));

BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof ark.a>
>(({ className, ...props }, ref) => {
  return (
    <ark.a
      className="hover:text-foreground transition-colors"
      {...props}
      ref={ref}
    />
  );
});

BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className="text-foreground font-normal"
    {...props}
  />
));

BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className="[&>svg]:size-3.5"
    {...props}
  >
    {children ?? <IconChevronRight />}
  </li>
);

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className="flex h-9 w-9 items-center justify-center"
    {...props}
  >
    <IconDots className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
`;
