import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
  }, [light]);

  return (
    <button
      onClick={() => setLight(!light)}
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {light ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}
