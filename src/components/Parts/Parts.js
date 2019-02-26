import React, { Component } from 'react'
import axios from 'axios'
import './Parts.css'
import { connect } from 'react-redux'
import AdminModal from '../AdminModal/AdminModal'
import { addToCart } from '../../ducks/reducer'

class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
            editToggle: false,
            modalShow: false
        }
    }

    componentDidMount() {
        const { year, model, trim } = this.props
        axios.post('/api/parts', { year, model, trim })
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }

    handleGetSelectedParts() {
        const { year, model, trim } = this.props
        axios.post('/api/parts', { year, model, trim })
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }

    handleGetAllParts() {
        axios.get('/api/allparts')
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }
    toggleEdit =() => {
        this.setState({editToggle: !this.state.editToggle})
        console.log(this.state.editToggle)
    }

    handleChange = (prop, val) => {
        this.setState({
            parts: [{[prop]: val}]
        })
    }

    handleEditPart = (partObj) => {
        this.toggleEdit()
        console.log({partObj})
        const {part_num, category, name, description, price, picture, id} = partObj
        axios.put(`/api/part/${id}`, {part_num, category, name, description, price, picture} )
        .then(response => {
            this.setState({ parts: [...response.data]})
            console.log(response.data)
        })

    }

    handleDeletePart = (id) => {
        axios.delete(`/api/part/${id}`)
        .then(res =>{
            console.log(res)
        })
    }


    render() {
        console.log(this.props)
        let modalClose = () => this.setState({ modalShow: false })
        let mappedParts = this.state.parts.map((part, index) => {
            return (
                <div key={part.id} className='product-container'>
                    <div className='product-pic'>
                        <img className='product-img' src={part.picture} alt='' />
                    </div>
                    <ul className='product-desc'>
                        {this.state.editToggle === false
                        ?
                        <div>
                            <li>- Product: {part.name}</li>
                            <li>- Price: ${part.price}</li>
                            <li>- Product Description: {part.description}</li>
                            <li>- Part Number: {part.part_num}</li>
                        </div>
                        :   
                        <div>
                            <li>- Picture URL: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('picture', e.target.value)}value={part.picture}/>
                            <li>- Product: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('name', e.target.value)} value={part.name}/>
                            <li>- Price: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('price', e.target.value)}value={part.price}/>
                            <li>- Product Description: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('part.description', e.target.value)}value={part.description}/>
                            <li>- Part Number: </li>
                            <input className='input-edit' onChange={(e) => this.handleChange('part_num', e.target.value)}value={part.part_num}/>  
                        </div>
                        }
                        {/* <button className='btn-cart' onClick={() => this.handleAddtoCart(part)}>Add To Cart</button> */}
                        {
                            this.props.email === 'admin@admin.com'
                                ?
                                <div>
                                    <button className='btn edit-parts' onClick={() => this.handleEditPart(part)}>Edit Part</button>
                                    <button className='btn edit-parts' onClick={()=>this.handleDeletePart(part.id)}>Remove Part</button>
                                    <button className='btn edit-parts attach'>Attach to Vehicle</button>
                                    <button className='btn-cart' onClick={() => this.props.addToCart(part)}>Add To Cart</button>
                                </div>
                                : <button className='btn-cart' onClick={() => this.props.addToCart(part)}>Add To Cart</button>
                        }
                    </ul>
                </div>
            )
        })
        return (
            <div>
                {this.props.email === 'admin@admin.com'
                    ?
                    <div>
                        <button className='add-parts' onClick={() => this.setState({ modalShow: true })}>Add Part</button>
                        <button className='btn-switch' onClick={() => this.handleGetSelectedParts()}>View vehicle-specific parts</button>
                        <button className='btn-switch' onClick={() => this.handleGetAllParts()}>View all Subaru parts</button>
                        <AdminModal show={this.state.modalShow} onHide={modalClose}/>
                    </div>
                    : <div>
                        <button className='btn-switch' onClick={() => this.handleGetSelectedParts()}>View vehicle-specific parts</button>
                        <button className='btn-switch' onClick={() => this.handleGetAllParts()}>View all Subaru parts</button>

                    </div>
                }


                <div className='all-products'>
                    {mappedParts}
                </div>
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
export default connect(mapToProps, { addToCart })(Parts)