// src/features/blog/pages/PostDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../services/blogApi";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPostById(id)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Libro no encontrado.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMsg message={error} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.body}</p>
        <div className="flex justify-end">
          <a
            href="/blog/posts"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition"
          >
            Volver al catálogo
          </a>
        </div>
      </div>
    </div>
  );
}
