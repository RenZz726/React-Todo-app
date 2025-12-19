import { useState } from "react";
export default function Form({ toDos, setTodos }) {
  const [toDo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    let input = toDo.name.trim();
    if (!input) return;
    setTodos([...toDos, toDo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-3xl rounded-md p-6 m-auto my-20 shadow-md shadow-[rgba(0,0,0,0.2)]"
    >
      <div className="flex">
        <input
          onChange={(e) => setTodo({ ...toDo, name: e.target.value })}
          value={toDo.name}
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
