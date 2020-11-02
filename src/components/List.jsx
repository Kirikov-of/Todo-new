import React from "react";
import NewTask from "./NewTask";
import Task from "./Task";

function List({ list, onAddTask }) {
  return (
    <div className="todo_list">
      <h1>{list.name}</h1>
      <NewTask list={list} onAddTask={onAddTask} />
      {list && <Task list={list} />}
    </div>
  );
}

export default List;
