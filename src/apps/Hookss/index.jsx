import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
}));

export default function App() {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const handleSearch = useCallback((e) => {
    console.log("handler called");
    setSearch(e.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("filtering...");
    return products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Search</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        ref={inputRef}
        onChange={handleSearch}
      />

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
