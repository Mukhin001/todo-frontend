import { menuItemArr, type SortOption } from "./type";
import TodoStats from "./todoStats/TodoStats";
import TodoItem from "./todoItem/TodoItem";
import TodoFormAdd from "./todoFormAdd/ToDoFormAdd";
import useTodos from "../../hooks/useTodos";

const TodoContainer = () => {
  const {
    todoList,
    searchTodo,

    visibleTodoList,

    onAddTodo,
    onToggleDone,
    onDeleteTask,
    onUpdateTask,
    onSortChange,
    onSearchChange,
  } = useTodos();

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
        <TodoFormAdd onAddTodo={onAddTodo} />

        <div>
          <label htmlFor="select-todos">Choose a sort todos:</label>
          <select
            name="todos"
            id="select-todos"
            onChange={(e) => onSortChange(e.currentTarget.value as SortOption)}
          >
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
            maxLength={100}
            value={searchTodo}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </form>

        {visibleTodoList.length > 0 ? (
          <ul className="todo-list">
            {visibleTodoList.map((todo) => (
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
