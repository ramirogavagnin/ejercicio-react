import React, { useState } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";

const CustomSlider = props => {
  return (
    <Slider
      {...props}
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
