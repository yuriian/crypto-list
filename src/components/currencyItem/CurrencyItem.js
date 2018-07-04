import React from 'react';
import './CurrencyItem.css';

const CurrencyItem = ({ serialNum, imgUrl, name }) => {
  return (
    <div className="currency">
      <span className="currency__seq-number">{serialNum}</span>
      <img className="currency__img" src={imgUrl} alt="" />
      <span className="currency__name"> {name} </span>{' '}
    </div>
  );
};

export default CurrencyItem;
