import React from 'react';
import CurrencyItem from './../currencyItem/CurrencyItem';
import './CurrencyList.css';

const CurrencyList = ({ cryptoCurrencies, baseImgUrl }) => {
  return (
    <div className="currencies">
      {cryptoCurrencies.map((currency, index) => {
        return (
          <CurrencyItem
            key={index}
            serialNum={index + 1}
            imgUrl={baseImgUrl + currency.ImageUrl}
            name={currency.FullName}
          />
        );
      })}{' '}
    </div>
  );
};
export default CurrencyList;
