import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DayList(){
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onClick(){
        setCount(count +1);
    }

    function onClick2(){
        setDays([
            ...days,
            {
                id : Math.random(),
                day: 1
            },
        ]);
    }

    useEffect(()=>{
        console.log("Count Change");
    }, []); //현재 코드에서는 렌더링이 되 후 최초에 한 번만 API를 호출하는 목적만 있기에 의존성 배열에 빈 배열을 입력해준다.

    /*
    //useEffect(): 어떤 상태 값이 바뀌었을 때 동작하는 함수를 작성할 수 있다. 함수 호출 타이밍: 렌더링 결과가 실제 DOM에 반영된 직후, 컴포넌트가 사라지기 직전에도 마지막으로 호출됨.
    useEffect(()=>{ //첫 번째 매게 변수로 실행될 함수를 정의한다. 이 때 두 번째 매게 변수가 없을 경우에는 day change 버튼을 클릭 했을 때에도 함수가 실행되는데 이러한 동작을 방지(단순히 로그를 찍는 코드가 아닌 복잡한 코드일 경우 여러번 반복해서 호출하기 때문에 문제가 생길 수 있다.)하기 위해서는 두 번째 매게 변수로 바뀔 배열을 전달해줘야 그 값이 변경되었을 때만 동작하게 할 수 있다.
        console.log('Count Change');
    }, [count]); //두 번째 매게 변수로 배열을 전달한다. 그러면 의존성 배열의 값이 변경되었을 때만 함수가 실행된다.
    */
    return (
        <>
            <ul className='list_day'>
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day Change</button>
        </>
    );
    
}