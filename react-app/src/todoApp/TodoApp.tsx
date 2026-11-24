import { FormEvent, useState } from 'react';

interface Todo {
    id: number;
    text: string;
}

function TodoApp() {


    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState('');

    function createTodo(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const trimmedText = text.trim();
        
        if (trimmedText === '') return;

        setTodos((currentTodos) => [
            ...currentTodos,
            {id: Date.now(), text: trimmedText},
        ]);
        setText('');
    }

    function deleteTodo(id: number) {
        setTodos((currentTodos) =>
            currentTodos.filter((todo) => todo.id !== id)
        );
    }

    return (
        <>
            <ul>
                {
                    todos.map((todo) => <li key={todo.id}>{todo.text}<button onClick={() => deleteTodo(todo.id)}>delete</button></li>)
                }
            </ul>
            <form onSubmit={createTodo}>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
                <button type="submit">Add</button>
            </form>
           
        </>
    )

}

export default TodoApp;