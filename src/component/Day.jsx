import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day(){
    //dummy.words
    // const day = 1;
    // const a = useParams();
    // console.log(a);
    const {day} = useParams();
    const wordList = dummy.words.filter(word => word.day === Number(day)); //useParams에 day는 문자열이기 때문에 숫자형으로 바꿔 줘야 성립이된다.
    console.log(wordList);

    return ( 
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}