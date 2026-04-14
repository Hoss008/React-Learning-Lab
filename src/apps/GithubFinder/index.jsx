import styles from "./profile.module.css";
import { useState, useEffect } from "react";

function GithubFinder() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const result = await response.json();
      console.log(result);
    };
    fetchData();
  }, [name]);

  function handleSearch(event) {  
    setName(event.target.value) 
}

  return (
    <>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          onChange={handleSearch}
        />
      </div>

      
    </>
  );
}
export default GithubFinder;
