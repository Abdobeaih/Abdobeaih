import React from 'react';
import './App.css';
import Counter from './components/Counter';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components App</h1>
      </header>
      <main className="App-main">
        <Counter />
        <hr />
        <ControlledForm />
      </main>
    </div>
  );
}

export default App;
