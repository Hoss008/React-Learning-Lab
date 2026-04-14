import styles from "./profile.module.css";
import { useState, useEffect } from "react";

function GithubFinder() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    if (!name.trim()) return;

    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${name}`, {
          signal: controller.signal,
        });
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort(); //clean up function to cancel fetch if component unmounts or name changes before fetch completes
    };
  }, [name]);

  if (loading) return <p>Loading...</p>;

  function handleSearch(event) {
    setName(event.target.value);
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

      <img className={styles.profileCard} src={data?.avatar_url} alt="avatar" />
      <h2>{data?.name}</h2>
      <p>{data?.bio}</p>
      <div>Repos: {data?.public_repos}</div>
      <div>Followers: {data?.followers}</div>
    </>
  );
}
export default GithubFinder;
