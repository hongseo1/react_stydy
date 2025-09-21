import { useState } from 'react'
import './App.css'

function App() {
  const name = "Hong";
  /* const user = {
    name: "Tom",
  }; */
  const naver = {
    name: "네이버",
    url: "https://naver.com"
  };
  return (
    <div className='App'>
      <h1 style={{color: "red", backgroundColor: "white"}}
      >Welcome</h1>
      {/* jsx에서는 style 속성을 지정할 때는 자바스크립트 객체형태로 정의해야 한다. CSS 속성은 카멜 케이스로 작성, 값은 문자열로 처리  */}
      Hello, {name}
      <p>{2+3}</p>
      {/* <p>{user}</p> */}
      {/* 숫자나 문자열은 에러 없이 출력하나 boolean(true, false) 타입과 객체는 표현하지 못한다.*/}
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App
