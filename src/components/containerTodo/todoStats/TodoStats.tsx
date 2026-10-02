interface Props {
  total: number;
  done: number;
  active: number;
}

const TodoStats = ({ total, done, active }: Props) => {
  return (
    <section>
      <h2>Good afternoon!</h2>
      <div>
        <p>Total: {total}</p>
        <p>Done: {done}</p>
        <p>Active: {active}</p>
      </div>
    </section>
  );
};

export default TodoStats;
