import React from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../react/components/core/radio-group";

const RadioGroupPage = () => {
  return (
    <div>
      <div className="p-20">
        <RadioGroup orientation="horizontal">
          <RadioGroupItem value="a">React</RadioGroupItem>
          <RadioGroupItem value="b">Solid</RadioGroupItem>
          <RadioGroupItem value="c">Vue</RadioGroupItem>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioGroupPage;
