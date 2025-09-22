import './App.css';
import Hello from './component/Hello';

function App() {
  
  return (
    <div className='App'>
      <h3>props: properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App

/* 
  console에서 10 10 20 20 30 30 이런 식으로 두번씩 출력되는데 이는 리액트 개발모드에서 컴포넌트가 두 번 렌더링 되기 때문이다.
  리액트는 개발 단계에서 잠재적인 문제를 미리 발견하고 경고하기 위해 <React.StrictMode>를 사용하는데 이 모드는 개발 환경에서 의도적으로 특정 동작을 두 번씩 실행시켜 부작용을 감지하도록 돕는다.
  main.jsx 파일에서 <React.StrictMode>를 제거하면 두 번 출력되는 것을 해결할 수는 있느나 이는 중요한 도구이므로 권장하지 않는다.
*/