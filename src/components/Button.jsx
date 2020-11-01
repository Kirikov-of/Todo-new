import React from "react";

function Button({
  children,
  className,
  addTask,
  removeItem,
  toggleVisible,
  addAndToggle,
}) {
  return (
    <button
      className={className}
      onClick={addTask || removeItem || toggleVisible || addAndToggle}
    >
      {children}
    </button>
  );
}

export default Button;
