import type { Todo } from "../type";
interface Props {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoFormAdd = ({ setTodoList }: Props) => {
  const addNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = String(formData.get("titleNewTask")).trim();
    const description = String(formData.get("descriptionNewTask")).trim();

    if (title.length === 0 || description.length === 0) {
      alert("title and description: required fields");
      return;
    }

    const now = new Date().toISOString();

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        done: false,
        createdAt: now,
        updatedAt: null,
        priority: "medium",
        dueDate: null,
      },
    ]);

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
