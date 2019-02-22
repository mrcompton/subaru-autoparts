import React, { Component } from 'react'
import axios from 'axios'
import './Parts.css'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/reducer'

class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
            cartItems: []
        }
    }

    componentDidMount() {
        const {year,model,trim} = this.props
        axios.post('/api/parts',{year,model,trim})
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }

    handleGetSelectedParts(){
        const {year,model,trim} = this.props
        axios.post('/api/parts',{year,model,trim})
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }

    handleGetAllParts(){
        axios.get('/api/allparts')
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }

  
    render() {
        console.log(this.props)
        let mappedParts = this.state.parts.map(part => {
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
                        <button className='btn-cart' onClick={() => this.props.addToCart(part)}>Add To Cart</button>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                <button className ='btn-switch' onClick={() => this.handleGetSelectedParts()}>View vehicle-specific parts</button>
                <button className ='btn-switch' onClick={() => this.handleGetAllParts()}>View all Subaru parts</button>
                <div className='all-products'>
                    {mappedParts}
                </div>
            </div>

        )
    }
}

const mapToProps = (reduxState) => {
    const {year, model, trim, cartItems} = reduxState
    return{
        year,model,trim,cartItems
    }
}
export default connect(mapToProps,{addToCart})(Parts)