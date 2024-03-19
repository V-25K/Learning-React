import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const add = () => {
    if (count < 20) {
      setCount(count + 1);
    }
    else{
      setMessage("Cannot exceed 20!!");
    }
  }

  const subs = () => {
    if (count > 0) {
      setCount(count - 1);      
    }
    else{
      setMessage("Cannot go below zero!!");
    }
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={add}>ADD +1</button>
      <button onClick={subs}>SUBSTRACT -1</button>
      <p>{message}</p>
    </>
  );
}

export default App;
