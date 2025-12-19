export default function TodoItem({ item, toDos, setToDos }) {
  function handleClick(item) {
    setToDos(toDos.map((todo) =>
      todo.name === item ? { ...todo, done: !todo.done } : todo
    ));
  }
  function handleDelete(item) {
    setToDos(toDos.filter((toDo) => toDo.name != item));
  }

  return (
    <div className="maxk-190 mx-auto p-6 shadow-md shadow-[rgba(0,0,0,0.1)]">
      <div className="font-bold p-2 text-xl flex justify-between items-center">
        <div>
          <span
            className={item.done ? `line-through` : ""}
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </span>
        </div>
        <button
          onClick={() => handleDelete(item.name)}
          className="bg-amber-300 px-4 py-2 rounded-md cursor-pointer"
        >
          x
        </button>
      </div>
    </div>
  );
}
