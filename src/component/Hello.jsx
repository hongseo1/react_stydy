import { useState } from "react";

export default function Hello(){
    // let name = "Hong"
    const [name, setName] = useState("Hong");
    // = 배열 구조분해 방식 useState는 배열을 반환한다. 배열의 첫번 째 값은 변수명(state), 두번 째 값은 state를 변경해주는 함수명 / useState("Hong"); = 초기값

    function changeName(){
        const newName = name === "Hong" ? "Jene" : "Hong"; 
        setName(newName)
        // name = name === "Hong" ? "Jene" : "Hong";
        // console.log(name);
        // document.getElementById("name").innerText = name;
    }

    return (
        <div>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}