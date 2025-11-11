import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
export default function Todo() {
  const [toDos, setTodos] = useState([]);

  return (
    <div>
      <Form toDos={toDos} setTodos={setTodos} />
      <TodoList toDos={toDos} />
    </div>
  );
}
