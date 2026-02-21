import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <p className="countdisplay">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increament}>
        Increament
      </button>
    </div>
  );
}
export default Counter;
