import { useState } from "react";
import { menuItemArr, todoArr } from "./type";
import TodoStats from "../TodoStats/TodoStats";
import TodoItem from "./todoItem/TodoItem";
import TodoFormAdd from "./todoFormAdd/ToDoFormAdd";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(todoArr);

  const onToggleDone = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <section>
      <div>
        <h1>ContainerTodo</h1>
        <nav>
          <ul>
            {menuItemArr.map((menuItem) => (
              <li key={menuItem}>{menuItem}</li>
            ))}
          </ul>
        </nav>
      </div>

      <TodoStats todoList={todoList} />
      <TodoFormAdd setTodoList={setTodoList} />

      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggleDone={onToggleDone} />
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
