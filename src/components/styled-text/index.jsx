import React from "react";
import "./text.css";

const Text = ({ children, className }) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export default Text;
