import React from "react";

function Button({
  children,
  className,
  AddTask,
  toggleVisible,
  addCat,
  onClickItem,
  removeTask,
}) {
  return (
    <button
      className={className}
      onClick={toggleVisible || addCat || onClickItem || AddTask || removeTask}
    >
      {children}
    </button>
  );
}

export default Button;
