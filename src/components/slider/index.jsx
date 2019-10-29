import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";

const CustomSlider = props => {
  return (
    <Slider
      min={500}
      max={2000}
      // value={value}
      //   onChange={value => setValue(value)}
      handleStyle={{
        height: 18,
        width: 18,
        marginTop: -5,
        backgroundColor: "white",
        borderColor: "white"
      }}
      trackStyle={{ height: 7.5, backgroundColor: "white" }}
      railStyle={{ height: 7.5, backgroundColor: "white" }}
    />
  );
};

export default CustomSlider;
