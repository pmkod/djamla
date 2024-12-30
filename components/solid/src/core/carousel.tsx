import {
  Carousel as CarouselPrimitives,
  useCarouselContext,
} from "@ark-ui/solid";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-solidjs";
import { cva } from "class-variance-authority";
import { splitProps } from "solid-js";

const Carousel = (props: CarouselPrimitives.RootProps) => {
  return (
    <CarouselPrimitives.Root
      
      class="bg-base-200 relative h-full w-full max-w-full overflow-hidden"
      {...props}
    ></CarouselPrimitives.Root>
  );
};

Carousel.displayName = "Carousel";

const carouselTriggerStyle = cva(
  "text-base-500 hover:bg-base-100 absolute top-1/2 z-40 flex aspect-square -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white shadow transition-colors",
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
  },
);

const CarouselControl = () => {
  const carouselContext = useCarouselContext();
  const { canScrollNext, canScrollPrev } = carouselContext()
  return (
    <CarouselPrimitives.Control>
      {canScrollPrev && (
        <CarouselPrimitives.PrevTrigger
          class={carouselTriggerStyle({
            position: "left",
          })}
        >
          <IconChevronLeft />
        </CarouselPrimitives.PrevTrigger>
      )}
      {canScrollNext && (
        <CarouselPrimitives.NextTrigger
          class={carouselTriggerStyle({
            position: "right",
          })}
        >
          <IconChevronRight />
        </CarouselPrimitives.NextTrigger>
      )}
    </CarouselPrimitives.Control>
  );
};


const CarouselItemGroup = (props: CarouselPrimitives.ItemGroupProps) => {
    const [local, restProps] = splitProps(props, ['children'])
    return (
  
        <CarouselPrimitives.ItemGroup {...restProps}>
          {local.children}
        </CarouselPrimitives.ItemGroup>
      
    )
}


const CarouselItem = (props: CarouselPrimitives.ItemProps) => {
    const [local, restProps] = splitProps(props, ['children'])

    return (
        <CarouselPrimitives.Item
          {...restProps}
          class="h-full w-full object-cover"
          
        >
          {local.children}
        </CarouselPrimitives.Item>
      )
}

CarouselItem.displayName = "CarouselItem";

interface CarouselIndicatorGroupProps extends CarouselPrimitives.IndicatorGroupProps {
  itemCount: number;
}

const CarouselIndicatorGroup = (props: CarouselIndicatorGroupProps) => {
    const [local, restProps] = splitProps(props, ['children', 'itemCount'])

  return (
    <CarouselPrimitives.IndicatorGroup
      class="bg-base-800 absolute bottom-2 left-1/2 z-50 flex h-max w-max -translate-x-1/2 transform gap-x-1 rounded-full p-1.5"
      {...restProps}
    >
      {Array.from(Array(local.itemCount).keys()).map((_, index) => (
        <CarouselPrimitives.Indicator
          index={index}
          class="bg-base-600 data-[current]:bg-base-200 h-2 w-2 rounded-full"
        />
      ))}
      {local.children}
    </CarouselPrimitives.IndicatorGroup>
  );
};

CarouselIndicatorGroup.displayName = "CarouselIndicatorGroup";

export {
  Carousel,
  CarouselControl,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
};
