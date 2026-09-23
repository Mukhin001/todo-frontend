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
    <li className="flex flex-column gap-2 todo-card">
      {!isEditing ? (
        <div>
          <h3>
            <HighlightText text={todo.title} query={searchTodo} />
          </h3>
          <p>
            <HighlightText text={todo.description} query={searchTodo} />
          </p>
        </div>
      ) : (
        <div>
          <TodoEditForm
            todo={todo}
            setIsEditing={setIsEditing}
            onUpdateTask={onUpdateTask}
          />
        </div>
      )}

      <div className="flex justify-between">
        {!isEditing && (
          <label htmlFor={`todo-done-${todo.id}`} className="flex pounter">
            <input
              id={`todo-done-${todo.id}`}
              name={`todo-done-${todo.id}`}
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggleDone(todo.id)}
            />
            <span>{todo.done ? "Done" : "Active"}</span>
          </label>
        )}

        <div>
          {!isEditing && (
            <button type="button" onClick={() => onDeleteTask(todo.id)}>
              delete task
            </button>
          )}
          <button type="button" onClick={() => setIsEditing((prev) => !prev)}>
            {isEditing ? "Close edit" : "Edit task"}
          </button>
        </div>
      </div>

      <p>
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
        <p>
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
    </li>
  );
};

export default TodoItem;
