import React, { useState } from 'react';
import './App.module.scss';
import Suffix from './components/Suffix/Suffix';

function App() {
  const [value, changeValue] = useState({
    amount: '100',
    selected: '',
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    changeValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <label>
        Choose your product:
        <br />
        <select name="selected" value={value.selected} onChange={handleChange}>
          <option value="gas">Gas</option>
          <option value="electricity">Electricity</option>
          <option value="bread">Loaf of bread</option>
        </select>
        <br />
      </label>
      <input
        type="number"
        name="amount"
        value={value.amount}
        onChange={handleChange}
      />{' '}
      <Suffix />
    </div>
  );
}

export default App;
