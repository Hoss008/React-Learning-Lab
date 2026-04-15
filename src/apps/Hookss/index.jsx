import { useState, useRef, useEffect } from "react";

// fake large dataset
const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
}));

export default function App() {
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  // 🔴 TODO 2: useCallback for handler
  const handleSearch = null;

  // 🔴 TODO 3: useMemo for filtering
  const filteredProducts = [];

  useEffect(() => {
    inputRef.current.focus()
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}