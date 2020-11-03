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
    const categoryId = history.location.pathname.split('categories/')[1]
    if(category) {
      const cat = category.find(category => category.id === Number(categoryId))
      setActiveItem(cat);
    }
  }, [category, history.location.pathname])

  return (
    <div className="todo">
      <Categories
        onClickItem={category => {
          history.push(`/categories/${category.id}`)
        }}
        activeItem={activeItem}
        items={category}
        addCategory={addCategory}
        colors={colors}
      />
      <Route path='/'>
      {category && activeItem && (
        <List list={activeItem} category={activeItem} onAddTask={onAddTask} />
      )}
      </Route>
    </div>
  );
}

export default App;
