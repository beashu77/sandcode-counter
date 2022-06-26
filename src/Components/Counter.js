import React from "react";
import "../styles.css";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  // function handleClick(){
  //   setCount(count+1)
  // }
  return (
    <>
      <h1>Count is:{count}</h1>
      <button onClick={() => setCount(count - 1)} className="Dec">
        Decrementcount
      </button>
      <button onClick={() => setCount(count + 1)} className="Inc">
        Incrementcount
      </button>
    </>
  );
}
