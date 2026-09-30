import { menuItemArr } from "../containerTodo/type";

const TodoHeader = () => {
  return (
    <header>
      <h1>Todo</h1>
      <nav>
        <ul>
          {menuItemArr.map((menuItem) => (
            <li key={menuItem}>{menuItem}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TodoHeader;
