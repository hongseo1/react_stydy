import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList(){
    const days = useFetch('http://localhost:3001/days');

    /* 네트워크가 느린 환경에서 dom에 데이터가 추가되기 전 표시 */
    if(days.length ===0){
        return <span>Loading...</span>
    }

    return (
        <ul className='list_day'>
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
         </ul>
    );
    
}