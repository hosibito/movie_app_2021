import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

/* 
  버튼이 클릭될떄마다 +1 씩 올려주는 기능을한다.
  매번 버튼이 틀릭될떄마다 api가 새로 불려지며 바뀐화면을 다시 그려준다.
  의도된대로 잘 동작하는 코드이다. (기존에 배운거 기억 되살릴것.)

  문제는 매번 언제나 화면표시를 갱신한다는것이다. 
  필요에 따라 갱신을 하지 않아야 할떄가 있다. (초기설정을 불러온다거나. )
  그것을 이번장에서 배운다. 
*/