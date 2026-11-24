import React from 'react';
import Greeting from './Greeting';
import Counter from './components/Counter';
import CounterPanel from './components/CounterPanel';
import TodoApp from './todoApp/TodoApp';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <Greeting name="Chris"/>
      <CounterPanel></CounterPanel>
      <TodoApp></TodoApp>
      <UserList></UserList>
   </>
  );
}

export default App;
