import React from 'react';
import './App.css';

function App() {
  let num1: string = 'one';

  num1 = 'two';

  return (
    <div className="App">
      <header className="App-header">{num1}</header>
    </div>
  );
}

export default App;
