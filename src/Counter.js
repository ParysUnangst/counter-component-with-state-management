import React, { useState } from 'react';

// Counter component definition
function Counter() {
  // Declare state variable 'count' and 'setCount' function to update it
  const [count, setCount] = useState(0);

  // Function to increment count by 1
  const increment = () => {
    // Update count using the previous state
    setCount(prevCount => prevCount + 1); 
  };

  // Function to increment count by 1 after a 2-second delay
  const incrementAfterDelay = () => {
    setTimeout(() => {
        // Update count using the previous state after 2 seconds
      setCount(prevCount => prevCount + 1); 
    }, 2000);
  };

  // Function to try to increment count by 2 immediately
  const incrementTwice = () => {
    setCount(count + 1); // Increment count by 1
    setCount(count + 1); // Increment count again by 1 (may not work as expected)
  };

  // Function to correctly increment count by 2 using a state updater function
  const correctIncrementTwice = () => {
    // Update count by adding 2 to the previous state
    setCount(prevCount => prevCount + 2); 
  };

  // Render Counter component UI
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
}

export default Counter;
