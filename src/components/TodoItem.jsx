export default function TodoItem({ item }) {
  return (
    <div className="w-190 mx-auto p-6 shadow-md shadow-[rgba(0,0,0,0.1)]">
      <div className="font-bold p-2 text-xl flex justify-between items-center">
        <div>{item}</div>
        <button className="bg-amber-300 px-4 py-2 rounded-md cursor-pointer">
          x
        </button>
      </div>
    </div>
  );
}
