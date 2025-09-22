export default function Hello(){
    /* 1 */
    function showName(){
        console.log("Hong");
    }
    /* 2 */
    function showAge(age){
        console.log(age)
    }
    /* 3-1 function showText(e){
        console.log(e.target.value);
    } */
    function showText(txt){ /* 3-3 */
        console.log(txt);
    }
    return (
        <div>
            <h1>Hello</h1>
            {/* 1 */}<button onClick={showName}>show name</button>
            {/* 2 */}<button onClick={()=>{
                showAge(25);
            }}>show age</button>
            {/* 3-1 <input type="text" onChange={showText}/> 아래와 동일 */}
            {/*3-2 <input type="text" onChange={(e)=>{
                console.log(e.target.value);
            }} /> */}
            {/* 3-3 */}
            <input type="text" onChange={e =>{
                const txt = e.target.value;
                showText(txt); 
            }} />
        </div>
    );
}

/* 
    <button onClick={()=>{
        console.log(25);
    }}>

    이런 식으로 작성할 경우 매게변수를 전달하기 편하다는 장점이 있다.

    이벤트 처리를 하는 방식은 여러 개니깐 상황에 맞게 가독성이 좋은 코드를 선택해서 작성하면 된다.
*/