import React from 'react';

function Price(props) {
  const handlePrice = (props) => {
    let obj = Object.keys(props.ratio);

    obj.forEach((e) =>
      console.log(
        `Price in ${e.toUpperCase()}: ${(
          (props.prices[props.selected] * props.amount) /
          props.ratio[e]
        ).toFixed(2)}`
      )
    );
  };

  return (
    <>
      <p>{handlePrice(props)}</p>
    </>
  );
}

export default Price;
