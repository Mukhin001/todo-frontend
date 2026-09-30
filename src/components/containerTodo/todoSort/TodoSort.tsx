import type { SortOption } from "../type";

interface Props {
  onSortChange: (value: SortOption) => void;
}

const TodoSort = ({ onSortChange }: Props) => {
  return (
    <div>
      <label htmlFor="select-todos">Choose a sort todos:</label>
      <select
        name="todos"
        id="select-todos"
        onChange={(e) => onSortChange(e.currentTarget.value as SortOption)}
      >
        <option value="date-asc">Oldest first</option>
        <option value="date-desc">Newest first</option>
      </select>
    </div>
  );
};

export default TodoSort;
