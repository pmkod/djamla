"use client";
import React, {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { IconCheck } from "@tabler/icons-react";
import { ToggleGroup, Toggle, Switch } from "@repo/react-ui";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Variant = "solid" | "outline" | "soft" | "plain" | "ghost";
type ColorScheme = "primary" | "red" | "black" | "green";
type Position = "top" | "right" | "bottom" | "left";

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
  defaultSize = "md",
  variants,
  defaultVariant = "solid",
  colorSchemes,
  defaultColorScheme = "primary",
  positions,
  defaultPosition,
  fullWidth,
  isLoading,
  disabled,
}: ComponentPreviewProps) => {
  const [size, setSize] = useState(defaultSize);
  const [variant, setVariant] = useState(defaultVariant);
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);
  const [position, setPosition] = useState(defaultPosition);
  const [_isLoading, _setIsLoading] = useState(isLoading);
  const [_disabled, _setDisabled] = useState(disabled);
  const [_fullWidth, _setFullwidth] = useState(fullWidth);

  const showRightPanel =
    sizes !== undefined ||
    variants !== undefined ||
    colorSchemes !== undefined ||
    positions !== undefined ||
    _isLoading !== undefined ||
    _disabled !== undefined ||
    _fullWidth !== undefined;

  return (
    <div className="mt-8 mb-8 flex min-h-40 rounded border border-base-300">
      <div className="flex flex-1 items-center justify-center px-10 py-4">
        {Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, {
            size,
            variant,
            colorScheme,
            position,
            fullWidth: _fullWidth,
            loading: _isLoading,
            disabled: _disabled,
          })
        )}
      </div>
      {showRightPanel && (
        <div className="space-y-4 border-l border-l-base-300 px-6 py-4">
          {positions !== undefined && (
            <div>
              <div>Position</div>
              <div className="mt-0.5">
                <ToggleGroup defaultValue={[defaultVariant]}>
                  {positions.map((position) => (
                    <Toggle
                      key={position}
                      value={position}
                      size="sm"
                      variant="outline"
                      onClick={() => setPosition(position)}
                    >
                      <div className="px-2.5">{position}</div>
                    </Toggle>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          )}
          {variants !== undefined && (
            <div>
              <div>Variant</div>
              <div className="mt-0.5">
                <ToggleGroup defaultValue={[defaultVariant]}>
                  {variants.map((variant) => (
                    <Toggle
                      key={variant}
                      value={variant}
                      size="sm"
                      variant="outline"
                      onClick={() => setVariant(variant)}
                    >
                      <div className="px-2.5">{variant}</div>
                    </Toggle>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          )}
          {sizes !== undefined && (
            <div>
              <div>Size</div>
              <div className="mt-0.5">
                <ToggleGroup defaultValue={[defaultSize]}>
                  {sizes.map((size) => (
                    <Toggle
                      key={size}
                      value={size}
                      size="sm"
                      variant="outline"
                      onClick={() => setSize(size)}
                    >
                      {size}
                    </Toggle>
                  ))}
                </ToggleGroup>
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

          {_isLoading !== undefined && (
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
