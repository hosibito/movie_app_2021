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
        <Route path="/movies" element={<Detail />} />    
        <Route path="/hello" element={<h1>Hello</h1>} />     
      </Routes>
    </BrowserRouter>  
  );
}
export default App;

/*
  라우터를 이용 페이지 단위 로 표기한다 
  공식문서 참고할것.

  루트부터 각 주소에 딸린 컨포넌트들을 표시해 줄수 있다. 
*/
