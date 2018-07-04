import {
  REQUEST_CRYPTO_CURRENCIES_PENDING,
  REQUEST_CRYPTO_CURRENCIES_SUCCESS,
  REQUEST_CRYPTO_CURRENCIES_FAILED
} from './constants';

const initialState = {
  isPending: false,
  cryptoCurrencies: [],
  baseImgUrl: ''
};

export const requestCryptoCurrencies = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_CRYPTO_CURRENCIES_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_CRYPTO_CURRENCIES_SUCCESS:
      const currenciesObj = action.payload.Data;
      const currencyKeys = Object.keys(currenciesObj);

      // const cryptoCurrenciesArr = currencyKeys.map(key => currenciesObj[key]);
      const cryptoCurrenciesArr = [];

      for (let i = 0; i < 20; i++) {
        cryptoCurrenciesArr.push(currenciesObj[currencyKeys[i]]);
      }

      return Object.assign({}, state, {
        cryptoCurrencies: cryptoCurrenciesArr,
        isPending: false,
        baseImgUrl: action.payload.BaseImageUrl
      });

    case REQUEST_CRYPTO_CURRENCIES_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });

    default:
      return state;
  }
};
