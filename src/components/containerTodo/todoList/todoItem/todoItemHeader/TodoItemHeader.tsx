import type { TodoPriority } from "../../../type";
import HighlightText from "../../highlightText/HighlightText";

interface Props {
  title: string;
  priority: TodoPriority;
  searchTodo: string;
}
const TodoItemHeader = ({ title, priority, searchTodo }: Props) => {
  return (
    <header className="flex justify-between">
      <h3>
        <HighlightText text={title} query={searchTodo} />
      </h3>
      <span className={`todo-card__priority todo-card__priority--${priority}`}>
        {priority}
      </span>
    </header>
  );
};

export default TodoItemHeader;
