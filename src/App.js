import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); 
    // 자마스크립트 문법. 기존리스트와 새 요소를 더한 새 리스트를 작성
    // 리엑트에서는 절대로 toDos.push(toDo) 같이 직접 수정해서는 안된다. 
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input  
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;

/*
 input 만드는 의식의 흐름.
    1. input 를 만든다.
      <input type="text" placeholder="Write your to do..."/>
    2. input 에서 입력될 값을 다룰 공간을 마련한다. 
      const [toDo, setToDo] = useState("");  기본값을 정해주고, 받아올value 값과 수정할수 있는 함수를 지정.
    3. input에 value를 연결한다. 
      <input value={toDo} type="text" placeholder="Write your to do..."/>
    4. input 에 이벤트를 연결한다.(인풋 내용이 바뀔떄)
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
    5. 이벤트발생시 처리내용을 작성한다. 
      const onChange = (event) => setToDo(event.target.value);     
    6. 완성.

  form 만드는 의식의 흐름
    1. form 을 만들고 submit 버튼 추가
      <form><button>Add To Do</button></form>
    2. sebmit 눌렸을때의 동작을 이벤트에 연결
      <form onSubmit={onSubmit}>
    3. 이벤트를 작성.
      const onSubmit = (event) => {  
        event.preventDefault(); 
        console.log(toDo)  // 위에서 만들어진 값은 사용할수 있다. 
      }
    4. 이벤트 완성.
      const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
          return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
      };
*/