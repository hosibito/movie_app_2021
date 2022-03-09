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
        setToDo("");     
    };

  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

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
      <hr />
      <ul>        
        {toDos.map((item, index) => (   // JS 문법 map 리스트를 받아와서 각 요소마다 함수를 실행하여 변형된 리스트를 반환한다. 
          <li key={index}>{item}</li>   // map의 첫번째인자는 리스트의요소. 두번째 인자는 인덱스.
        ))}
      </ul>  
    </div>
  );
}
export default App;
