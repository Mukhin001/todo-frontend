export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

type MenuItem = string;

export const menuItemArr: MenuItem[] = ["🔍", "🌙", "👤"];

export const todoArr: Todo[] = [
  {
    id: 1,
    title: "Изучить useState",
    description:
      "Разобраться, как useState хранит состояние и возвращает функцию обновления.",
    done: true,
  },
  {
    id: 2,
    title: "Создать TodoList",
    description:
      "Научиться выводить массив задач через map и передавать данные в TodoItem.",
    done: false,
  },
  {
    id: 3,
    title: "Изучить useEffect",
    description: "Понять, когда и зачем React выполняет побочные эффекты.",
    done: false,
  },
  {
    id: 4,
    title: "Подключить HTTP API",
    description:
      "Научиться получать и отправлять данные на сервер через fetch.",
    done: false,
  },
  {
    id: 5,
    title: "Создать Node.js сервер",
    description:
      "Создать backend для Todo List и реализовать первые API endpoints.",
    done: false,
  },
  {
    id: 6,
    title: "Подключить MongoDB",
    description: "Хранить пользователей и задачи в базе данных.",
    done: false,
  },
  {
    id: 7,
    title: "Добавить авторизацию",
    description:
      "Реализовать регистрацию, вход и передачу JWT в Authorization header.",
    done: false,
  },
];
