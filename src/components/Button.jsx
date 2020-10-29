import React from "react";

function Button({
  children,
  className,
  addTask,
  addCategory,
  removeItem,
  toggleVisible,
}) {
  return (
    <button
      className={className}
      onClick={addTask || addCategory || removeItem || toggleVisible}
    >
      {children}
    </button>
  );
}

export default Button;
