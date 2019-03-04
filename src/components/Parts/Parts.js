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
            modalShow: false,
            reset: ''
        }
    }

    componentDidMount() {
        this.setState({
            reset: 'yes'
        })
        const { year, model, trim } = this.props
        axios.post('/api/parts', { year, model, trim })
            .then(response => {
                this.setState({ parts: response.data })
                console.log("get items", response.data)
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
    


    render() {
        let modalClose = () => this.setState({ modalShow: false })


        let mappedParts = this.state.parts.map((part, index) => {
            return (
                <EachPart
                    key={part.id}
                    index = {index}
                    part={part}
                    handleGetParts= {this.handleGetAllParts}
                />
                
            )
        })
        return (
            <div className='part-container'>
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