export const ratingCode = `"use client";

import { forwardRef } from "react";
import { RatingGroup as RatingGroupPrimitives } from "@ark-ui/react";
import { IconStarFilled } from "@tabler/icons-react";
import { cva, VariantProps } from "class-variance-authority";

const ratingStarStyle = cva("cursor-pointer outline-none transition-colors", {
  variants: {
    size: {
      sm: "size-5",
      md: "size-6",
      lg: "size-7",
    },
    highlighted: {
      true: "fill-amber-400 opacity-100",
      false: "fill-base-200",
    },
  },
  defaultVariants: {
    size: "md",
    highlighted: true,
  },
});

const Rating = forwardRef<
  React.ElementRef<typeof RatingGroupPrimitives.Root> &
    VariantProps<typeof ratingStarStyle>,
  React.ComponentPropsWithoutRef<typeof RatingGroupPrimitives.Root> &
    VariantProps<typeof ratingStarStyle>
>(({ children, size, ...props }, ref) => (
  <RatingGroupPrimitives.Root ref={ref} {...props}>
    <RatingGroupPrimitives.Control className="flex gap-x-1">
      <RatingGroupPrimitives.Context>
        {({ items }) =>
          items.map((item) => (
            <RatingGroupPrimitives.Item key={item} index={item}>
              <RatingGroupPrimitives.ItemContext>
                {({ highlighted }) => (
                  <IconStarFilled
                    fill="current"
                    className={ratingStarStyle({ highlighted, size })}
                  />
                )}
              </RatingGroupPrimitives.ItemContext>
            </RatingGroupPrimitives.Item>
          ))
        }
      </RatingGroupPrimitives.Context>
      <RatingGroupPrimitives.HiddenInput />
    </RatingGroupPrimitives.Control>
  </RatingGroupPrimitives.Root>
));

export { Rating };
`