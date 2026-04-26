import { useState } from "react";

/**
 * useLocalStorage Hook
 *
 * Syncs state with browser's localStorage
 * Values persist across page refreshes and browser sessions
 *
 * @param {string} key - The key to store in localStorage
 * @param {*} initialValue - The initial value if nothing is stored
 *
 * @returns {array} [value, setValue]
 *   - value: Current value from localStorage
 *   - setValue: Function to update the value (updates both state and storage)
 *
 * @example
 * const [name, setName] = useLocalStorage('userName', '');
 *
 * const handleChange = (e) => {
 *   setName(e.target.value); // Updates state and localStorage
 * };
 */
export function useLocalStorage(key, initialValue) {
  // TODO: Implement useLocalStorage logic
  // 1. Initialize state with value from localStorage (if exists) or initialValue
  // 2. Create setter function that:
  //    - Updates the state
  //    - Stores the value in localStorage
  //    - Handles both object and primitive values
  // 3. Handle JSON serialization/deserialization
  // 4. Listen for storage changes in other tabs (optional but recommended)

  const [value, setValue] = useState(initialValue);

  // TODO: Add useEffect to handle localStorage sync

  return [value, setValue];
}
