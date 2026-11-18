import { useState } from 'react';
import CounterButton from './CounterButton';

function Counter() {
    const [ count, setCount] = useState(0);

    return (
        <>
            <p>{ count }</p>
            <CounterButton label="Increment" onClick={() => setCount(count + 1)}></CounterButton>
            <CounterButton label="Decrement" onClick={() => setCount(Math.max(0, count - 1))}></CounterButton>
            <CounterButton label="  Reset" onClick={() => setCount(0)}></CounterButton>
        </>
    );

}

export default Counter;