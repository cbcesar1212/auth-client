export default function ErrorMsg({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded border border-red-400">
      <p className="font-semibold">⚠️ {message}</p>
    </div>
  );
}
