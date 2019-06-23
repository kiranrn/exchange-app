import axios from 'axios';
const APIUrl = 'https://api.exchangeratesapi.io/latest';
const baseCurreny = 'USD';

export function fetchCurrencyRates() {
  const URL = `${APIUrl}?base=${baseCurreny}`;
  return axios.get(URL)
  .then(response => {
    return response.data;
  });
}