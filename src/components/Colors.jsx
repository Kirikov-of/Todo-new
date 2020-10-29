import React from "react";

const Colors = ({ color, onClick, className }) => (
  <i onClick={onClick} className={`colors colors--${color} ${className}`}></i>
);

export default Colors;
