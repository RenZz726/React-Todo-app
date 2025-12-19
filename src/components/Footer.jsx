export default function Footer({ totalToDos, completedToDos }) {
  return (
    <div className="fixed bottom-0 bg-amber-300 w-full p-4 text-center text-2xl">
      <span>Completed ToDos: {completedToDos} </span>
      <span>Total ToDos: {totalToDos}</span>
    </div>
  );
}
