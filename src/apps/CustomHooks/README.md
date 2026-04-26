# Custom Hooks Showcase

## Overview

This is a complete UI and styling setup for demonstrating four powerful custom React hooks. The UI is ready to go—you just need to implement the hook logic!

## Project Structure

```
CustomHooks/
├── index.jsx                    # Main showcase component
├── styles.module.css            # Complete styling
├── hooks/
│   ├── useFetch.js             # Fetch data from APIs
│   ├── useDebounce.js          # Delay rapid state updates
│   ├── useLocalStorage.js      # Sync state with browser storage
│   └── useOnClickOutside.js    # Detect clicks outside elements
└── README.md                    # This file
```

## Hooks to Implement

### 1. **useFetch** (`hooks/useFetch.js`)

**Purpose:** Fetch data from APIs with automatic loading and error handling.

**Requirements:**

- Accept a URL and optional fetch options
- Return `{ data, loading, error }`
- Automatically fetch when URL changes
- Handle errors gracefully
- (Optional) Support AbortController for cleanup

**Implementation Tips:**

- Use `fetch()` API
- Set loading state before fetch
- Clear previous error when fetching
- Use `useEffect` to trigger fetch on URL change
- Handle JSON parsing

---

### 2. **useDebounce** (`hooks/useDebounce.js`)

**Purpose:** Delay value updates until user stops making changes (e.g., search input).

**Requirements:**

- Accept a value and delay (ms)
- Return the debounced value
- Use `setTimeout` to delay updates

**Implementation Tips:**

- Create a timer that updates debouncedValue
- Clear timer on each dependency change
- Return cleanup function to clear timer
- Default delay: 500ms

**Use Cases:**

- Search inputs (reduce API calls)
- Auto-save functionality
- Form validation
- Resize/scroll listeners

---

### 3. **useLocalStorage** (`hooks/useLocalStorage.js`)

**Purpose:** Sync React state with browser's localStorage for persistence.

**Requirements:**

- Accept a key and initial value
- Return `[value, setValue]` (like useState)
- Persist value to localStorage
- Initialize from localStorage on mount
- Handle JSON serialization/deserialization

**Implementation Tips:**

- Read from `localStorage.getItem(key)` on init
- Parse JSON if stored as string
- In setter, store to `localStorage.setItem(key, JSON.stringify(value))`
- Handle non-JSON values appropriately
- (Optional) Listen for storage changes in other tabs

**Use Cases:**

- User preferences
- Form auto-save
- App theme settings
- Cart items

---

### 4. **useOnClickOutside** (`hooks/useOnClickOutside.js`)

**Purpose:** Detect clicks outside a DOM element (for closing modals, dropdowns).

**Requirements:**

- Accept a ref and handler function
- Attach click listener to document
- Check if click is outside the ref element
- Call handler if outside clicked
- Cleanup listener on unmount

**Implementation Tips:**

- Add event listener on mount
- Use `ref.current.contains(e.target)` to check if click is inside
- Remove listener on unmount (cleanup)
- Consider `mousedown` vs `click` event
- (Optional) Handle touch events for mobile

**Use Cases:**

- Close modals
- Close dropdowns/menus
- Close tooltips
- Autocomplete behavior

---

## Testing Your Implementation

### For useFetch:

```jsx
const { data, loading, error } = useFetch(
  "https://api.github.com/users/github",
);
// Try entering different API URLs in the input field
```

### For useDebounce:

```jsx
const debouncedSearch = useDebounce(searchInput, 500);
// Type in the search box and notice the delay before debounced value updates
```

### For useLocalStorage:

```jsx
const [items, setItems] = useLocalStorage("items", []);
// Refresh the page—items should persist!
```

### For useOnClickOutside:

```jsx
useOnClickOutside(modalRef, () => setIsModalOpen(false));
// Click outside the modal to close it
```

---

## UI Features Already Built

✅ Beautiful gradient background
✅ Responsive grid layout
✅ Card-based sections for each hook
✅ Input fields and buttons
✅ Loading states with animations
✅ Error display
✅ Modal overlay for click-outside demo
✅ Local storage item list
✅ Debounce info display
✅ Data display area for fetched data
✅ Mobile responsive design
✅ Helpful hints and tips

---

## Getting Started

1. Open `hooks/useFetch.js` and implement the fetch logic
2. Open `hooks/useDebounce.js` and add the setTimeout logic
3. Open `hooks/useLocalStorage.js` and add localStorage handling
4. Open `hooks/useOnClickOutside.js` and add click detection
5. The UI will automatically work once hooks are implemented!

---

## Common Pitfalls

❌ **useFetch:** Forgetting to clean up fetch requests
✅ **Solution:** Use AbortController to cancel requests

❌ **useDebounce:** Not clearing the timeout in cleanup
✅ **Solution:** Return cleanup function from useEffect

❌ **useLocalStorage:** Forgetting to JSON.stringify/parse
✅ **Solution:** Always stringify objects, parse on read

❌ **useOnClickOutside:** Not checking if ref is null
✅ **Solution:** Add `if (!ref.current)` check

---

## Challenge Extensions

Once basic implementation works, try:

1. **useFetch**: Add retry logic, timeout, abort capability
2. **useDebounce**: Add leading/trailing edge options
3. **useLocalStorage**: Add expiration time, multiple keys
4. **useOnClickOutside**: Handle escape key, touch events

---

## Resources

- [React Hooks Docs](https://react.dev/reference/react)
- [useEffect Deep Dive](https://react.dev/reference/react/useEffect)
- [Fetch API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

Good luck with your implementation! 🚀
