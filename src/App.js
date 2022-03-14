import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<h1>Hello</h1>} />     
      
        <Route path="movies/:id" element={<Detail />} />  
        <Route path="movies">  
          <Route path=":id" element={<Detail />} />  
        </Route>    
       
      </Routes>
    </BrowserRouter>  
  );
}
export default App;

/*
  라우터를 이용 페이지 단위 로 표기한다 
  공식문서 참고할것.

  루트부터 각 주소에 딸린 컨포넌트들을 표시해 줄수 있다. 

  값을 포함한 url 을 설정해준다. 

  의식의 흐름.. 
    1. 라우터에서 주소를 정해주고. 주소에 전달될 파라미터 값을 정해준다. 
    2. 전달될 파라미터 값을 준비한다.
        - Home 에서 <Movie/> 를 부를때  ID 값을 포함해준다. 
        - Movie 에서 포함된 ID 값으로 링크를 만든다. (클릭해서 그 주소로 넘어갈수 있게)
    3. Detail 에서 전달된 ID 값을 가져와서 정보를 불러오고 불려진 정보를 가공해서 보여준다. 
*/
