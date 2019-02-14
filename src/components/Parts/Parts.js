import React, { Component } from 'react'
import axios from 'axios'
import './Parts.css'
import {connect} from 'react-redux'

class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
            cart: []
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

    render() {
        let mappedParts = this.state.parts.map(part => {
            return (
                <div className='product-container'>
                    <div className='product-pic'>
                        <img src={part.picture} alt='' />
                    </div>
                    <ul className='product-desc'>
                        <li>Product: {part.name}</li>
                        <li>Price: {part.price}</li>
                        <li>Product Description: {part.description}</li>
                        <li>Part Number: {part.part_num}</li>
                        <button className='btn-cart'>Add To Cart</button>
                    </ul>
                </div>
            )
        })
        return (
            <div>
                <h1>Browse All Auto Parts</h1>
                <div className='all-products'>
                    {mappedParts}
                </div>
            </div>

        )
    }
}

const mapToProps = (reduxState) => {
    const {year, model, trim } = reduxState
    return{
        year,model,trim
    }
}
export default connect(mapToProps)(Parts)