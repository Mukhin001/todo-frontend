import type { Todo } from "../type";

interface Props {
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoFormAdd = ({ setTodoList }: Props) => {
  const addNewTask = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    ///
    const title = e.target.titleNewTask.value;
    const description = e.target.titleNewDescription.value;

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
          <label htmlFor="titleNewDescription">Description</label>
          <input
            type="text"
            id="titleNewDescription"
            name="titleNewDescription"
          />
        </p>

        <button type="reset">reset</button>
        <button type="submit">add task</button>
      </fieldset>
    </form>
  );
};

export default ToDoFormAdd;
