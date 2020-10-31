import React from "react";
import Categories from "./components/Categories/Categories";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

import "./app.scss";
import DB from "./assets/colors.json";

function App() {
  const [task, SetTask] = React.useState([
    {
      text: "Сделать дизайн Todo",
      complited: true,
    },
    {
      text: "Написать приложение",
      complited: false,
    },
  ]);

  const [category, setCategory] = React.useState(
    DB.categories.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].color;
      return item;
  }));

  

  const addCategory = (obj) => {
    const list = [
      ...category,
      obj
    ]
    setCategory(list);
  };

  const onAddText = (text) => {
    SetTask((prevTask) => [
      ...prevTask,
      {
        text,
        complited: false,
      },
    ]);
  };

  const toggleComplited = (index) => {
    SetTask((prevTask) =>
      prevTask.map((task, currIndex) => {
        if (index === currIndex) {
          return {
            ...task,
            complited: !task.complited,
          };
        }
        return task;
      })
    );
  };

  const onRemoveItem = (index) => {
    SetTask((prevTask) =>
      prevTask.filter((_, currIndex) => {
        if (index !== currIndex) {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <div className="todo">
      <Categories
        items={category}
        addCategory={addCategory}
        colors={DB.colors}
      />
      <div className="todo_list">
        <h1>Frontend</h1>
        <NewTask onAddText={onAddText} />

        {task.map((item, index) => (
          <Task
            item={item.text}
            index={index}
            key={`${item}_${index}`}
            complited={item.complited}
            toggleComplited={toggleComplited}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
