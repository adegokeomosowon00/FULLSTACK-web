import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  const Kodex = () => {
    setCount(count - 1);
  };
  const handleDecremeant = () => {
    setCount(count - 1);
  };
  const handleDecremean = () => {
    alert(`kodex baddest`);
  };
  return (
    <div>
      <p>
        {" "}
        Your Count <h1>{count}</h1>
      </p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={handleDecremeant}>decreament</button>
      <button onClick={handleDecremean}>click</button>
    </div>
  );
};
export default Counter;
