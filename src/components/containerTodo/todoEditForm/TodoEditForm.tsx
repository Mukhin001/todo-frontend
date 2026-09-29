import type { Todo } from "../type";
import "./todoEditForm.css";

interface Props {
  todo: Todo;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateTask: (newTodo: Todo) => void;
}

const TodoEditForm = ({ todo, setIsEditing, onUpdateTask }: Props) => {
  const onEditSubmitTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = String(formData.get("editTitle"));
    const description = String(formData.get("editDescription"));
    const now = new Date().toISOString();

    if (title.trim().length === 0 || description.trim().length === 0) {
      alert("title and description: required fields");
      return;
    }

    onUpdateTask({ ...todo, title, description, updatedAt: now });

    setIsEditing(false);
  };

  return (
    <form className="todo-edit-form" onSubmit={onEditSubmitTask}>
      <fieldset className="flex flex-column gap-2">
        <div className="flex justify-between">
          <legend className="legend-title">Edit Task</legend>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            aria-label="Close edit form"
          >
            ×
          </button>
        </div>

        <div>
          <label htmlFor="editTitle"></label>
          <input
            type="text"
            id="editTitle"
            name="editTitle"
            maxLength={100}
            defaultValue={todo.title}
          />
        </div>

        <div>
          <label htmlFor="editDescription"></label>
          <textarea
            id="editDescription"
            name="editDescription"
            maxLength={1000}
            defaultValue={todo.description}
          />
        </div>
        <div className="flex flex-end gap-2">
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </fieldset>
    </form>
  );
};

export default TodoEditForm;
