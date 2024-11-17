export const carouselCode = `"use client";
import React, { forwardRef } from "react";
import {
  Carousel as CarouselPrimitives,
  useCarouselContext,
} from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Carousel = forwardRef<
  React.ElementRef<typeof CarouselPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitives.Root>
>((props, ref) => {
  return (
    <CarouselPrimitives.Root
      ref={ref}
      className="relative h-full w-full max-w-full overflow-hidden bg-base-200"
      {...props}
    ></CarouselPrimitives.Root>
  );
});

Carousel.displayName = "Carousel";

const carouselTriggerStyle = cva(
  "absolute top-1/2 z-40 bg-white flex aspect-square -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full text-base-500 shadow transition-colors hover:bg-base-100",
  {
    variants: {
      position: {
        left: "left-4",
        right: "right-4",
      },
      size: {
        xs: "w-8",
        sm: "w-9",
        md: "w-10",
        ld: "w-11",
        xl: "w-12",
      },
    },
    defaultVariants: {
      position: "left",
      size: "md",
    },
  }
);

const CarouselControl = forwardRef<
  React.ElementRef<typeof CarouselPrimitives.NextTrigger>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitives.NextTrigger>
>(() => {
  const { canScrollNext, canScrollPrev } = useCarouselContext();
  return (
    <CarouselPrimitives.Control>
      {canScrollPrev && (
        <CarouselPrimitives.PrevTrigger
          className={carouselTriggerStyle({
            position: "left",
          })}
        >
          <IconChevronLeft />
        </CarouselPrimitives.PrevTrigger>
      )}
      {canScrollNext && (
        <CarouselPrimitives.NextTrigger
          className={carouselTriggerStyle({
            position: "right",
          })}
        >
          <IconChevronRight />
        </CarouselPrimitives.NextTrigger>
      )}
    </CarouselPrimitives.Control>
  );
});

CarouselControl.displayName = "CarouselControl";

const CarouselItemGroup = forwardRef<
  React.ElementRef<typeof CarouselPrimitives.ItemGroup>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitives.ItemGroup>
>(({ children, ...props }, ref) => (
  <CarouselPrimitives.Viewport>
    <CarouselPrimitives.ItemGroup ref={ref} {...props}>
      {children}
    </CarouselPrimitives.ItemGroup>
  </CarouselPrimitives.Viewport>
));

CarouselItemGroup.displayName = "CarouselItemGroup";

const CarouselItem = forwardRef<
  React.ElementRef<typeof CarouselPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitives.Item>
>(({ children, ...props }, ref) => (
  <CarouselPrimitives.Item
    ref={ref}
    {...props}
    className="h-full w-full object-cover"
    asChild
  >
    {children}
  </CarouselPrimitives.Item>
));

CarouselItem.displayName = "CarouselItem";

interface CarouselIndicatorGroupProps {
  itemCount: number;
}

const CarouselIndicatorGroup = forwardRef<
  React.ElementRef<typeof CarouselPrimitives.IndicatorGroup> &
    CarouselIndicatorGroupProps,
  React.ComponentPropsWithoutRef<typeof CarouselPrimitives.IndicatorGroup> &
    CarouselIndicatorGroupProps
>(({ children, itemCount, ...props }, ref) => {
  return (
    <CarouselPrimitives.IndicatorGroup
      ref={ref}
      className="absolute bottom-2 left-1/2 z-50 flex h-max w-max -translate-x-1/2 transform gap-x-1 rounded-full bg-base-800 p-1.5"
      {...props}
    >
      {Array.from(Array(itemCount).keys()).map((_, index) => (
        <CarouselPrimitives.Indicator
          key={index}
          index={index}
          className="h-2 w-2 rounded-full bg-base-600 data-[current]:bg-base-200"
        />
      ))}
      {children}
    </CarouselPrimitives.IndicatorGroup>
  );
});

CarouselIndicatorGroup.displayName = "CarouselIndicatorGroup";

export {
  Carousel,
  CarouselItemGroup,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselItem,
};
`;
