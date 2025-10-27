// src/features/blog/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow bg-white text-gray-800">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="mt-2">{post.body.substring(0, 100)}...</p>
      <div className="mt-4">
        <a
          href={`/blog/posts/${post.id}`}
          className="text-blue-500 hover:underline font-semibold"
        >
          Leer más
        </a>
      </div>
    </div>
  );
}
