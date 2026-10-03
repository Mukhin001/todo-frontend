import TodoStats from "./todoStats/TodoStats";
import TodoFormAdd from "./todoFormAdd/ToDoFormAdd";
import useTodos from "../../hooks/useTodos";
import TodoSort from "./todoSort/TodoSort";
import TodoSearch from "./todoSearch/TodoSearch";
import TodoList from "./todoList/TodoList";
import TodoModal from "../todoModal/TodoModal";

const TodoContainer = () => {
  const {
    searchTodo,
    visibleTodoList,
    getStats,
    onAddTodo,
    onToggleDone,
    onDeleteTask,
    onUpdateTask,
    onSortChange,
    onSearchChange,
  } = useTodos();

  const { total, done, active } = getStats();

  return (
    <main className="page">
      <div className="container">
        <TodoModal onDeleteTask={onDeleteTask} />
        <TodoStats total={total} done={done} active={active} />
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
