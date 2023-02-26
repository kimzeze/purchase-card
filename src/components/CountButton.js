import React, { useState, useEffect } from "react";

const CountButton = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {}, [count]);

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <div className="CountButton">
      <button className="clickButton" onClick={minus}>
        -
      </button>
      <span className="buttonValue">{count}</span>
      <button className="clickButton" onClick={plus}>
        +
      </button>
    </div>
  );
};

export default CountButton;
