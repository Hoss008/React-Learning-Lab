import { useState, useEffect } from "react";

/**
 * useDebounce Hook
 *
 * Delays the update of a value until after the user has stopped updating it
 * Useful for search inputs, autocomplete, and reducing API calls
 *
 * @param {*} value - The value to debounce
 * @param {number} delay - Delay in milliseconds (default: 500ms)
 *
 * @returns {*} The debounced value
 *
 * @example
 * const [searchInput, setSearchInput] = useState('');
 * const debouncedSearch = useDebounce(searchInput, 500);
 *
 * useEffect(() => {
 *   // This will only run 500ms after the user stops typing
 *   console.log('Searching for:', debouncedSearch);
 * }, [debouncedSearch]);
 */
export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // TODO: Implement debounce logic
    // 1. Set up a timeout that updates debouncedValue after the delay
    // 2. Clear the timeout if the effect runs again (dependency change)
    // 3. Return cleanup function to clear timeout on unmount

    console.log("TODO: Implement useDebounce logic");
  }, [value, delay]);

  return debouncedValue;
}
