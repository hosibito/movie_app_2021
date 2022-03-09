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
      setToDos((currentArray) => [toDo, ...currentArray]);  // JS 문법 배열을 추가해서 새 배열을 반환한다. 
      // 리엑트 에서 값을 변경할시 값을 변경하는곳을 이용한다. 
      // 이곳에는 값을 직접 넣어줄수도 잇고 setToDo("");
      // 함수를 이용할수도 있다. setToDos((currentArray) => [toDo, ...currentArray]); 
      // 이때 함수를 이용하면 함수의 인자값으로 현제의 값을 자동으로 준다. 이름만 정해서 사용하면 된다. 
      // 리엑트에서는 절대로 toDos.push(toDo)같이 직접 수정해서는 안된다.(화면갱신도 이루어지지 않음. )
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