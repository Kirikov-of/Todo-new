import React from "react";
import Categories from "./components/Categories/Categories";
import List from "./components/List";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./app.scss";

function App() {
  let history = useHistory();
  
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

  React.useEffect(() => {
    const categoryId = history.location.pathname.split("category/")[1];
    if (category) {
      const list = category.find(
        (cat) => cat.id === Number(categoryId)
      );
      setActiveItem(list);
    }
  }, [category, history.location.pathname]);

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

  return (
    <div className="todo">
      <Categories
        onClickItem={(item) => setActiveItem(item)}
        activeItem={activeItem}
        items={category}
        addCategory={addCategory}
        colors={colors}
      />

      {category && activeItem && (
        <List list={activeItem} category={activeItem} onAddTask={onAddTask} />
      )}
    </div>
  );
}

export default App;
