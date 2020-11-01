import React from "react";
import Button from "../Button";
import Colors from "../Colors";

import "./categories.scss";

function Categories({ items, colors, addCategory }) {
  const [visible, setVisible] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(colors[0].id);
  const [inputValue, setInputValue] = React.useState("");

  const addCat = () => {
    if (!inputValue) {
      alert("Введите название папки");
      return;
    }
    const color = colors.filter((c) => c.id === selectedColor)[0].color;
    addCategory({
      name: inputValue,
      id: Math.random(),
      color,
    });
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const addAndToggle = () => {
    addCat();
    setVisible(!visible);
    setInputValue("");
  };

  const enterCat = (e) => {
    if (e.keyCode === 13) {
      addAndToggle();
    }
  };

  return (
    <div className="todo_categories">
      <ul>
        {items.map((item, id) => (
          <Button key={`${item.name}_${id}`} className="todo_category">
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
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Новая папка..."
              value={inputValue}
              onKeyUp={enterCat}
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
