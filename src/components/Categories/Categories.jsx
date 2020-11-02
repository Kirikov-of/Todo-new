import React from "react";
import Button from "../Button";
import Colors from "../Colors";
import classnames from "classnames";
import axios from "axios";

import "./categories.scss";

function Categories({ items, colors, addCategory, onClickItem, activeItem }) {
  const [visible, setVisible] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(3);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectedColor(colors[0].id);
    }
  }, [colors]);

  const addCat = () => {
    if (!inputValue) {
      alert("Введите название папки");
      return;
    }
    axios
      .post("http://localhost:3001/categories", {
        name: inputValue,
        colorId: selectedColor,
      })
      .then(({ data }) => {
        const color = colors.filter((color) => color.id === selectedColor)[0];
        const listObj = { ...data, color, tasks: [] };
        addCategory(listObj);
        setVisible(!visible);
      });
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const enterCat = (e) => {
    if (e.keyCode === 13) {
      addCat();
    }
  };

  return (
    <div className="todo_categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <Button
              key={`${item.name}_${index}`}
              className={classnames("todo_category", {
                active: activeItem && activeItem.id === item.id,
              })}
              onClickItem={onClickItem ? () => onClickItem(item) : null}
            >
              <Colors color={item.color.color} />
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
            <Button addCat={addCat}>Добавить</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;
