import type { Todo } from "../type";
import TodoItem from "./todoItem/TodoItem";

interface Props {
  visibleTodoList: Todo[];
  searchTodo: string;
  onToggleDone: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (id: number, title: string, description: string) => void;
}

const TodoList = ({
  visibleTodoList,
  searchTodo,
  onToggleDone,
  onDeleteTask,
  onUpdateTask,
}: Props) => {
  return (
    <>
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
    </>
  );
};

export default TodoList;
