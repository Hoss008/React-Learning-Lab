import { useState, useRef } from "react";
import { useFetch } from "./hooks/useFetch";
import { useDebounce } from "./hooks/useDebounce";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import styles from "./styles.module.css";

export default function CustomHooksShowcase() {
  // State for useFetch demo
  const [fetchUrl, setFetchUrl] = useState(
    "https://api.github.com/users/github",
  );
  const {
    data: fetchData,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch(fetchUrl);

  // State for useDebounce demo
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 500);
  const [isTyping, setIsTyping] = useState(false);

  // State for useLocalStorage demo
  const [storageInput, setStorageInput] = useState("");
  const [storageItems, setStorageItems] = useLocalStorage(
    "customHooksItems",
    [],
  );

  // State for useOnClickOutside demo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  // Use the hook
  useOnClickOutside(modalRef, () => setIsModalOpen(false));

  // ==================== USE FETCH HANDLERS ====================
  const handleFetch = async () => {
    // Logic will be implemented inside the useFetch hook
    console.log("Fetch triggered for:", fetchUrl);
  };

  // ==================== USE DEBOUNCE HANDLERS ====================
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setIsTyping(true);

    // Debounce will happen in the hook
    // Here you just manage the UI state
  };

  // Watch debounced value changes
  // TODO: Add useEffect to handle debounced search (e.g., API call)

  // ==================== USE LOCAL STORAGE HANDLERS ====================
  const handleAddItem = () => {
    if (storageInput.trim()) {
      const newItem = {
        id: Date.now(),
        value: storageInput,
        timestamp: new Date().toLocaleTimeString(),
      };
      setStorageItems([...storageItems, newItem]);
      setStorageInput("");
    }
  };

  const handleDeleteItem = (id) => {
    setStorageItems(storageItems.filter((item) => item.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  // ==================== USE ON CLICK OUTSIDE HANDLERS ====================
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* ==================== HEADER ==================== */}
        <div className={styles.header}>
          <h1>🎣 Custom Hooks Showcase</h1>
          <p>Learn and interact with custom React hooks</p>
        </div>

        {/* ==================== DEMO INFO ==================== */}
        <div className={styles.demoInfo}>
          <h3>📚 About This Demo</h3>
          <p>
            This showcase demonstrates four powerful custom hooks that you can
            use in your React applications:
          </p>
          <p>
            <strong>useFetch</strong> - Fetches data from APIs with loading and
            error states
            <br />
            <strong>useDebounce</strong> - Delays rapid state updates (useful
            for search inputs)
            <br />
            <strong>useLocalStorage</strong> - Syncs state with browser's
            localStorage
            <br />
            <strong>useOnClickOutside</strong> - Closes modals or dropdowns on
            outside clicks
          </p>
        </div>

        {/* ==================== CARDS GRID ==================== */}
        <div className={styles.grid}>
          {/* ==================== USE FETCH CARD ==================== */}
          <div className={styles.card}>
            <h2>
              <span className={styles.cardIcon}>🌐</span>
              useFetch
            </h2>

            <div className={styles.fetchSection}>
              <div className={styles.fetchInput}>
                <input
                  type="text"
                  value={fetchUrl}
                  onChange={(e) => setFetchUrl(e.target.value)}
                  placeholder="Enter API URL"
                />
                <button
                  className={styles.fetchButton}
                  onClick={handleFetch}
                  disabled={fetchLoading}
                >
                  {fetchLoading ? "Loading..." : "Fetch"}
                </button>
              </div>

              {fetchLoading && (
                <div
                  className={styles.fetchStatus}
                  style={{ background: "#e3f2fd", color: "#1976d2" }}
                >
                  <span>Loading data...</span>
                </div>
              )}

              {fetchError && (
                <div className={`${styles.fetchStatus} ${styles.error}`}>
                  ❌ Error: {fetchError}
                </div>
              )}

              {fetchData && (
                <div className={`${styles.fetchStatus} ${styles.success}`}>
                  ✅ Data loaded successfully
                </div>
              )}

              {fetchData && (
                <div className={styles.dataDisplay}>
                  {typeof fetchData === "object"
                    ? JSON.stringify(fetchData, null, 2)
                    : fetchData}
                </div>
              )}

              <div className={styles.hint}>
                💡 <strong>Tip:</strong> Try fetching from
                https://api.github.com/users/github or any public API
              </div>
            </div>
          </div>

          {/* ==================== USE DEBOUNCE CARD ==================== */}
          <div className={styles.card}>
            <h2>
              <span className={styles.cardIcon}>⏱️</span>
              useDebounce
            </h2>

            <div className={styles.debounceSection}>
              <input
                type="text"
                className={styles.debounceInput}
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Type to search..."
              />

              <div className={styles.debounceInfo}>
                <div className={styles.infoBox}>
                  <h4>Current Input</h4>
                  <p>{searchInput || "-"}</p>
                </div>

                <div className={styles.infoBox}>
                  <h4>Debounced Value</h4>
                  <p>{debouncedValue || "-"}</p>
                </div>
              </div>

              {isTyping && (
                <div className={styles.typingIndicator}>
                  ⌨️ Typing... (debounce will trigger after you stop)
                </div>
              )}

              <div className={styles.hint}>
                💡 <strong>How it works:</strong> The debounced value updates
                500ms after you stop typing. Useful for search, autocomplete,
                and API calls.
              </div>
            </div>
          </div>

          {/* ==================== USE LOCAL STORAGE CARD ==================== */}
          <div className={styles.card}>
            <h2>
              <span className={styles.cardIcon}>💾</span>
              useLocalStorage
            </h2>

            <div className={styles.storageSection}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={storageInput}
                  onChange={(e) => setStorageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a note..."
                />
                <button onClick={handleAddItem}>Add</button>
              </div>

              {storageItems.length > 0 ? (
                <ul className={styles.storageList}>
                  {storageItems.map((item) => (
                    <li key={item.id} className={styles.storageItem}>
                      <div>
                        <span>{item.value}</span>
                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "#999",
                            marginTop: "0.25rem",
                          }}
                        >
                          {item.timestamp}
                        </div>
                      </div>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={styles.emptyMessage}>
                  No items yet. Add one to get started!
                </div>
              )}

              <div className={styles.hint}>
                💡 <strong>Note:</strong> These items will persist in browser
                storage (implement with useLocalStorage)
              </div>
            </div>
          </div>

          {/* ==================== USE ON CLICK OUTSIDE CARD ==================== */}
          <div className={styles.card}>
            <h2>
              <span className={styles.cardIcon}>🎯</span>
              useOnClickOutside
            </h2>

            <div className={styles.clickOutsideSection}>
              <button className={styles.openButton} onClick={openModal}>
                Open Modal
              </button>

              <div className={styles.hint}>
                💡 <strong>How it works:</strong> Click the button to open a
                modal. Click outside the modal to close it. The
                useOnClickOutside hook will handle detecting clicks outside.
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  background: "#f0f0f0",
                  borderRadius: "6px",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                  <strong>Use Cases:</strong> Dropdowns, tooltips, modals,
                  sidebars, autocomplete menus
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== MODAL ==================== */}
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modal}
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>✨ Modal Title</h3>
              <p>
                This modal demonstrates the useOnClickOutside hook. Click
                outside this modal (on the dark overlay) to close it. The hook
                will automatically detect the outside click and trigger the
                close handler.
              </p>

              <div
                style={{
                  padding: "1rem",
                  background: "#f0f0f0",
                  borderRadius: "6px",
                  marginBottom: "1.5rem",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                  💡 <strong>Tip:</strong> Try clicking outside this box to
                  close the modal!
                </p>
              </div>

              <div className={styles.modalActions}>
                <button className={styles.closeBtn} onClick={closeModal}>
                  Cancel
                </button>
                <button className={styles.confirmBtn} onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
