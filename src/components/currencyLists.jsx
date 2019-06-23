import React from 'react';
import _ from 'lodash';
import CurrencyListBox from './currencyListBox';

const CurrencyLists = (props) => {
  const { list, dafaultVal, removeSelCurrency } = props;
  return (
    <div className="p-2">
      {_.map(list, (o, key) => (
        <CurrencyListBox key={key} currency={key} value={o} dafaultVal={dafaultVal} removeAction={removeSelCurrency} />
      ))}
      {_.isEmpty(list) && <p className="m-0 p-2 text-center">No currencies added.</p>}
    </div>
  )
}

export default CurrencyLists;