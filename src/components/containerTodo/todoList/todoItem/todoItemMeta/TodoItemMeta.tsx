interface Props {
  createdAt: string;
  updatedAt: string | null;
}

const TodoItemMeta = ({ createdAt, updatedAt }: Props) => {
  return (
    <div className="todo-card__meta flex gap-2">
      <p className="todo-card__date">
        Created:{" "}
        <time dateTime={createdAt}>
          {new Date(createdAt).toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </p>

      {updatedAt && (
        <p className="todo-card__date">
          Updated:{" "}
          <time dateTime={updatedAt}>
            {new Date(updatedAt).toLocaleString("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </p>
      )}
    </div>
  );
};

export default TodoItemMeta;
