import { useState } from "react";
import UserName from "./UserName";

/*export default function Hello(props){ 
    console.log(props);
    //props.age = 100; 
    //에러 발생. props로 넘겨 받은 값은 컴포넌트에서 변경할 수 없다. 만약 값을 변경하고 싶다면 state를 다시 만들어야 한다. (props.age의 값을 변경하는 것이 아닌 그 값을 받은 새로운 객체를 생성하는 것이다.)

    const [age, setAge] = useState(props.age); // 아래 버튼 클릭 시 age+1 처럼 받아온 props.age 값을 수정하기 위해서 정의. 위에서 설명한 것처럼 실제 props.age의 값이 변경되는 것은 아님. 받아 온 값을 새로운 객체에 담아서 수정하는 것. 

    const [name, setName] = useState("Hong");

    return (
        <div>
            <h2 id="name">{name}({age})</h2> //{({props.age}) }
            <button onClick={()=>{
                setName(name==="Hong" ? "Jane" : "Hong");
                setAge(age + 1); App.jsx에서 각각 버튼 클릭 시 다르게 적용되는 것 확인 
            }}>Change</button>
        </div>
    );
*/

//현재는 age 값만 받아오기 때문에 수정.
export default function Hello({age}){ //{age} > 구주 분해 할당 문법
    const [name, setName] = useState("Hong");
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
    
    return (
        <div>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={()=>{
                setName(name==="Hong" ? "Jane" : "Hong");
            }}>Change</button>
        </div>
    );
}

/*
    화면의 데이터를 갱신하기 위해서는 state와 props 이 두가지를 사용해서 처리하는 것이 좋다.

    props는 부모 컴포넌트에서 값을 넘길 때 사용하는 속성이지만,
    한 컴퍼넌트가 가지고 있는 state를 props로 넘길 수도 있다.

    예를 들어 Hello 컴포넌트에서는 name이 stete이지만 UserName 컴포넌트에서는 props 이다.
*/