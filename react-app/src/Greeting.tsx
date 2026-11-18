
interface GreetingProps {
    name?: string;
}

function Greeting({ name = "default" }: GreetingProps) {
    return <h1>Hello, { name }!</h1>
}

export default Greeting;