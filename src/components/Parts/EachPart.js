import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, updateQuant} from '../../ducks/reducer'
import './EachPart.css'
import axios from 'axios'

class EachPart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            part_num: '',
            category: '',
            name: '',
            description: '',
            price: 0,
            picture: '',
            quanity: 0,
            editToggle: false
        }
    }
    // componentDidMount(){
    //     console.log(this.props.part)
    // }
    toggleEdit = () => {
        this.setState({ editToggle: !this.state.editToggle })
        this.setState({
            part_num: this.props.part.part_num,
            name: this.props.part.name,
            description: this.props.part.description,
            price: this.props.part.price,
            picture: this.props.part.picture

        })
    }


    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }
    handleAddToCart = (part) => {
        this.props.addToCart(part)
        this.props.updateQuant(part.id,1)
    }
    handleSaveChanges = (id, partObj) => {
        this.toggleEdit()
        console.log({ partObj })
        axios.put(`/api/part/${id}`, partObj)
            .then(response => {
                this.props.handleGetParts()
                console.log(response)
            })
            .catch(err => { console.log(err) })
    }

    handleDeletePart = (id) => {
        axios.delete(`/api/part/${id}`)
            .then(res => {
                console.log(res)
                this.props.handleGetParts()
            })
            .catch(err => { console.log(err) })

    }
    render() {
        let {part_num, name, description, price, picture} = this.state
        let statePartsObj = {part_num, name, description, price, picture}
        return (
            <div className='product-container'>
                <div className='product-pic'>
                    <img className='product-img' src={this.props.part.picture} alt='' />
                </div>
                <ul className='product-desc'>
                    {this.state.editToggle === false
                        ?
                        <div>
                            <li>- Product: {this.props.part.name}</li>
                            <li>- Price: ${this.props.part.price}</li>
                            <li>- Product Description: {this.props.part.description}</li>
                            <li>- Part Number: {this.props.part.part_num}</li>
                        </div>
                        :
                        <div>
                            <li>
                                <button className='btn-save' onClick={() => this.handleSaveChanges(this.props.part.id,statePartsObj)}>Save Changes</button>
                                <button className='btn-save' onClick={() => this.toggleEdit()}>Cancel</button>
                            </li>
                            <li>- Picture URL: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('picture', e.target.value)} value={this.state.picture} />
                            <li>- Product: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('name', e.target.value)} value={this.state.name} />
                            <li>- Price: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('price', e.target.value)} value={this.state.price} />
                            <li>- Product Description: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('description', e.target.value)} value={this.state.description} />
                            <li>- Part Number: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('part_num', e.target.value)} value={this.state.part_num} />

                        </div>
                    }

                    {
                        this.props.email === 'admin@admin.com'
                            ?
                            <div>
                                <button className='btn edit-parts' onClick={() => this.toggleEdit()}>Edit Part</button>
                                <button className='btn edit-parts' onClick={() => this.handleDeletePart(this.props.part.id)}>Remove Part</button>
                                {/* <button className='btn edit-parts attach'>Attach to Vehicle</button> */}
                                <button className='btn-cart-inner' onClick={() => this.handleAddToCart(this.props.part)}>Add To Cart</button>
                            </div>
                            
                            : <button className='btn-cart' onClick={() => this.handleAddToCart(this.props.part)}>Add To Cart</button>
                    }
                </ul>
            </div>
        )
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim, email, cartItems } = reduxState
    return {
        year, model, trim, email, cartItems
    }
}
export default connect(mapToProps, { addToCart,updateQuant})(EachPart)