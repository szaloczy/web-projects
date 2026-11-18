interface CounterDisplayProps {
    count: number;
}

function CounterDisplay({ count }: CounterDisplayProps) {
    return <p>Count: { count }</p>
}

export default CounterDisplay;