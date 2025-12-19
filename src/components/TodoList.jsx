import TodoItem from "./TodoItem";
export default function TodoList({ toDos, setToDos }) {
  const sortedToDos = toDos.sort((a, b) => Number(a.done) - Number(b.done))
  return (
    <div>
      {toDos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          toDos={toDos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
}
