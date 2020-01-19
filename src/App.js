import React, { useState } from 'react';
import Form from './Form';
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
      <Form checked={checked} createNumber={createNumber} setCheck={setCheck} numbers={numbers}/>
    </div>
    
  );
}

export default App;
