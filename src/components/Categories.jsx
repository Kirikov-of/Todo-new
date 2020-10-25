import React from "react";
import Button from "./Button";

function Categories({ items }) {
  return (
    <div className="todo_categories">
      <ul>
        {items.map((item, index) => (
          <Button key={`${item}_${index}`} className="todo_category">
            <li>{item}</li>
          </Button>
        ))}
        ;
      </ul>

      <div className="todo_addCategory">
        <a href="#">Добавить категорию</a>
      </div>
    </div>
  );
}

export default Categories;
