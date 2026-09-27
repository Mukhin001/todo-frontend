import { useState } from "react";
import type { Todo } from "../type";
import "./todoItem.css";
import TodoEditForm from "../todoEditForm/TodoEditForm";
import HighlightText from "../highlightText/HighlightText";

interface Props {
  todo: Todo;
  onToggleDone: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (updatedTodo: Todo) => void;
  searchTodo: string;
}

const TodoItem = ({
  todo,
  onToggleDone,
  onDeleteTask,
  onUpdateTask,
  searchTodo,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="todo-card flex flex-column gap-2">
      {!isEditing ? (
        <>
          <header className="flex justify-between">
            <h3>
              <HighlightText text={todo.title} query={searchTodo} />
            </h3>
            <span
              className={`todo-card__priority todo-card__priority--${todo.priority}`}
            >
              {todo.priority}
            </span>
          </header>

          <p>
            <HighlightText text={todo.description} query={searchTodo} />
          </p>

          <div className="todo-card__meta flex gap-2">
            <p className="todo-card__date">
              Created:{" "}
              <time dateTime={todo.createdAt}>
                {new Date(todo.createdAt).toLocaleString("ru-RU", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </p>

            {todo.updatedAt && (
              <p className="todo-card__date">
                Updated:{" "}
                <time dateTime={todo.updatedAt}>
                  {new Date(todo.updatedAt).toLocaleString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </p>
            )}
          </div>

          <footer className="flex justify-between">
            <label htmlFor={`todo-done-${todo.id}`} className="flex pointer">
              <input
                id={`todo-done-${todo.id}`}
                name={`todo-done-${todo.id}`}
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggleDone(todo.id)}
              />
              <span>{todo.done ? "Done" : "Active"}</span>
            </label>

            <div className="todo-card__actions">
              <button type="button" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button type="button" onClick={() => onDeleteTask(todo.id)}>
                Delete
              </button>
            </div>
          </footer>
        </>
      ) : (
        <TodoEditForm
          todo={todo}
          setIsEditing={setIsEditing}
          onUpdateTask={onUpdateTask}
        />
      )}
    </li>
  );
};

export default TodoItem;
