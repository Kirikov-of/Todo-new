import React from "react";
import Button from "./Button";

function Categories({ items, addCategory }) {
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
        <Button addCategory={addCategory}>Добавить категорию</Button>
      </div>
    </div>
  );
}

export default Categories;
