import React, { forwardRef } from "react";
import { TreeView as TreeViewPrimitives } from "@ark-ui/react";
import { IconChevronRight } from "@tabler/icons-react";

const TreeView = forwardRef<
  React.ElementRef<typeof TreeViewPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitives.Root>
>(({ children, ...props }, ref) => {
  return (
    <TreeViewPrimitives.Root ref={ref} className="w-full" {...props}>
      <TreeViewPrimitives.Tree>{children}</TreeViewPrimitives.Tree>
    </TreeViewPrimitives.Root>
  );
});

TreeView.displayName = "TreeView";

const TreeViewBranch = forwardRef<
  React.ElementRef<typeof TreeViewPrimitives.Branch>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitives.Branch>
>((props, ref) => {
  return <TreeViewPrimitives.Branch ref={ref} {...props} />;
});

TreeViewBranch.displayName = "TreeViewBranch";

const TreeViewBranchControl = forwardRef<
  React.ElementRef<typeof TreeViewPrimitives.BranchControl>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitives.BranchControl>
>(({ children, ...props }, ref) => {
  return (
    <TreeViewPrimitives.BranchControl
      ref={ref}
      className="rounded pl-[calc(calc(var(--depth)_+_1)_*_16px)] transition-colors hover:bg-base-100"
      {...props}
    >
      <div className="flex h-9 -translate-x-6 items-center">
        <TreeViewPrimitives.BranchIndicator
          className="mr-2 h-4 w-4 shrink-0 text-primary-600 transition-transform duration-200 data-[state=open]:rotate-90 data-[disabled]:opacity-40 data-[disabled]:hover:bg-transparent"
          asChild
        >
          <IconChevronRight />
        </TreeViewPrimitives.BranchIndicator>
        {children}
      </div>
    </TreeViewPrimitives.BranchControl>
  );
});

TreeViewBranchControl.displayName = "TreeViewBranchControl";

const TreeViewBranchContent = forwardRef<
  React.ElementRef<typeof TreeViewPrimitives.BranchContent>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitives.BranchContent>
>(({ children, ...props }, ref) => {
  return (
    <TreeViewPrimitives.BranchContent
      ref={ref}
      className="w-full list-none"
      {...props}
    >
      {children}
    </TreeViewPrimitives.BranchContent>
  );
});

TreeViewBranchContent.displayName = "TreeViewBranchContent";

const TreeViewItem = forwardRef<
  React.ElementRef<typeof TreeViewPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof TreeViewPrimitives.Item>
>(({ children, ...props }, ref) => {
  return (
    <TreeViewPrimitives.Item
      ref={ref}
      className="flex h-9 cursor-pointer items-center rounded pl-[calc(calc(var(--depth)_+_1)_*_16px)] transition-colors hover:bg-base-100 data-[disabled]:opacity-40 data-[disabled]:hover:bg-transparent"
      {...props}
    >
      <div className="">
        <TreeViewPrimitives.ItemText className="text-base-800">
          {children}
        </TreeViewPrimitives.ItemText>
      </div>
    </TreeViewPrimitives.Item>
  );
});

TreeViewItem.displayName = "TreeViewItem";

export {
  TreeView,
  TreeViewBranch,
  TreeViewBranchControl,
  TreeViewBranchContent,
  TreeViewItem,
};
