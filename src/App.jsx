import './App.css';
import Hello from './component/Hello';

function App() {
  
  return (
    <div className='App'>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App

/* 
  동일한 컴포넌트여도 state는 각각 관리되며 다른 state에 영향을 주기 않는다.
*/