import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
          {/* 
              리엑트에서 사용하는 모듈CSS 이다. 이 앱에서 사용되는 CSS를 
              앱이름.module.css 로 만들어서 저장하면. 전역이 아닌 이곳에서만 사용되는 CSS로 변환시켜 적용한다.  
              <h1 class="App_title__gHwE1">Welcome back!!!</h1> 
              처럼 클래스임름이 랜덤하게 붙으면서 css를 적용한다. 
          */}      
      <Button text={"Continue"} />  
          {/* 
              따로 만들어진 버튼 모듈을 불러온다. 불러올때 모듈에서 정한 프로퍼티를 넘겨줘서 이용할수 있다. 
          */}
    </div>

  );
}

export default App;
