import React, { useState } from 'react';
import './App.module.scss';
import Price from './components/Price/Price';
import Select from './components/Select/Select';
import Suffix from './components/Suffix/Suffix';

function App() {
  const [value, changeValue] = useState({
    amount: '',
    selected: 'gas',
  });

  const handleChange = (e) => {
    changeValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const prices = {
    gas: 7.43,
    electricity: 2.8,
    bread: 6,
  };

  const currencies = {
    pln: 1,
    usd: 4.85,
    eur: 4.81,
  };

  // console.log(Object.keys(currencies)[0]);

  // amount * price *

  return (
    <div>
      <label>
        Choose your product:
        <br />
        <Select handleChange={handleChange} />
        <Suffix unit={value.selected} />
        <br />
      </label>
      <Price
        selected={value.selected}
        amount={value.amount}
        prices={prices}
        ratio={currencies}
      />
    </div>
  );
}

export default App;
