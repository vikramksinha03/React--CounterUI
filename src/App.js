import { useState } from "react";

function App() {
  const [num, setNum] = useState(1)
  const [count, setCount] = useState(1)

  function handleDecrement() {
    setNum(num - 1)
  }

  function handleIncrement() {
    setNum(num + 1)
  }

  function handleCountDecrement() {
    setCount(count - num)
  }

  function handleCountIncrement() {
    setCount(count + num)
  }

  const date = new Date()
  date.setDate(date.getDate() + count)
  return (
    <>
    <div>
      <div>
        <button onClick={handleDecrement}>-</button> 
        <span>Step: {num}</span>
        <button onClick={handleIncrement}>+</button>
     </div>
     <div>
        <button onClick={handleCountDecrement}>-</button> 
        <span>Count: {count}</span>
        <button onClick={handleCountIncrement}>+</button>
     </div>
    </div>

    <p>
      {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
      <span>{date.toDateString()}</span>
    </p>

    </>
  );
}

export default App;
