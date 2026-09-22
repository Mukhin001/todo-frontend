import { useState } from "react";
import type { Todo } from "../type";
import TodoFormEdit from "../todoFormEdit/TodoFormEdit";

interface Props {
  todo: Todo;
  onToggleDone: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (newTtodo: Todo) => void;
}

const TodoItem = ({
  todo,
  onToggleDone,
  onDeleteTask,
  onUpdateTask,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {!isEditing ? (
        <div>
          <h3>title: {todo.title}</h3>
          <p>description: {todo.description}</p>

          <p>Status: {todo.done ? "Done" : "Active"}</p>
          <p>Date: {"todo date"}</p>
        </div>
      ) : (
        <div>
          <TodoFormEdit
            todo={todo}
            setIsEditing={setIsEditing}
            onUpdateTask={onUpdateTask}
          />
        </div>
      )}

      {!isEditing && (
        <>
          <label htmlFor={`todo-done-${todo.id}`}>Mark as done</label>
          <input
            id={`todo-done-${todo.id}`}
            name="toDoDone"
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo.id)}
          />
          <button onClick={() => onDeleteTask(todo.id)}>delete task</button>
        </>
      )}

      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? "close edit task" : "edit task"}
      </button>

      <p>
        Created:{" "}
        {new Date(todo.createdAt).toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      {todo.updatedAt && (
        <p>
          Updated:{" "}
          {new Date(todo.updatedAt).toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}
    </li>
  );
};

export default TodoItem;
