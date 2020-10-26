import React from "react";
import Button from "./Button";

function NewTask({ onAddText }) {
  const [Text, setText] = React.useState("");

  const inputTask = (event) => {
    const value = event.target.value;
    setText(value);
  };

  const addTask = () => {
    if (Text) {
      onAddText(Text);
      setText("");
    }
  };

  const enterTask = (e) => {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  return (
    <div className="todo_addTask">
      <input
        type="text"
        onKeyUp={enterTask}
        placeholder="Добавить задачу..."
        value={Text}
        onChange={inputTask}
      />
      <Button addTask={addTask}>Добавить</Button>
    </div>
  );
}

export default NewTask;
