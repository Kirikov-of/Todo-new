import React from "react";
import Button from "./Button";

function Task({ list, onRemoveTask, id, text, onCompleteTask, completed }) {
  const toggleComplete = (e) => {
    onCompleteTask(list.id, id, e.target.checked);
  };

  return (
    <div className="todo_tasks">
      <div
        key={id}
        className={`todo_task ${
          completed ? "todo_task-complite" : "todo_task-uncomplite"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          id={`task-${id}`}
          onChange={toggleComplete}
        />
        <p>{text}</p>
        <Button className="trash" removeTask={() => onRemoveTask(list.id, id)}>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8992 0H6.89917C5.79617 0 4.89917 0.897 4.89917 2V4H0.89917V6H2.89917V18C2.89917 19.103 3.79617 20 4.89917 20H14.8992C16.0022 20 16.8992 19.103 16.8992 18V6H18.8992V4H14.8992V2C14.8992 0.897 14.0022 0 12.8992 0ZM6.89917 2H12.8992V4H6.89917V2ZM14.8992 18H4.89917V6H14.8992V18Z"
              fill="#7C7C7C"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Task;
