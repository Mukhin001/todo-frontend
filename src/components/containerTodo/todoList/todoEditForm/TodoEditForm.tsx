import "./todoEditForm.css";

interface Props {
  id: number;
  title: string;
  description: string;
  onCancel: () => void;
  onUpdateTask: (id: number, title: string, description: string) => void;
}

const TodoEditForm = ({
  id,
  title,
  description,
  onCancel,
  onUpdateTask,
}: Props) => {
  const onEditSubmitTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newTitle = String(formData.get("editTitle")).trim();
    const newDescription = String(formData.get("editDescription")).trim();

    if (newTitle.length === 0 || newDescription.length === 0) {
      alert("title and description: required fields");
      return;
    }

    onUpdateTask(id, newTitle, newDescription);

    onCancel();
  };

  return (
    <form className="todo-edit-form" onSubmit={onEditSubmitTask}>
      <fieldset className="flex flex-column gap-2">
        <div className="flex justify-between">
          <legend className="legend-title">Edit Task</legend>
          <button type="button" onClick={onCancel} aria-label="Close edit form">
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
            defaultValue={title}
          />
        </div>

        <div>
          <label htmlFor="editDescription"></label>
          <textarea
            id="editDescription"
            name="editDescription"
            maxLength={1000}
            defaultValue={description}
          />
        </div>
        <div className="flex flex-end gap-2">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </fieldset>
    </form>
  );
};

export default TodoEditForm;
