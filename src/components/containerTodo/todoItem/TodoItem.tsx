import type { Todo } from "../type";

interface Props {
  todo: Todo;
  onToggleDone: (id: number) => void;
}

const TodoItem = ({ todo, onToggleDone }: Props) => {
  return (
    <li>
      <h3>title: {todo.title}</h3>
      <p>description: {todo.description}</p>

      <p>Status: {todo.done ? "Done" : "Active"}</p>

      <label htmlFor={`todo-done-${todo.id}`}>Mark as done</label>
      <input
        id={`todo-done-${todo.id}`}
        name="toDoDone"
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggleDone(todo.id)}
      />
    </li>
  );
};

export default TodoItem;
