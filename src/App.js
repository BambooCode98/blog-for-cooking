import './App.css';

import React, { useState } from 'react';

export default function Example() {
  const [count, setCount] = useState(5);
  const [inputs, setInput] = useState("filled");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <br />
      <br />
      <input type="text" placeholder={() => setCount(count)} />
    </div>
  );
}
