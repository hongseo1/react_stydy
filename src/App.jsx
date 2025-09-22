import './App.css';
import styles from './App.module.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  
  return (
    <div className='App'>
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App

/* 
  App.jsx와 Hello.jsx에 .box를 만들어 App.css와 Hello.css에 .box에 대한 스타일 속성을 지정하였으나 Hello.css 의 속성이 적용된는 것을 확인 할 수 있다. 
  각 컴포넌트에 해당 css를 연결 하더라도 결과적으로 head 태그 안에 포함이 되기때문에 css 속성이 하나만 적용된는 것이다. (각 스타일 시트를 작성하여 해당 컴포넌트에만 연결하더라도 전역에 적용되는 것)

  이러한 문제를 해결하기 위해서는 각 컴포넌트에만 적용되는(특화된) css는 컴포넌트명.module.css를 만들어서 'import styles from "./컴포넌트명.module.css";' 식으로 'styles'라는 객체를 생성하여 'className={styles.box}' 문자열이 아닌 객체 형태로 className을 지정하여 스타일을 적용한다. = 같은 클래스명을 사용해도 해당 컴포넌트에 특화된 css를 적용할 수 있다.

  **정리
  css 적용 방법
  - 인라인 스타일: 기존 인라인으로 속성 지정하여 하는 방식, 단 문자열이 아닌 객체 형태로 작성 (ex) Hello.jsx h1태그)

  - 외부 스타일시트: 기존 과 동일 단, 전역에 적용됨

  - 컴포넌트명.module.css: 해당 컴포넌트의 css만 모듈화 하여 적용할 수 있다. 
*/