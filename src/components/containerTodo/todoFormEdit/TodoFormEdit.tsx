import type { Todo } from "../type";

interface Props {
  todo: Todo;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateTask: (newTodo: Todo) => void;
}

const TodoFormEdit = ({ todo, setIsEditing, onUpdateTask }: Props) => {
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
    <form onSubmit={onEditSubmitTask}>
      <fieldset>
        <legend>Edit Task</legend>

        <p>
          <label htmlFor="editTitle">edit task</label>
          <input
            type="text"
            id="editTitle"
            name="editTitle"
            defaultValue={todo.title}
          />
        </p>

        <p>
          <label htmlFor="editDescription">edit description</label>
          <input
            type="text"
            id="editDescription"
            name="editDescription"
            defaultValue={todo.description}
          />
        </p>

        <button type="submit">save task</button>
      </fieldset>
    </form>
  );
};

export default TodoFormEdit;
