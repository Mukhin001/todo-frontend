import type { Todo } from "../containerTodo/type";

interface Props {
  todoList: Todo[];
}

const TodoStats = ({ todoList }: Props) => {
  return (
    <section>
      <h2>Good afternoon!</h2>
      <div>
        <p>Total: {todoList.length}</p>
        <p>Done: {todoList.filter((e) => e.done).length}</p>
        <p>Active: {todoList.filter((e) => !e.done).length}</p>
      </div>
    </section>
  );
};

export default TodoStats;
