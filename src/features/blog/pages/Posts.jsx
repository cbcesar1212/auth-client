import { useEffect, useState } from "react";
import { getPosts } from "../services/blogApi";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Math.random() < 0.2) {
      setError("Error al cargar los libros. Intenta nuevamente.");
      setLoading(false);
      return;
    }

    getPosts()
      .then((res) => {
        setPosts(res.data.slice(0, 10)); 
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los libros.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMsg message={error} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Catálogo de Libros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
