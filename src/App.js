import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const createNumber = (ev) => {
    setNumbers([...numbers, Math.ceil(Math.random() * 10)]);
  }


  return (
    <div className="App">
      <div>
        <button onClick={ () => createNumber()}>Make Number</button>
      </div>
      <div>
        <ul>
          {numbers.map((number, idx) => {
            return (<li key={idx}>{number}</li>);
          })}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
