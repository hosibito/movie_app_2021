import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []); // 이코드는 처음 시작할때 한번만 실행된다!!

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/* 
  const iRunOnlyOnce = () => {
    console.log("i Run Only Once....");
  }
  useEffect(iRunOnlyOnce, []);
  과 같다. 
*/
