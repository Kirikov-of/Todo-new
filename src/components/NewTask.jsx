import React from "react";
import Button from "./Button";

function NewTask() {
  return (
    <div className="todo_addTask">
      <input type="text" placeholder="Добавить задачу..." />
      <Button>Добавить</Button>
    </div>
  );
}

export default NewTask;
