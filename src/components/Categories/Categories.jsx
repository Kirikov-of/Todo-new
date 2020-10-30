import React from "react";
import Button from "../Button";
import Colors from "../Colors";

import "./categories.scss";

function Categories({ items, addCategory, colors, newCategory }) {
  const [visible, setVisible] = React.useState(false);

  const [selectedColor, setSelectedColor] = React.useState(colors[0].id);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const addAndToggle = () => {
    addCategory();
    setVisible(!visible);
  };

  return (
    <div className="todo_categories">
      <ul>
        {items.map((item, index) => (
          <Button key={`${item.name}_${index}`} className="todo_category">
            <Colors color={item.color} />
            <li>{item.name}</li>
          </Button>
        ))}
      </ul>

      <div className="todo_addCategory">
        <Button toggleVisible={toggleVisible}>Добавить новую папку</Button>
        {visible && (
          <div className="todo_popup">
            <input
              className="newField"
              type="text"
              placeholder="Новая папка..."
              onChange={newCategory}
            />
            <div className="color">
              {colors.map((color) => (
                <Colors
                  onClick={() => setSelectedColor(color.id)}
                  color={color.color}
                  key={color.id}
                  className={selectedColor === color.id && "active"}
                />
              ))}
            </div>
            <Button addAndToggle={addAndToggle}>Добавить</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
