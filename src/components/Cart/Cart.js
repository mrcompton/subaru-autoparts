import React, { Component } from 'react'
import {connect} from 'react-redux'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartItems: {}
        }
    }

    render() {
        const {year,model,trim} = this.props
        return (
            <div className='cart-parent'>
                <h1>My Cart</h1>
                <h4>{year} {model} {trim}</h4>
                <div className='cart-container'>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>

        )
    }
}

const mapToProps = (reduxState) => {
    const {year, model, trim} = reduxState
    return{
      year,
      model,
      trim
    }
  }
  export default connect(mapToProps)(Cart)