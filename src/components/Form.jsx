import { useState } from "react";
export default function Form({ toDos, setTodos }) {
  const [toDo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...toDos, toDo]);
    setTodo("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md p-6 w-3xl mx-auto my-20 shadow-md shadow-[rgba(0,0,0,0.2"
    >
      <div className="flex">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={toDo}
          type="text"
          placeholder="Enter todo items..."
          className="w-full block focus:outline-0 text-2xl"
        />
        <button
          type="submit"
          className="bg-amber-300 px-8 py-3 inline-block cursor-pointer rounded-md "
        >
          ADD
        </button>
      </div>
    </form>
  );
}
