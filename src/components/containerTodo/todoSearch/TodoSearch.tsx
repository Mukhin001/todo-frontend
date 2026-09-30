interface Props {
  searchTodo: string;
  onSearchChange: (value: string) => void;
}

const TodoSearch = ({ searchTodo, onSearchChange }: Props) => {
  return (
    <form>
      <label htmlFor="search-todo">Search todo</label>
      <input
        type="search"
        name="search-todo"
        id="search-todo"
        maxLength={100}
        value={searchTodo}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </form>
  );
};

export default TodoSearch;
