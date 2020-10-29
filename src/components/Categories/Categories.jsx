import React from "react";
import Button from "../Button";
import Colors from "../Colors";

import "./categories.scss";

function Categories({ items, addCategory, colors }) {
  const [visible, setVisible] = React.useState(false);

  const [selectedColor, setSelectedColor] = React.useState(colors[0].id);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  // const [category, setCategory] = React.useState("");

  // const newCategory = (e) => {
  //   const value = e.target.value;
  //   setCategory(value);
  // };

  return (
    <div className="todo_categories">
      <ul>
        {items.map((item, index) => (
          <Button key={`${item.name}_${index}`} className="todo_category">
            <div
              className="circle"
              style={{ background: `${item.background}` }}
            ></div>
            <li>{item.name}</li>
          </Button>
        ))}
      </ul>

      <div className="todo_addCategory">
        <Button
          toggleVisible={toggleVisible}
          style={{ display: visible ? "flex" : "none" }}
        >
          Добавить категорию
        </Button>
        {visible && (
          <div className="todo_popup">
            <input
              className="newField"
              type="text"
              placeholder="Новая папка..."
              // onChange={newCategory}
            />
            <div className="color">
              {colors.map((color) => (
                <Colors
                  onClick={() => setSelectedColor(color.id)}
                  color={color.name}
                  key={color.id}
                  className={selectedColor === color.id && "active"}
                />
              ))}
            </div>
            <Button addCategory={addCategory}>Добавить</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
