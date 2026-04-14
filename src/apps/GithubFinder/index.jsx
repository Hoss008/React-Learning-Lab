import styles from "./profile.module.css";
import { useState, useEffect } from "react";

function GithubFinder() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      console.log(result);
    };
  }, [name]);

  function handleSearch(e) {
    setName(e.target.value);
  }

  return (
    <>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={handleSearch}
        />
        <h3>NAME : {name}</h3>
      </div>
    </>
  );
}
export default GithubFinder;
