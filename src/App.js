import React from "react";
import Categories from "./components/Categories/Categories";
import List from "./components/List";
import { useHistory, Route, useLocation } from "react-router-dom";
import axios from "axios";

import "./app.scss";

function App() {
  let history = useHistory();
  let location = useLocation()
  
  const [category, setCategory] = React.useState(null);
  const [colors, setColors] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/categories?_expand=color&_embed=tasks")
      .then(({ data }) => {
        setCategory(data);
      });
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      setColors(data);
    });
  }, []);

  const addCategory = (obj) => {
    const list = [...category, obj];
    setCategory(list);
  };

  const onAddTask = (categoryId, taskObj) => {
    const newlist = category.map((item) => {
      if (item.id === categoryId) {
        item.tasks = [...item.tasks, taskObj];
      }
      return item;
    });
    setCategory(newlist);
  };

  React.useEffect(() => {
    const categoryId = location.pathname.split('categories/')[1]
    if(category) {
      const cat = category.find(category => category.id === Number(categoryId))
      setActiveItem(cat);
    }
  }, [category, location.pathname])

  const onRemoveTask = (categoryId , taskId) => {
    if (window.confirm("Вы действительно хотите удалить задачу?")) {
      const newList = category.map(item => {
        if(item.id === categoryId) {
          item.tasks = item.tasks.filter(task => task.id !== taskId)
        }
        return item
      })
      setCategory(newList)
      axios
        .delete('http://localhost:3001/tasks/' + taskId)
        .catch(() => {
          alert('Не удалось удалить задачу')
        })
    }
  };




  const onCompleteTask = (categoryId , taskId, completed) => {
    const newList = category.map(item => {
      if(item.id === categoryId) {
        item.tasks = item.tasks.map(task => {
          if(task.id === taskId) {
            task.completed = completed
          }
          return task;
        })
      }
      return item
    })
    setCategory(newList)
    axios
      .patch('http://localhost:3001/tasks/' + taskId, {
        completed
      })
      .catch(() => {
        alert('Не удалось завершить задачу')
      })
  }

  return (
    <div className="todo">
      <Categories
        onClickItem={category => {
          history.push(`/categories/${category.id}`)
        }}
        onRemove={id => 
        {
          const newCat = category.filter((item) => item.id !== id)
          setCategory(newCat)
        }}
        activeItem={activeItem}
        items={category}
        addCategory={addCategory}
        colors={colors}
      />
      <Route path='/'>
      {category && activeItem && (
        <List onCompleteTask={onCompleteTask} list={activeItem} category={activeItem} onAddTask={onAddTask} onRemoveTask={onRemoveTask}/>
      )}
      </Route>
    </div>
  );
}

export default App;
