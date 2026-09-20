export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string | null;
  priority: "low" | "medium" | "high";
  dueDate: string | null;
}

type MenuItem = string;
export type SortOption = "date-asc" | "date-desc";

export const menuItemArr: MenuItem[] = ["🔍", "🌙", "👤"];

export const todoArr: Todo[] = [
  {
    id: 1,
    title: "Изучить useState",
    description:
      "Разобраться, как useState хранит состояние и возвращает функцию обновления.",
    done: true,
    createdAt: "2026-09-15T09:00:00.000Z",
    updatedAt: "2026-09-16T14:30:00.000Z",
    priority: "high",
    dueDate: "2026-09-16T18:00:00.000Z",
  },
  {
    id: 2,
    title: "Создать TodoList",
    description:
      "Научиться выводить массив задач через map и передавать данные в TodoItem.",
    done: true,
    createdAt: "2026-09-16T10:00:00.000Z",
    updatedAt: "2026-09-17T12:15:00.000Z",
    priority: "high",
    dueDate: "2026-09-17T18:00:00.000Z",
  },
  {
    id: 3,
    title: "Изучить useEffect",
    description: "Понять, когда и зачем React выполняет побочные эффекты.",
    done: false,
    createdAt: "2026-09-17T09:30:00.000Z",
    updatedAt: null,
    priority: "high",
    dueDate: "2026-09-21T18:00:00.000Z",
  },
  {
    id: 4,
    title: "Подключить HTTP API",
    description:
      "Научиться получать и отправлять данные на сервер через fetch.",
    done: false,
    createdAt: "2026-09-18T10:00:00.000Z",
    updatedAt: null,
    priority: "high",
    dueDate: "2026-09-24T18:00:00.000Z",
  },
  {
    id: 5,
    title: "Создать Node.js сервер",
    description:
      "Создать backend для Todo List и реализовать первые API endpoints.",
    done: false,
    createdAt: "2026-09-19T11:00:00.000Z",
    updatedAt: null,
    priority: "medium",
    dueDate: "2026-09-27T18:00:00.000Z",
  },
  {
    id: 6,
    title: "Подключить MongoDB",
    description: "Хранить пользователей и задачи в базе данных.",
    done: false,
    createdAt: "2026-09-20T09:00:00.000Z",
    updatedAt: null,
    priority: "medium",
    dueDate: "2026-10-01T18:00:00.000Z",
  },
  {
    id: 7,
    title: "Добавить авторизацию",
    description:
      "Реализовать регистрацию, вход и передачу JWT в Authorization header.",
    done: false,
    createdAt: "2026-09-20T10:00:00.000Z",
    updatedAt: null,
    priority: "high",
    dueDate: null,
  },
];
