import { useEffect, useRef } from 'react';

/**
 * useOnClickOutside Hook
 * 
 * Closes modals, dropdowns, or other components when user clicks outside
 * Automatically attaches a click event listener to the document
 * 
 * @param {React.RefObject} ref - Reference to the element to watch
 * @param {function} handler - Callback function when click outside is detected
 * 
 * @returns {void}
 * 
 * @example
 * const ref = useRef();
 * 
 * useOnClickOutside(ref, () => {
 *   setIsOpen(false);
 * });
 * 
 * return (
 *   <div ref={ref} className="modal">
 *     {children}
 *   </div>
 * );
 */
export function useOnClickOutside(ref, handler) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // TODO: Implement useOnClickOutside logic
    // 1. Create a mousedown (or click) event listener
    // 2. Check if the click target is outside the ref element
    // 3. If outside, call the handler function
    // 4. Attach listener to document
    // 5. Return cleanup function to remove the listener
    // 6. Consider touch events for mobile devices

    console.log('TODO: Implement useOnClickOutside logic');
  }, [ref]);
}
