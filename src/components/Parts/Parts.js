import React, { Component } from 'react'
import axios from 'axios'
import './Parts.css'
import { connect } from 'react-redux'
import { addToCart } from '../../ducks/reducer'
import AdminModal from '../AdminModal/AdminModal'
import EachPart from './EachPart'

class Parts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parts: [],
            part_num: '',
            category: '',
            name: '',
            description: '',
            price: 0,
            picture: '',
            editToggle: false,
            modalShow: false
        }
    }

    componentDidMount() {
        const { year, model, trim } = this.props
        axios.post('/api/parts', { year, model, trim })
            .then(response => {
                this.setState({ parts: response.data })
                // console.log(response.data)
            })

    }

    handleGetSelectedParts() {
        const { year, model, trim } = this.props
        axios.post('/api/parts', { year, model, trim })
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    handleGetAllParts = () => {
        axios.get('/api/allparts')
            .then(response => {
                this.setState({ parts: response.data })
                console.log(response.data)
            })
    }
    // toggleEdit = () => {
    //     this.setState({ editToggle: !this.state.editToggle })
    //     console.log(this.state.editToggle)
    // }

    // handleChange = (prop, val) => {
    //     this.setState({
    //         [prop]: val
    //     })
    // }

    // handleEditPart = (partObj) => {
    //     this.toggleEdit()
    //     console.log({ partObj })
    //     const { part_num, category, name, description, price, picture, id } = partObj
    //     axios.put(`/api/part/${id}`, { part_num, category, name, description, price, picture })
    //         .then(response => {
    //             this.handleGetAllParts()
    //             console.log(response)
    //         })
    //         .catch(err => { console.log(err) })
    // }

    // handleDeletePart = (id) => {
    //     axios.delete(`/api/part/${id}`)
    //         .then(res => {
    //             console.log(res)
    //             this.handleGetAllParts()
    //         })
    //         .catch(err => { console.log(err) })

    // }


    render() {
        let modalClose = () => this.setState({ modalShow: false })

        // console.log(this.props)

        // let {part_num, category, name, description, price, picture} = this.state
        // let statePartsObj = {part_num, category, name, description, price, picture}

        let mappedParts = this.state.parts.map((part, index) => {
            return (
                <EachPart
                    key={part.id}
                    part={part}
                    handleGetParts= {this.handleGetAllParts}
                />
                
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
                        <AdminModal show={this.state.modalShow} onHide={modalClose} getPartsFn={this.handleGetAllParts} />
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