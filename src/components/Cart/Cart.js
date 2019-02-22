import React, { Component } from 'react'
import {connect} from 'react-redux'


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartItems: this.props.cartItems
        }
    }

    render() {
        const {year,model,trim,email} = this.props
        let mappedParts = this.state.cartItems.map(part => {
            return (
                <div className='product-container'>
                    <div className='product-pic'>
                        <img className='product-img' src={part.picture} alt='' />
                    </div>
                    <ul className='product-desc'>
                        <li>- Product: {part.name}</li>
                        <li>- Price: {part.price}</li>
                        <li>- Product Description: {part.description}</li>
                        <li>- Part Number: {part.part_num}</li>
                        Quantity: <input/>
                        <button className='btn-cart' onClick={() => this.props.addToCart(part)}>Purchase</button>
                        <button className='btn-cart'>Remove </button>
                    </ul>
                </div>
            )
        })
        return (
            <div className='cart-parent'>
                <h1>My Cart</h1>
                <h4>{email}</h4>
                <h4>{year} {model} {trim}</h4>
                <div>
                    <h5>Cart Items</h5>
                    <div>{mappedParts}</div>
                </div>
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
    const {year, model, trim, email, cartItems} = reduxState
    return{
      year,
      model,
      trim,
      email,
      cartItems
    }
  }
  export default connect(mapToProps)(Cart)