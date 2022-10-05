import React, { useState } from 'react';

function Select(props) {
  const price = useState({
    gas: '7.43',
    electricity: '7.43',
    bread: '6',
  });

  return (
    <>
      <select
        name="selected"
        value={props.selected}
        onChange={props.handleChange}
      >
        <option value="gas" price={price.gas}>
          Gas
        </option>
        <option value="electricity">Electricity</option>
        <option value="bread">Loaf of bread</option>
      </select>
      <br />
      <input
        type="number"
        name="amount"
        value={props.amount}
        onChange={props.handleChange}
      />
    </>
  );
}

export default Select;
