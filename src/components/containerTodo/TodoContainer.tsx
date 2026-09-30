import TodoStats from "./todoStats/TodoStats";
import TodoFormAdd from "./todoFormAdd/ToDoFormAdd";
import useTodos from "../../hooks/useTodos";
import TodoSort from "./todoSort/TodoSort";
import TodoSearch from "./todoSearch/TodoSearch";
import TodoList from "./todoList/TodoList";

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
    <main className="page">
      <div className="container">
        <TodoStats todoList={todoList} />
        <TodoFormAdd onAddTodo={onAddTodo} />
        <TodoSort onSortChange={onSortChange} />
        <TodoSearch searchTodo={searchTodo} onSearchChange={onSearchChange} />
        <TodoList
          visibleTodoList={visibleTodoList}
          searchTodo={searchTodo}
          onToggleDone={onToggleDone}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      </div>
    </main>
  );
};

export default TodoContainer;
