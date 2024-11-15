"use client";
import React, {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { IconCheck } from "@tabler/icons-react";
import {
  ToggleGroup,
  Toggle,
  Switch,
  Select,
  SelectItemGroup,
  SelectItem,
  createListCollection,
} from "@repo/react-ui";
import { shake } from "radash";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Variant = "solid" | "outline" | "soft" | "plain" | "ghost";
type ColorScheme = "primary" | "red" | "black" | "green";
type Position = "top" | "right" | "bottom" | "left";
type Orientation = "vertical" | "horizontal";

interface ComponentPreviewProps {
  children: ReactNode;
  sizes?: Size[];
  defaultSize?: Size;
  variants?: Variant[];
  defaultVariant?: Variant;
  colorSchemes?: ColorScheme[];
  defaultColorScheme?: ColorScheme;
  positions?: Position[];
  defaultPosition?: Position;
  orientations?: Orientation[];
  defaultOrientation?: Orientation;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const colors = {
  primary: "bg-primary-500 hover:bg-primary-600",
  black: "bg-base-900 hover:bg-black",
  green: "bg-green-500 hover:bg-green-600",
  red: "bg-red-500 hover:bg-red-600",
};

export const ComponentPreview = ({
  children,
  sizes,
  defaultSize,
  variants,
  defaultVariant,
  colorSchemes,
  defaultColorScheme,
  positions,
  defaultPosition,
  defaultOrientation,
  orientations,
  fullWidth,
  isLoading,
  disabled,
}: ComponentPreviewProps) => {
  const [size, setSize] = useState(defaultSize);
  const [variant, setVariant] = useState(defaultVariant);
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);
  const [position, setPosition] = useState(defaultPosition);
  const [orientation, setOrientation] = useState(defaultOrientation);
  const [_isLoading, _setIsLoading] = useState(isLoading);
  const [_disabled, _setDisabled] = useState(disabled);
  const [_fullWidth, _setFullwidth] = useState(fullWidth);

  const showRightPanel =
    sizes !== undefined ||
    variants !== undefined ||
    colorSchemes !== undefined ||
    positions !== undefined ||
    orientations !== undefined ||
    _isLoading !== undefined ||
    _disabled !== undefined ||
    _fullWidth !== undefined;

  const variantsCollenction = createListCollection({ items: variants || [] });

  return (
    <div className="mt-8 mb-8 flex min-h-40 rounded border border-base-300">
      <div className="flex flex-1 items-center justify-center px-10 py-4">
        {Children.toArray(children).map((child) =>
          cloneElement(
            child as ReactElement,
            shake({
              size,
              variant,
              colorScheme,
              position,
              orientation,
              fullWidth: _fullWidth,
              isLoading: _isLoading,
              disabled: _disabled,
            })
          )
        )}
      </div>
      {showRightPanel && (
        <div className="space-y-4 border-l border-l-base-300 px-6 py-4 text-base-700">
          {variants !== undefined && defaultVariant !== undefined && (
            <div>
              <div>Variant</div>
              <div className="mt-0.5">
                <Select
                  size="md"
                  defaultValue={[defaultVariant]}
                  collection={variantsCollenction}
                >
                  <SelectItemGroup defaultValue={defaultVariant}>
                    {variantsCollenction.items.map((variant, index) => (
                      <SelectItem
                        key={index}
                        item={variant}
                        onClick={() => setVariant(variant)}
                      />
                    ))}
                  </SelectItemGroup>
                </Select>
              </div>
            </div>
          )}
          {sizes !== undefined && defaultSize !== undefined && (
            <div>
              <div>Size</div>
              <div className="mt-0.5">
                <Select
                  size="md"
                  defaultValue={[defaultSize]}
                  collection={createListCollection({ items: sizes })}
                >
                  <SelectItemGroup defaultValue={defaultSize}>
                    {sizes.map((size, index) => (
                      <SelectItem
                        key={index}
                        item={size}
                        onClick={() => setSize(size)}
                      />
                    ))}
                  </SelectItemGroup>
                </Select>
              </div>
            </div>
          )}
          {positions !== undefined && defaultPosition !== undefined && (
            <div>
              <div>Position</div>
              <div className="mt-0.5">
                <Select
                  size="md"
                  defaultValue={[defaultPosition]}
                  collection={createListCollection({ items: positions })}
                >
                  <SelectItemGroup defaultValue={defaultPosition}>
                    {positions.map((position, index) => (
                      <SelectItem
                        key={index}
                        item={position}
                        onClick={() => setPosition(position)}
                      />
                    ))}
                  </SelectItemGroup>
                </Select>
              </div>
            </div>
          )}
          {orientations !== undefined && defaultOrientation !== undefined && (
            <div>
              <div>Orientation</div>
              <div className="mt-0.5">
                <Select
                  size="md"
                  defaultValue={[defaultOrientation]}
                  collection={createListCollection({ items: orientations })}
                >
                  <SelectItemGroup defaultValue={defaultSize}>
                    {orientations.map((orientation, index) => (
                      <SelectItem
                        key={index}
                        item={orientation}
                        onClick={() => setOrientation(orientation)}
                      />
                    ))}
                  </SelectItemGroup>
                </Select>
              </div>
            </div>
          )}
          {colorSchemes !== undefined && (
            <div>
              <div>Color scheme</div>
              <div className="mt-0.5">
                <div className="flex gap-1">
                  {colorSchemes.map((cS, index) => (
                    <div
                      key={index}
                      onClick={() => setColorScheme(cS)}
                      className={
                        colors[cS] +
                        " flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors"
                      }
                    >
                      {colorScheme === cS && (
                        <IconCheck className="h-4 w-4 text-white" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {isLoading !== undefined && (
            <div className="flex items-center gap-x-2">
              <Switch
                checked={_isLoading}
                onCheckedChange={({ checked }) => _setIsLoading(checked)}
              />
              <div>Loading</div>
            </div>
          )}

          {fullWidth !== undefined && (
            <div className="flex items-center gap-x-2">
              <Switch
                checked={_fullWidth}
                onCheckedChange={({ checked }) => _setFullwidth(checked)}
              />
              <div>Full width</div>
            </div>
          )}

          {disabled !== undefined && (
            <div className="flex items-center gap-x-2">
              <Switch
                checked={_disabled}
                onCheckedChange={({ checked }) => _setDisabled(checked)}
              />
              <div>Disabled</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
