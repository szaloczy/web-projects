import { useState } from 'react';

interface Todo {
    id: number;
    text: string;
}

function TodoApp() {


    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState('');

    function createTodo() {
        if (text.trim() === '') return;
        setTodos([...todos, {id: Date.now(), text}]);
        setText('');
    }

    return (
        <>
            <ul>
                {
                    todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
                }
            </ul>
            <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
            <button onClick={createTodo}>Add</button>
        </>
    )

}

export default TodoApp;