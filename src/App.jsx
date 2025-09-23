import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
//예제에서는 Switch를 사용했지만 v6 이상 버전에서는 Switch 컴포넌트가 제거 되었기 때문에 오류 발생, Switch 대신 Routes 사용. Routes 안에는 Route 컴포넌트만 자식으로 가질 수 있으므로 이동할 컴포넌트를 감싸 경로 지정을 해줘야한다. 
//<Route path="/" element={<DayList />} />와 같이 <Routes> 내부에 <Route> 컴포넌트만 사용하고, element prop을 통해 DayList 컴포넌트를 렌더링해야 한다.

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<DayList/>}></Route>
          <Route path="/day/:day" element={<Day/>}></Route>
          <Route path="*" element={<EmptyPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

/* 
<Switch>
  <Route exact path="/">
    <DayList/>
  </Route>
  <Route path="/day:day">
    <Day/>
  </Route>
  <Route>
    <EmptyPage/>
  </Route>
</Switch>
Switch 사용해서 Route 작성 시 EmptyPage 컴포넌트가 하단에 있어야 한다. 
<Switch>는 일치하는 첫 번째 <Route>만 렌더링하고, 이후 라우트들은 무시하기 때문이다.
그렇기에 예외 처리용 라우트는 항상 마지막에 배치해야하는 것이다.

하지만 v6 이상 번전에서 사용되는 <Routes>는 라우트 순서에 관계 없이 가장 정확하게 일치하는 경로를 찾아 렌더링한다. 경로가 구체적일 수록 /*와 같이 포괄적인 경로보다 우선순위가 높아진다. 그렇기에 예외 처리용 라우트 위치가 어디든 상관 없이 정확하게 동작한다는 차이가 있다.
*/


/* 
  json-server: .json 파일을 기반으로 REST API 서버를 만들어주는 도구
  json-server 설치 후
  json-server --watch ./src/db/data.json --port 3001
  --watch > ./src/db/data.json 파일을 감시하면서 파일 내용이 변경될 때마다 서버를 자동으로 업데이트 해준다.
  --port 3001 > 서버를 3001번 포트에서 실행되도록 지정한다. 지정하지 않으면 기본 3000번 포트에서 실행된다.

  REST API: 클라이언트가 서버의 자원(Resource)에 (모든 데이터) 접근하는 방식을 정의하는 것
  자원 식별에 URL을 사용하고 자원에 대한 행위(CRUD)를 정의하는데 HTTP method를 사용한다.

  간단하게 말하면, URL 주소와 meathod로 CRUD 요청을 하는 것

  Create : POST Method
  Read : GET Method
  Update : PUT Method
  Delete : DELETE Method
*/