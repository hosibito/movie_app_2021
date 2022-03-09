import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);  
  const onChange = (event) => setKeyword(event.target.value);
  
  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once.");
  }, []); // 이코드는 처음 시작할때 한번만 실행된다!!

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // 키워드가 바뀔때만 실행된다. 

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // 카운터가 바뀔때만 실행된다. 
  
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]); // 여러조건을 넣는것도 가능. 

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

