import React from 'react';
import { currencyNames } from '../constant';

const CurrencyListBox = (props) => {
  const { currency, value, dafaultVal, removeAction } = props;
  return (
    <div className="row m-0 mb-1 border">
      <div className="col-10 p-2">
        <div className="row">
          <div className="col-6">
            {currency}
          </div>
          <div className="col-6 text-right">
            {(value * dafaultVal)}
          </div>
          <div className="col-12">
            <p className="font-italic mb-1">{props.currency} - {currencyNames[currency]}</p>
            <p className="font-italic mb-0">{`1 USD = ${currency} ${value}`}</p>
          </div>
        </div>
      </div>
      <div className="col-2 text-center border-left d-flex align-items-center">
        <button type="button" title="Remove" onClick={() => removeAction(currency)} className="btn btn-outline-dark btn-sm w-100">(-)</button>
      </div>
    </div>
  )
}

export default CurrencyListBox;