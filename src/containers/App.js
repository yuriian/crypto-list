import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import CurrencyList from './../components/currencyList/CurrencyList';

import { requestCryptoCurrencies } from './../actions';

const mapStateToProps = state => {
  return {
    cryptoCurrencies: state.cryptoCurrencies,
    isPending: state.isPending,
    error: state.error,
    baseImgUrl: state.baseImgUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestCryptoCurrencies: () => dispatch(requestCryptoCurrencies())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestCryptoCurrencies();
  }

  render() {
    const { cryptoCurrencies, isPending, baseImgUrl } = this.props;

    return isPending ? (
      <h1 className="loading">Loading...</h1>
    ) : (
      <div className="main">
        <header className="header">
          <h1 className="header__title">
            Cryptocurrencies List
          </h1>
        </header>
        <CurrencyList
          cryptoCurrencies={cryptoCurrencies}
          baseImgUrl={baseImgUrl}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
