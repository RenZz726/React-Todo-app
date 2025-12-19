import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [toDos, setTodos] = useState([]);
  const totalToDos = toDos.length;
  const completedToDos = toDos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form toDos={toDos} setTodos={setTodos} />
      <TodoList toDos={toDos} setToDos={setTodos} />
      <Footer completedToDos={completedToDos} totalToDos={totalToDos}/>
    </div>
  );
}
