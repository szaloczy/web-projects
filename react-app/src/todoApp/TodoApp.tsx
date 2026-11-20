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

    function deleteTodo(id: number) {
        setTodos(todos.filter((todo) => todo.id === id))
    }

    return (
        <>
            <ul>
                {
                    todos.map((todo) => <li key={todo.id}>{todo.text}<button onClick={() => deleteTodo(todo.id)}>delete</button></li>)
                }
            </ul>
            <form>
                <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
                <button onClick={createTodo}>Add</button>
            </form>
           
        </>
    )

}

export default TodoApp;