import './style.css'
import { useState } from "react";

function App() {
  const [num, setNum] = useState(1)
  const [count, setCount] = useState(0)

  function handleChange(e) {
    setCount(+e.target.value)
  }

  function handleIncrementDecrement(e) {
    setNum(+e.target.value)
  }

  function handleCountDecrement() {
    setCount(count - num)
  }

  function handleCountIncrement() {
    setCount(count + num)
  }

  function handleClick() {
    setNum(1)
    setCount(0)
  }

  const date = new Date()
  date.setDate(date.getDate() + count)
  return (
    <div className='App'>
      <div>
        <input type="range" min='1' max='10' value={num} onChange={handleIncrementDecrement}/> 
        <span>Step: {num}</span>
     </div>
     <div>
        <button onClick={handleCountDecrement}>-</button> 
        <input type="text" value={count} onChange={handleChange}/>
        <button onClick={handleCountIncrement}>+</button>
     </div>

    <p>
      {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
      <span>{date.toDateString()}</span>
    </p>

    {count !== 0 || num !== 1 ? (
    <div>
      <button onClick={handleClick}>Reset</button> 
    </div>
    ) : null } 
  </div>
  );
}

export default App;
