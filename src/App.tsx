import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  let num1: string = 'one';

  num1 = 'two';

  return (
    <div className="App">
      <header className="App-header">{num1}</header>
    </div>
  );
};

export default App;
