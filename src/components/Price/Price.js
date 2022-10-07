import React from 'react';

function Price(props) {
  const handlePrice = (props) => {
    let obj = Object.keys(props.ratio);
    let priceArr = [];

    obj.forEach((e) => {
      return (
        priceArr.push(
          `Price in ${e.toUpperCase()}: ${(
            (props.prices[props.selected] * props.amount) /
            props.ratio[e]
          ).toFixed(2)}`
        ),
        priceArr.push(<br />)
      );
    });

    return priceArr;
  };

  return (
    <>
      <p>{handlePrice(props)}</p>
    </>
  );
}

export default Price;
