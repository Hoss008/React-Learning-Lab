import { useState, useRef, useEffect, useCallback, useMemo } from "react";

// 1,000 products — the dataset you're filtering
const products = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
}));

export default function App() {
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  // ── TODO 2 · useCallback ─────────────────────────────
  // Wrap handleSearch so its reference stays stable.
  // Think: does it need any dependencies?
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  },[]);

  // ── TODO 3 · useMemo ─────────────────────────────────
  // Memoize the filtered list.
  // Think: what should the dependency be?
  const filteredProducts = useMemo(() => {
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

      <p>Showing {filteredProducts?.length ?? 0} results</p>

      <ul>
        {filteredProducts?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
