import React from "react";
import Text from "../styled-text";
import CustomSlider from "../slider";
import "./row.css";

const Row = ({ title, value, min, max, onChange }) => {
  return (
    <div className="height-50-p">
      <div className="space-between">
        <Text className="regular">{title}</Text>
        <div className="border padding-horizontal-4">
          <Text className="bold">{value}</Text>
        </div>
      </div>
      <div className="slider-container">
        <CustomSlider value={value} min={min} max={max} onChange={onChange} />
      </div>
      <div className="space-between">
        <Text className="thin">{min}</Text>
        <Text className="thin">{max}</Text>
      </div>
    </div>
  );
};

export default Row;
