import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day(){
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return ( 
        <>
            <h2>Day {day}</h2>
            {/* 네트워크가 느린 환경에서 dom에 데이터가 추가되기 전 표시 */}
            {words.length === 0 && (<span>Loading...</span>)}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}