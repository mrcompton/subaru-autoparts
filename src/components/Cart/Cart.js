import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import { removeFromCart } from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // cartItems: []
        }
    }

    // componentDidMount(){
    //     this.setState({
    //         cartItems: this.props.cartItems
    //     })
    //     console.log("cart", this.state.cartItems)
    // }

    handleDeleteItem = (index) => {
        this.props.removeFromCart(index)
        this.setState({cartItems: this.props.cartItems})
        
    }
    render() {
        const { email } = this.props
        console.log(this.props.cartItems)
        let mappedParts = this.props.cartItems.map((part, index) => {
        console.log(part)
            return (
                <div key={part.id} className='product-container'>
                    <div className='product-pic'>
                        <img className='product-img' src={part.picture} alt='' />
                    </div>
                    <ul className='product-desc'>
                        <li>- Product: {part.name}</li>
                        <li>- Price: ${part.price}</li>
                        <li>- Product Description: {part.description}</li>
                        <li>- Part Number: {part.part_num}</li>
                        <li>- Quantity: <input className='quantity' /></li>
                        <div className='buttons'>
                            <Link to='/checkout'><button className='btn-cart'>Purchase</button></Link>
                            <button className='btn-cart' onClick={() => this.handleDeleteItem(index)}>Remove </button>
                        </div>
                    </ul>
                </div>
    
            )
        })






        return (
            <div className='cart-parent'>
                <h1>My Cart</h1>
                {email
                ?
                <h4>Account: {email}</h4>
                :
                null
                }
                <div >
                    <div className='cart-items'>
                        {mappedParts[0]
                        ? mappedParts
                        : <div>Your cart is empty</div>
                        }
                    </div>
                </div>
            </div>

        )
    }
}

const mapToProps = (reduxState) => {
    const { email, cartItems } = reduxState
    return {
        email,
        cartItems
    }
}
export default connect(mapToProps, { removeFromCart })(Cart)