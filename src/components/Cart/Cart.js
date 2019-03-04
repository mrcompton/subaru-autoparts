import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Cart.css'
import { removeFromCart } from '../../ducks/reducer'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reset: false
        }
    }
    componentDidMount() {
        this.setState({
            reset: !this.state.reset
        })
    }


    handleDeleteItem = (index) => {
        this.props.removeFromCart(index)
        this.setState({ cartItems: this.props.cartItems })

    }
    render() {
        const { email } = this.props
        let mappedParts


        mappedParts = this.props.cartItems.map((part, index) => {
            return (
                <CartItem key={part.id} part={part} index={index} handleDeleteItem={this.handleDeleteItem} />
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

                    {
                        this.props.cartItems[0]

                            ? <div className='cart-items'>
                                <Link to='/checkout'><button className='btn-checkout'>Purchase Items</button></Link>
                                <table className='test-table'>
                                    <tbody>
                                        <tr>
                                            <th className='producto'>Product</th>
                                            <th className='big-only'>Part Number</th>
                                            <th className='big-only'>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                        {mappedParts}
                                    </tbody>
                                </table>

                            </div>
                            : <div>Your cart is empty</div>

                    }

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