import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './Pay.css'
import { Link } from 'react-router-dom'

class Pay extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post(`/api/payment`, { token, amount: this.props.grandTotal }).then(response => {
      console.log({ response })
      alert('This is a demo site.  No items were actually purchased.')
      document.getElementById("clickMe").click()

    });
  }

 
  render() {
    let emptyArr = []
    return (

      <div>
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
        <div>

          <Link to='/'><button id="clickMe" onClick={() => this.props.emptyCart(emptyArr)}></button></Link>
        </div>
      </div>



    );
  }
}

export default Pay;