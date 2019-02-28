import React, { Component } from 'react';
import './Pay.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Pay extends Component {
  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3535/api/payment', { token, amount: 100 } ).then(response => {
      alert('we are in business')
    });
  }

  render() {
    return (
      <div className="Pay">
        {/* <div className="Pay-header">

          <h5>Please review the information above, then click below to complete transaction</h5>
        </div> */}
  
        <StripeCheckout
          token={this.onToken}
          stripeKey={`pk_test_AcQpaVk75G9MRYA86NVrxpG5`}
          amount={this.props.grandTotal*100}
        />

      </div>
    );
  }
}

export default Pay;