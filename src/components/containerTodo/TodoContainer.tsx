import { useState } from "react";
import { menuItemArr, todoArr, type SortOption, type Todo } from "./type";
import TodoStats from "./todoStats/TodoStats";
import TodoItem from "./todoItem/TodoItem";
import TodoFormAdd from "./todoFormAdd/TodoFormAdd";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(todoArr);
  const [sortOption, setSortOption] = useState<SortOption>("date-asc");
  const [searchTodo, setSearchTodo] = useState("");
  console.log(getComputedStyle(document.body).fontSize);

  const getSortedTodoList = () => {
    const filteredTodos = getFilteredTodoList();

    if (sortOption === "date-asc") {
      return filteredTodos.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    if (sortOption === "date-desc") {
      return filteredTodos.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }

    return filteredTodos;
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

  const getFilteredTodoList = () => {
    const query = searchTodo.trim().toLowerCase();

    if (query.length === 0) {
      return [...todoList];
    }

    return todoList.filter((todo) =>
      todo.description.toLowerCase().includes(query),
    );
  };

  const filteredTodoList = getSortedTodoList();

  return (
    <section className="page">
      <div className="container">
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

        <form>
          <label htmlFor="search-todo">Search todo</label>
          <input
            type="search"
            name="search-todo"
            id="search-todo"
            onChange={(e) => setSearchTodo(e.target.value)}
          />
        </form>

        {filteredTodoList.length > 0 ? (
          <ul className="todo-list">
            {filteredTodoList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleDone={onToggleDone}
                onDeleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}
                searchTodo={searchTodo}
              />
            ))}
          </ul>
        ) : searchTodo.trim() ? (
          <p className="todo-list__empty">
            По запросу «{searchTodo}» ничего не найдено.
          </p>
        ) : (
          <p className="todo-list__empty">Пока нет задач.</p>
        )}
      </div>
    </section>
  );
};

export default TodoContainer;
