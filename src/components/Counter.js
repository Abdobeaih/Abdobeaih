import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => (prev < 10 ? prev + 1 : prev));
  };

  const decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCount(() => 0);
  };

  return (
    <div className="counter-container">
      <h2>Counter Component</h2>
      <div className="counter-display">
        Count: <strong>{count}</strong>
      </div>
      <div className="counter-controls">
        <button onClick={decrement} disabled={count <= 0}>
          −
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment} disabled={count >= 10}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
