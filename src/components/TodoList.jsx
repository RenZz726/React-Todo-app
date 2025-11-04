import  TodoItem  from "./TodoItem";
export default function TodoList({ toDos }) {
  return (
    <div>
      {toDos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
