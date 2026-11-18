import React from 'react';
import Greeting from './Greeting';
import Counter from './components/Counter';
import CounterPanel from './components/CounterPanel';

function App() {
  return (
    <>
      <Greeting name="Chris"/>
      <CounterPanel></CounterPanel>
   </>
  );
}

export default App;
