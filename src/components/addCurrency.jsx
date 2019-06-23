import React, { Component } from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';

class AddCurrency extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAddCurrency: false,
      selCurrencyVal: undefined,
    }
  }
  showHideAddCurrencyFn = () => {
    this.setState({
      showAddCurrency: !this.state.showAddCurrency,
    });
  }

  addCurrencyFn = () => {
    const { selCurrencyVal } = this.state;
    if (selCurrencyVal !== undefined && selCurrencyVal !== 'Select Currency') {
      this.showHideAddCurrencyFn();
      this.props.addSelCurrency(selCurrencyVal);
    } else {
      toast.warn('Please select any currency');
    }
    this.setState({
      selCurrencyVal: undefined,
    });
  }

  render(){
    const { currencyOptions } = this.props;
    const { showAddCurrency } = this.state;
    return (
      <div className="p-2">
        {!showAddCurrency ? <button type="button" onClick={this.showHideAddCurrencyFn} className="btn btn-primary btn-sm btn-block">(+) Add More Currencies</button> :
        <div className="row">        
          <div className="col-9">
            <select className="form-control" onChange={e => {
              this.setState({
                selCurrencyVal: e.target.value,
              });
            }}>
              <option>Select Currency</option>
              {currencyOptions && !_.isEmpty(currencyOptions) && _.map(currencyOptions, (o,key) => (
                <option key={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="col-3 pl-0">
            <button type="button" onClick={this.addCurrencyFn} className="btn btn-primary btn-block">Submit</button>
          </div>
        </div> }
      </div>
    )
  }
}

export default AddCurrency;