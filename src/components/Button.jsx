import React from "react";

function Button({ children, className, addTask, addCategory, removeItem }) {
  return (
    <button
      className={className}
      onClick={addTask || addCategory || removeItem}
    >
      {children}
    </button>
  );
}

export default Button;
