import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Pay extends Component {

  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post(`/api/payment`, { token, amount: this.props.grandTotal}).then(response => {
      console.log({ response })
      alert('we are in business')
    });
  }

  sayHi = ()=> {
    console.log('Hi there!')
  }
  render() {
    return (


      <StripeCheckout
        label="Pay with credit card"
        style={Object.assign({}, {
          ...{
            background: 'none',
            boxShadow: 'none',
            outline: 'none'
          }
        })}
        token={this.onToken}
        stripeKey={'pk_test_AcQpaVk75G9MRYA86NVrxpG5'}
        amount={this.props.grandTotal * 100}
      />


    );
  }
}

export default Pay;