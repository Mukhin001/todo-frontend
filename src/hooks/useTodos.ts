import { useState } from "react";
import { todoArr, type SortOption } from "../components/containerTodo/type";

const useTodos = () => {
  const [todoList, setTodoList] = useState(todoArr);
  const [sortOption, setSortOption] = useState<SortOption>("date-asc");
  const [searchTodo, setSearchTodo] = useState("");

  const getSortedTodoList = () => {
    const filteredTodos = getFilteredTodoList();

    if (sortOption === "date-asc") {
      return filteredTodos.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    if (sortOption === "date-desc") {
      return filteredTodos.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }

    return filteredTodos;
  };

  const onAddTodo = (title: string, description: string) => {
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
  };

  const onToggleDone = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      }),
    );
  };

  const onDeleteTask = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onUpdateTask = (id: number, title: string, description: string) => {
    const now = new Date().toISOString();

    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title, description, updatedAt: now };
        } else {
          return todo;
        }
      }),
    );
  };

  const onSortChange = (value: SortOption) => {
    setSortOption(value);
  };

  const onSearchChange = (value: string) => {
    setSearchTodo(value);
  };

  const getFilteredTodoList = () => {
    const query = searchTodo.trim().toLowerCase();

    if (query.length === 0) {
      return [...todoList];
    }

    return todoList.filter(
      (todo) =>
        todo.title.toLowerCase().includes(query) ||
        todo.description.toLowerCase().includes(query),
    );
  };

  const visibleTodoList = getSortedTodoList();

  return {
    todoList,
    searchTodo,

    visibleTodoList,

    onAddTodo,
    onToggleDone,
    onDeleteTask,
    onUpdateTask,
    onSortChange,
    onSearchChange,
  };
};

export default useTodos;
