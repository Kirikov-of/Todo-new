import React from "react";
import NewTask from "./NewTask";
import Task from "./Task";

function List({ list, onAddTask, onRemoveTask, onCompleteTask }) {
  return (
    <div className="todo_list">
      <h1>{list.name}</h1>
      <NewTask list={list} onAddTask={onAddTask} />
      {!list.tasks.length && <h2>Задачи отсутсвуют</h2>}
      {list.tasks &&
        list.tasks.map((task) => (
          <Task
            onCompleteTask={onCompleteTask}
            key={task.id}
            list={list}
            onRemoveTask={onRemoveTask}
            {...task}
          />
        ))}
    </div>
  );
}

export default List;
