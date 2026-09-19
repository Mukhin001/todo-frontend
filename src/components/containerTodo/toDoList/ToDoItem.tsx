import type { Todo } from "../type";

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoItem = ({ todo, todoList, setTodoList }: Props) => {
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
        onChange={() => {
          const newChecked = todoList.map((obj) => {
            if (obj.id === todo.id) {
              return {
                id: obj.id,
                title: obj.title,
                description: obj.description,
                done: !obj.done,
              };
            } else {
              return obj;
            }
          });
          setTodoList(newChecked);
        }}
      />
    </li>
  );
};

export default ToDoItem;
