import _ from 'lodash';
import { baseCurrency } from '../constant';

export const createDropdownOptions = data => {
  let filteredData = {};
  _.forEach(data, (o,key) => {
    if (key !== baseCurrency) {
      filteredData[key] = o;
    }
  })
  return filteredData;
}