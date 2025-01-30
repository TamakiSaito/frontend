import React from 'react';
import Counter from './counter';
import Button from './button';
import CustomHook from './customHook';
import CustomHookSecond from './customHookSecond';

function App() {
  return (
    <div>
      <h1>React Study</h1>
      <Counter />
      <Button />
      <CustomHook />
      <CustomHookSecond />
    </div>
  );
}

export default App;