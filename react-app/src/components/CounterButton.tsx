interface CounterButtonProps {
    label: string;
    onClick: () => void
}

function CounterButton({ label, onClick}: CounterButtonProps) {
    return <button onClick={onClick}>{label}</button>
}

export default CounterButton;