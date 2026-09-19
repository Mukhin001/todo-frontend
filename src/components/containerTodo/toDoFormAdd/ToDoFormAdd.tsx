import type { Todo } from "../type";
interface Props {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoFormAdd = ({ setTodoList }: Props) => {
  const addNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = String(formData.get("titleNewTask"));
    const description = String(formData.get("descriptionNewTask"));

    if (title.trim().length === 0 || description.trim().length === 0) {
      alert("title and description: required fields");
      return;
    }

    setTodoList((prev) => [
      ...prev,
      { id: Number(new Date()), title, description, done: false },
    ]);

    e.target.reset();
  };

  return (
    <form onSubmit={addNewTask}>
      <fieldset>
        <legend>My Tasks</legend>

        <p>
          <label htmlFor="titleNewTask">Title</label>
          <input type="text" id="titleNewTask" name="titleNewTask" />
        </p>

        <p>
          <label htmlFor="descriptionNewTask">Description</label>
          <input
            type="text"
            id="descriptionNewTask"
            name="descriptionNewTask"
          />
        </p>

        <button type="reset">reset</button>
        <button type="submit">add task</button>
      </fieldset>
    </form>
  );
};

export default TodoFormAdd;
