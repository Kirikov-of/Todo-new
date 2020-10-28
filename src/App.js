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

  const [categories, SetCategories] = React.useState([
    {
      name: 'Все задачи',
      background: '#EC9F2B'
    },
    {
      name: 'Frontend',
      background: '#C2C54F'
    },
    {
      name: 'Backend',
      background: '#339494'
    },
    {
      name: 'Покупки',
      background: '#419433'
    },
    {
      name: 'Срочные',
      background: '#F90000'
    }
  ])

  const addCategory = (name) => {
    SetCategories((prevCategory) => [
      ...prevCategory,
        name
    ])
  }

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
      <Categories items={categories} addCategory={addCategory}/>
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
