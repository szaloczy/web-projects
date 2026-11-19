import { useState } from 'react';
import CounterDisplay from './CounterDispaly';
import CounterButton from './CounterButton';

function CounterPanel() {
    const [count, setCount] = useState(0);

    return (
        <> 
            <CounterDisplay count={count}/>
            <CounterButton label="Increment" onClick={() => setCount(count + 1)}/>
            <CounterButton label="Reset" onClick={() => setCount(0)}/>
            { count > 10 && <p>Thats a lot of click</p>}
        </>
    )
}

export default CounterPanel;