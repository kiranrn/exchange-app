import React, { Component } from 'react';
import _ from 'lodash';
import AppHeader from './header';
import CurrencyLists from './currencyLists';
import AddCurrency from './addCurrency';
import * as appAction from '../actions/action';
import { createDropdownOptions } from '../utils/appUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyRates: undefined,
      addedCurrencies: {},
      dafaultVal: 1,
      currencyOptions: {},
    };
  }

  componentDidMount() {
    appAction.fetchCurrencyRates().then(response => {
      this.setState({
        currencyRates: response.rates,
      }, () => {
        this.setState({
          currencyOptions: createDropdownOptions(response.rates),
        })
      });
    });
  }

  setDefaultVal = val => {
    this.setState({
      dafaultVal: val,
    });
  }

  addSelCurrencyFn = val => {
    const { currencyOptions, addedCurrencies } = this.state;
    const checkItemAvailable = _.find(addedCurrencies, (o, key) => val === key);
    if (checkItemAvailable === undefined) {
      const findItem = _.find(currencyOptions, (o, key) => val === key);
      this.setState({
        addedCurrencies: {...addedCurrencies,
          [val]: findItem,
        }
      });
    } else {
      toast.error("Currency already exists");
    }    
  }

  removeSelCurrencyFn = val => {
    const { addedCurrencies } = this.state;
    const tempAddedCurrencies = {};
    _.forEach(addedCurrencies, (o, key) => {
      if (key !== val) {
        tempAddedCurrencies[key] = o;
      }
    });
    this.setState({
      addedCurrencies: tempAddedCurrencies,
    });
  }
 
  render() {
    const { addedCurrencies, dafaultVal, currencyOptions } = this.state;
    return (
      <div className="col-md-12 col-lg-6 pl-0 pr-0 border" style={{ minHeight: '100vh'}}>
        <AppHeader setValFn={this.setDefaultVal} />
        <CurrencyLists list={addedCurrencies} dafaultVal={dafaultVal} removeSelCurrency={this.removeSelCurrencyFn} />
        <AddCurrency currencyOptions={currencyOptions} addSelCurrency={this.addSelCurrencyFn} />
        <ToastContainer />
      </div>
    )
  }
}

export default MainContent;