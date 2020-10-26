import React from "react";

function Button({ children, className, addTask }) {
  return (
    <button className={className} onClick={addTask}>
      {children}
    </button>
  );
}

export default Button;
