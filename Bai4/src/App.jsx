import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function hamTang() {
    setCount(count + 1);
  }

  function hamGiam() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={hamTang}>Tăng</button>
      <button onClick={hamGiam}>Giảm</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
