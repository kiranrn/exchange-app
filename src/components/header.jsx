import React, { Component } from 'react';
import { currencyNames, defaultVal, baseCurrency } from '../constant';

class AppHeader extends Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.state = {
    };
  }

  inputChangeFn = el => {
    const { setValFn } = this.props;
    const selVal = el.target.value;
    const newVal = (/(\d{0,19})[^.]*((?:\.\d{0,4})?)/g).exec(selVal.replace(/[^\d.]/g, ''));
    this.textInput.current.value = newVal[1]+ newVal[2];
    setValFn(newVal[1]+ newVal[2]);
  }

  render(){
    return (
      <div className="p-2 border-bottom bg-light text-dark">
        <p className="font-italic mb-2">{baseCurrency} - {currencyNames['USD']}</p>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-4 col-form-label font-weight-bold">{baseCurrency}</label>
          <div className="col-8">
            <input type="text" ref={this.textInput} onChange={e => this.inputChangeFn(e)} className="form-control" id="inputPassword" defaultValue={defaultVal} />
          </div>
        </div>
      </div>
    )
  }
}
export default AppHeader;