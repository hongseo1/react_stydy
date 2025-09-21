import World from "./World";

export default function Hello(){
    return (
        <div> {/* jsx는 하나의 태그만 만들 수 있기 때문에 <></> 빈 태그 또는 div로 감싸줘야된다. */}
            <h1>Hello</h1>
            <World />
            <World />
        </div>
    );
}

/*
3가지 방법

const Hello = function(){
    return (
        <p>Hello</p>;
    );
};

export default Hello;

const Hello = () => {
    return (
        <p>Hello</p>;
    );
};

export default Hello; 

export default function Hello(){
    return (
        <p>Hello</p>;
    );
}

*/