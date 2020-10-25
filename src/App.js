import "./app.scss";
import Categories from "./components/Categories";
import NewTask from "./components/NewTask";
import Task from "./components/Task";

function App() {
  const categoryName = [
    "Все задачи",
    "Frontend",
    "Backend",
    "Покупки",
    "Срочные",
  ];

  return (
    <div className="todo">
      <Categories items={categoryName} />
      <div className="todo_list">
        <h1>Frontend</h1>
        <NewTask />
        <div className="todo_tasks">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default App;
