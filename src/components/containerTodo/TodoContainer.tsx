import { useState } from "react";
import { menuItemArr, todoArr } from "./type";
import ToDoItem from "./toDoList/ToDoItem";
import TodoStats from "../toDosTotal/TodoStats";
import ToDoFormAdd from "./todoFormAdd/ToDoFormAdd";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState(todoArr);

  return (
    <section>
      <div>
        <h1>ContainerTodo</h1>
        <nav>
          <ul>
            {menuItemArr.map((menuItem) => (
              <li key={menuItem}>{menuItem}</li>
            ))}
          </ul>
        </nav>
      </div>

      <TodoStats todoList={todoList} />
      <ToDoFormAdd setTodoList={setTodoList} />

      <ul>
        {todoList.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoContainer;
