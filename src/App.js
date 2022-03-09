import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");   // 처음 실행될때 실행
    return () => console.log("bye :(");  // 실행이 종료될때 실행
  }, []);

  return <h1>Hello</h1>;
}

function Hello2(){  // 위와 같다. 
  function byFn() {
    console.log("bye :(");
  }
  function hiFn(){
    console.log("hi :)"); 
    return byFn;
  }
  useEffect(hiFn, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

/*
  show hide 를 누를때마다
  Hello() 의 hi 와 bye 가 계속나타남.
  이유는 {showing ? <Hello /> : null} 에의해 
  사라지고(디스트로이) 나타나기(크리에이트)를 반복하기 떄문이다. 
*/
