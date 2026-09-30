import { useState } from "react";
import type { Todo } from "../../type";
import TodoEditForm from "../todoEditForm/TodoEditForm";
import HighlightText from "../highlightText/HighlightText";
import TodoItemHeader from "./todoItemHeader/TodoItemHeader";
import TodoItemMeta from "./todoItemMeta/TodoItemMeta";
import TodoItemFooter from "./todoItemFooter/TodoItemFooter";
import "./todoItem.css";

interface Props {
  todo: Todo;
  onToggleDone: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onUpdateTask: (id: number, title: string, description: string) => void;
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
          <TodoItemHeader
            title={todo.title}
            priority={todo.priority}
            searchTodo={searchTodo}
          />
          <p>
            <HighlightText text={todo.description} query={searchTodo} />
          </p>
          <TodoItemMeta createdAt={todo.createdAt} updatedAt={todo.updatedAt} />
          <TodoItemFooter
            id={todo.id}
            done={todo.done}
            onToggleDone={onToggleDone}
            onDeleteTask={onDeleteTask}
            onShowEditing={() => setIsEditing(true)}
          />
        </>
      ) : (
        <TodoEditForm
          id={todo.id}
          title={todo.title}
          description={todo.description}
          onCancel={() => setIsEditing(false)}
          onUpdateTask={onUpdateTask}
        />
      )}
    </li>
  );
};

export default TodoItem;
