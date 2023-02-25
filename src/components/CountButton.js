import React, { useState, useEffect } from 'react';

const CountButton = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log({ count });
  }, [count]);

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
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default CountButton;
