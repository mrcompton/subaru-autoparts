import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, updateQuant } from '../../ducks/reducer'
import './CartItem.css'

class CartItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refresh: null
        }
    }

    handleChangeQuantity = (id, val) => {
        this.props.updateQuant(id, val)
        this.setState({ refresh: 1 })

    }

    render() {
        console.log("props part", this.props.part)
        const { name, price, part_num, quantity, id } = this.props.part

        let total = price * quantity

        return (

            <tr>
                <td className='producto'>{name}</td>
                <td>{part_num}</td>
                <td>${parseFloat(price).toFixed(2)}</td>
                <td><input className='in-quantity' onChange={(e) => this.handleChangeQuantity(id, e.target.value)} value={quantity} /></td>
                <td>${parseFloat(total).toFixed(2)}</td>
                <td><button className='x-btn' onClick={() => this.props.handleDeleteItem(this.props.index)}><i className="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>



        )
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim, email } = reduxState
    return {
        year, model, trim, email, CartItem
    }
}
export default connect(mapToProps, { addToCart, updateQuant })(CartItem)