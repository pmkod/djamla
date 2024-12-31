export const ratingCode = `"use client";

import { RatingGroup as RatingGroupPrimitives } from "@ark-ui/solid";
import { IconStarFilled } from "@tabler/icons-solidjs";
import { cva, VariantProps } from "class-variance-authority";
import { Index, splitProps } from "solid-js";

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

interface RatingProps extends RatingGroupPrimitives.RootProps, VariantProps<typeof ratingStarStyle> {}


const Rating = (props: RatingProps) => {
    const [local, rest] = splitProps(props, ['size'])
    return (
        
            <RatingGroupPrimitives.Root {...rest}>
              <RatingGroupPrimitives.Control class="flex gap-x-1">
                <RatingGroupPrimitives.Context>
                  {(context) =>

<Index each={context().items}>
{(index) => (
  <RatingGroupPrimitives.Item index={index()}>
    <RatingGroupPrimitives.ItemContext>
      {(context) => (

                      <RatingGroupPrimitives.Item index={index()}>
                        <RatingGroupPrimitives.ItemContext>
                          {(context) => (
                            <IconStarFilled
                              fill="current"
                              class={ratingStarStyle({ highlighted: context().highlighted, size: local.size })}
                            />
                          )}
                        </RatingGroupPrimitives.ItemContext>
                      </RatingGroupPrimitives.Item>
      )}
    </RatingGroupPrimitives.ItemContext>
  </RatingGroupPrimitives.Item>
)}
</Index>


                  }
                </RatingGroupPrimitives.Context>
                <RatingGroupPrimitives.HiddenInput />
              </RatingGroupPrimitives.Control>
            </RatingGroupPrimitives.Root>
          
    )
}

export { Rating };
`