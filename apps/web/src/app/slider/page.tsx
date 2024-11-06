import React from "react";
import { Slider } from "../../react/components/core/slider";

const SliderPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="w-96 space-y-20">
          <Slider size="sm" />
          <Slider size="md" />

          <Slider size="lg" />

          <div className="size-52 bg-neutral-100">
            <Slider orientation="vertical" size="xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
