import React from 'react'
import "./app.scss";
import Categories from "./components/Categories";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

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

  const categoryName = [
    "Все задачи",
    "Frontend",
    "Backend",
    "Покупки",
    "Срочные",
  ];

  const onAddText = (text) => {
    SetTask((prevTask) => [
      ...prevTask,
      {
        text,
        complited: false
      }
    ])}

    const toggleComplited = (index) => {
      SetTask((prevTask) => prevTask.map((task, currIndex) => {
        if(index === currIndex) {
          return {
            ...task,
            complited: !task.complited
          }
        }
        return task
      }))
    }

    const onRemoveItem = (index) => {
      SetTask((prevTask) => prevTask.filter((_, currIndex) => {
        if(index !== currIndex) {
          return true
        }
        return false
      }))
    }


  return (
    <div className="todo">
      <Categories items={categoryName} />
      <div className="todo_list">
        <h1>Frontend</h1>
        <NewTask 
          onAddText={onAddText} 
          />
        <div className="todo_tasks">
          {
            task.map((item,index) => 
              (<Task 
                item={item.text} 
                index={index} 
                key={`${item}_${index}`} 
                complited={item.complited} 
                toggleComplited={toggleComplited} 
                onRemoveItem={onRemoveItem}
              />)
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
