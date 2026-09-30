interface Props {
  id: number;
  done: boolean;
  onToggleDone: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onShowEditing: () => void;
}

const TodoItemFooter = ({
  id,
  done,
  onToggleDone,
  onDeleteTask,
  onShowEditing,
}: Props) => {
  return (
    <footer className="flex justify-between">
      <label htmlFor={`todo-done-${id}`} className="flex pointer">
        <input
          id={`todo-done-${id}`}
          name={`todo-done-${id}`}
          type="checkbox"
          checked={done}
          className="pointer"
          onChange={() => onToggleDone(id)}
        />
        <span>{done ? "Done" : "Active"}</span>
      </label>

      <div className="todo-card__actions">
        <button type="button" onClick={onShowEditing}>
          Edit
        </button>
        <button type="button" onClick={() => onDeleteTask(id)}>
          Delete
        </button>
      </div>
    </footer>
  );
};

export default TodoItemFooter;
