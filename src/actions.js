import {
  REQUEST_CRYPTO_CURRENCIES_PENDING,
  REQUEST_CRYPTO_CURRENCIES_SUCCESS,
  REQUEST_CRYPTO_CURRENCIES_FAILED
} from './constants';

import { apiCall } from './api/api';

// const cryptoCurrenciesUrl = 'https://www.cryptocompare.com/api/data/coinlist/';
const cryptoCurrenciesUrl =
  'https://min-api.cryptocompare.com/data/all/coinlist';

export const requestCryptoCurrencies = () => dispatch => {
  dispatch({ type: REQUEST_CRYPTO_CURRENCIES_PENDING });

  apiCall(cryptoCurrenciesUrl)
    .then(data =>
      dispatch({ type: REQUEST_CRYPTO_CURRENCIES_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: REQUEST_CRYPTO_CURRENCIES_FAILED, payload: error })
    );
};
