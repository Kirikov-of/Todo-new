import React from "react";
import Button from "../Button";
import Colors from "../Colors";
import classnames from "classnames";
import axios from "axios";

import "./categories.scss";

function Categories({
  items,
  colors,
  addCategory,
  onClickItem,
  activeItem,
  onRemove,
}) {
  const [visible, setVisible] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(3);
  const [inputValue, setInputValue] = React.useState("");

  const onRemoveCat = (item) => {
    if (window.confirm("Вы действительно хотите удалить задачу?")) {
      axios
        .delete("http://localhost:3001/categories/" + item.id)
        .then(() => onRemove(item.id))
        .catch(() => {
          alert("Не удалось удалить задачу");
        });
    }
  };

  React.useEffect(() => {
    if (Array.isArray(colors)) {
      setSelectedColor(colors[0].id);
    }
  }, [colors]);

  const addCat = () => {
    if (!inputValue.trim()) {
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
        setInputValue("");
        setSelectedColor(1);
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
            <li
              key={`${item.name}_${index}`}
              className={classnames("todo_category", {
                active: activeItem && activeItem.id === item.id,
              })}
              onClick={onClickItem ? () => onClickItem(item) : null}
            >
              <Colors color={item.color.color} />
              <p>{item.name}</p>
              <div className="remove">
                <svg
                  onClick={() => onRemoveCat(item)}
                  width="13"
                  height="13"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.24741 5L9.73899 1.50842C9.9047 1.343 9.99791 1.11853 9.99812 0.884393C9.99832 0.650251 9.90551 0.425617 9.74009 0.259907C9.57468 0.0941973 9.35021 0.000986589 9.11606 0.000779811C8.88192 0.000573033 8.65729 0.0933872 8.49158 0.258804L5 3.75038L1.50842 0.258804C1.34271 0.0930948 1.11796 0 0.883613 0C0.649264 0 0.424514 0.0930948 0.258804 0.258804C0.0930948 0.424514 0 0.649264 0 0.883613C0 1.11796 0.0930948 1.34271 0.258804 1.50842L3.75038 5L0.258804 8.49158C0.0930948 8.65729 0 8.88204 0 9.11639C0 9.35074 0.0930948 9.57549 0.258804 9.7412C0.424514 9.90691 0.649264 10 0.883613 10C1.11796 10 1.34271 9.90691 1.50842 9.7412L5 6.24962L8.49158 9.7412C8.65729 9.90691 8.88204 10 9.11639 10C9.35074 10 9.57549 9.90691 9.7412 9.7412C9.90691 9.57549 10 9.35074 10 9.11639C10 8.88204 9.90691 8.65729 9.7412 8.49158L6.24741 5Z"
                    fill="#E3E3E3"
                  />
                </svg>
              </div>
            </li>
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
