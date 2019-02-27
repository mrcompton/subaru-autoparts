import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart } from '../../ducks/reducer'
import './CartItem.css'

class CartItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }
    }

    handleChangeQuantity = (val) => {
        this.setState({
            quantity: val
        })

    }

    render() {
        console.log("props part", this.props.part)
        const { name, price, description, part_num, quantity } = this.props.part

        let total = price * this.state.quantity

        return (
            <div className='cart-container'>

                <table className='test-table'>
                    <tbody>
                        <tr>
                            {/* <th></th> */}
                            <th className='producto'>Product</th>
                            <th>Part Number</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        <tr>
                            {/* <td><img className='cart-img' src={picture} alt='' /></td> */}
                            <td className='producto'>{name}</td>
                            <td>{part_num}</td>
                            <td>${price}</td>
                            <td><input className='in-quantity' onChange={(e) => this.handleChangeQuantity(e.target.value)} value={this.state.quantity} /></td>
                            <td>${total}</td>
                            <td><button onClick={() => this.props.handleDeleteItem(this.props.index)}>X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim, email } = reduxState
    return {
        year, model, trim, email
    }
}
export default connect(mapToProps, { addToCart })(CartItem)