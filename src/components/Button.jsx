import React from "react";

function Button({
  children,
  className,
  AddTask,
  toggleVisible,
  addCat,
  onClickItem,
}) {
  return (
    <button
      className={className}
      onClick={toggleVisible || addCat || onClickItem || AddTask}
    >
      {children}
    </button>
  );
}

export default Button;
