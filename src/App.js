import React, { useState } from 'react';
import './App.css';


function App() {

  const [numbers, setNumbers] = useState([]);
  const [checked, setCheck] = useState(true)

  const createNumber = () => {
    let number = Math.ceil(Math.random() * 10);
    if (checked === false) {
      console.log(checked)
      setNumbers([...numbers, number]);
    }
    else {
      console.log(checked)
      while (number % 2 !== 0) {
        number = Math.ceil(Math.random() * 10)
      }
      setNumbers([...numbers, number]);
    }
  }

  const unique = numbers.reduce((acc, number) => {
    acc.add(number);
    return acc;
  }, new Set());

  return (
    <div className="App">
      <div>
        <h4>There are {unique.size} unique numbers</h4>
      </div>
      <form onSubmit={(event) => { event.preventDefault() }}>
        <div>
          <label>Even Only</label>
          <input type="checkbox" checked={checked} onChange={() => setCheck(!checked)}/>
        </div>
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
      </form>
    </div>
    
  );
}

export default App;
