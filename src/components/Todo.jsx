import { useState } from "react";
import { TodoItem } from "./TodoItems";
export default function Todo() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...toDos, toDo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={toDo}
          type="text"
        />
        <button type="submit" className="bg-red">
          Add
        </button>
      </form>
      {toDos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}