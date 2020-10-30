import React from "react";
import classNames from "classnames";

const Colors = ({ color, onClick, className }) => (
  <i
    onClick={onClick}
    className={classNames("colors", { [`colors--${color}`]: color }, className)}
  ></i>
);

export default Colors;
