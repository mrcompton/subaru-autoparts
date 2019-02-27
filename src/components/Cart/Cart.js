import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import { removeFromCart } from '../../ducks/reducer'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'

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
        // this.props.cartItems.quantity = 1
        let mappedParts = this.props.cartItems.map((part, index) => {
            return (      
                    <CartItem key={part.id} part={part} index={index} handleDeleteItem={this.handleDeleteItem}/>

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
                        ? 
                        <div>
                            <Link to='/checkout'><button className='btn-checkout'>Purchase Items</button></Link>
                            {mappedParts}
                        </div>
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