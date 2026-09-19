import { useState } from "react";
import { menuItemArr, todoArr, type Todo } from "./type";
import TodoStats from "./todoStats/TodoStats";
import TodoItem from "./todoItem/TodoItem";
import TodoFormAdd from "./todoFormAdd/TodoFormAdd";

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

  const onDeleteTask = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onUpdateTask = (newTtodo: Todo) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === newTtodo.id) {
          return newTtodo;
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
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={onToggleDone}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
