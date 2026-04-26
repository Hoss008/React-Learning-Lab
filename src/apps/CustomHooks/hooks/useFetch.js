import { useState, useEffect } from "react";

/**
 * useFetch Hook
 *
 * Fetches data from an API endpoint and manages loading, error, and data states
 *
 * @param {string} url - The API endpoint to fetch from
 * @param {object} options - Optional fetch options (headers, method, etc.)
 *
 * @returns {object} { data, loading, error }
 *   - data: The fetched data (null by default)
 *   - loading: Boolean indicating if request is in progress
 *   - error: Error message if request failed (null by default)
 *
 * @example
 * const { data, loading, error } = useFetch('https://api.example.com/users');
 *
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error}</div>;
 * return <div>{JSON.stringify(data)}</div>;
 */
export function useFetch(url, _options = {}) {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    // TODO: Implement fetch logic
    // 1. Set loading to true
    // 2. Fetch data from the URL
    // 3. Handle success: set data and clear error
    // 4. Handle error: set error message and clear data
    // 5. Set loading to false
    // 6. Add cleanup for AbortController if needed
  }, [url]);

  return { data, loading, error };
}
