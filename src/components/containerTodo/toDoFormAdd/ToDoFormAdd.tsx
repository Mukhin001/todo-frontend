import { useAppDispatch } from "../../../app/hooks";
import { openModal } from "../../../features/modal/modalSlice";

interface Props {
  onAddTodo: (title: string, description: string) => void;
}

const TodoFormAdd = ({ onAddTodo }: Props) => {
  const dispatch = useAppDispatch();

  const addNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = String(formData.get("titleNewTask")).trim();
    const description = String(formData.get("descriptionNewTask")).trim();

    if (title.length === 0 || description.length === 0) {
      dispatch(openModal({ type: "error" }));
      return;
    }

    onAddTodo(title, description);

    form.reset();
    resetTextareaHeight(form);
  };

  const resetTextareaHeight = (form: HTMLFormElement) => {
    const textarea = form.elements.namedItem("descriptionNewTask");

    if (textarea instanceof HTMLTextAreaElement) {
      textarea.style.height = "auto";
    }
  };

  return (
    <form
      onSubmit={addNewTask}
      onReset={(e) => resetTextareaHeight(e.currentTarget)}
    >
      <fieldset>
        <legend className="legend-title">My Tasks</legend>

        <label htmlFor="titleNewTask">Title</label>
        <input
          type="text"
          id="titleNewTask"
          name="titleNewTask"
          maxLength={100}
        />

        <label htmlFor="descriptionNewTask">Description</label>
        <textarea
          id="descriptionNewTask"
          name="descriptionNewTask"
          rows={1}
          maxLength={1000}
        />

        <button type="reset">reset</button>
        <button type="submit">add task</button>
      </fieldset>
    </form>
  );
};

export default TodoFormAdd;
