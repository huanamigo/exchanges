import React from 'react';

function Suffix(props) {
  const handleSuffix = (unit) => {
    switch (unit) {
      case 'electricity':
        return 'kWh';
      case 'bread':
        return 'loafs';
      case 'gas':
        return 'liters';
      default:
        return '';
    }
  };

  return (
    <>
      <em>{handleSuffix(props.unit)}</em>
    </>
  );
}

export default Suffix;
