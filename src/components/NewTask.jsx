import React from "react";
import Button from "./Button";
import axios from "axios";

function NewTask({ list, onAddTask }) {
  const [inputValue, setInputValue] = React.useState("");

  const AddTask = () => {
    if (!inputValue.trim()) {
      alert("Введите название задачи");
      return;
    }
    const obj = {
      text: inputValue,
      completed: false,
      categoryId: list.id,
    };
    axios.post("http://localhost:3001/tasks", obj).then(({ data }) => {
      onAddTask(list.id, data);
    });
    setInputValue("");
  };

  return (
    <div className="todo_addTask">
      <input
        type="text"
        placeholder="Добавить задачу..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button AddTask={AddTask}>Добавить</Button>
    </div>
  );
}

export default NewTask;
