import { useState } from "react";
import { menuItemArr, todoArr, type SortOption, type Todo } from "./type";
import TodoStats from "./todoStats/TodoStats";
import TodoItem from "./todoItem/TodoItem";
import TodoFormAdd from "./todoFormAdd/TodoFormAdd";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(todoArr);
  const [sortOption, setSortOption] = useState<SortOption>("date-asc");

  const getSortedTodoList = () => {
    const todos = [...todoList];

    if (sortOption === "date-asc") {
      return todos.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    if (sortOption === "date-desc") {
      return todos.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }
    return todos;
  };

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

  const onUpdateTask = (updatedTodo: Todo) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      }),
    );
  };

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value as SortOption;
    setSortOption(value);
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

      <div>
        <label htmlFor="select-todos">Choose a sort todos:</label>
        <select name="todos" id="select-todos" onChange={onSortChange}>
          <option value="date-asc">Oldest first</option>
          <option value="date-desc">Newest first</option>
        </select>
      </div>

      <ul>
        {getSortedTodoList().map((todo) => (
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
