import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './AdminModal.css'
import { connect } from 'react-redux'
import axios from 'axios'

class AdminModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            part_num: '',
            category: '',
            name: '',
            description: '',
            price: 0,
            picture: '',
            dadJoke: '',
            chewName: ''
        }
    }
    componentDidMount() {
        axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'text/plain'
            }
        })
            .then((response) => {
                this.setState({ dadJoke: response.data })
            })
    }

    handleChange = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    handleAddPart = () => {
        const { part_num, category, name, description, price, picture } = this.state
        axios.post('/api/part', { part_num, category, name, description, price, picture })
            .then(response => {
                console.log(response)
                this.props.getPartsFn()
                this.props.onHide()
            })
    }
    render() {
        // console.log(this.state)
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter the part information below
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className='grid'>
                            <div className='grid-title'>Part Number:</div>
                            <input onChange={(e) => this.handleChange('part_num', e.target.value)} value={this.state.part_num} />
                            <div className='grid-title'>Category:</div>
                            <input onChange={(e) => this.handleChange('category', e.target.value)} value={this.state.category} />
                            <div className='grid-title'>Name:</div>
                            <input onChange={(e) => this.handleChange('name', e.target.value)} value={this.state.name} />
                            <div className='grid-title'>Description:</div>
                            <input onChange={(e) => this.handleChange('description', e.target.value)} value={this.state.description} />
                            <div className='grid-title'>Price:</div>
                            <input onChange={(e) => this.handleChange('price', e.target.value)} value={this.state.price} type='number' />
                            <div className='grid-title'>Picture:</div>
                            <input onChange={(e) => this.handleChange('picture', e.target.value)} value={this.state.picture} />
                        </div>
                        <p id="joke">Joke of the day - {this.state.dadJoke}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn-close' onClick={this.props.onHide}>Cancel</button>
                    <button className='btn-save' onClick={this.handleAddPart}>Add Part</button>

                </Modal.Footer>
            </Modal>
        );
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim, email } = reduxState

    return { year, model, trim, email }

}
export default connect(mapToProps)(AdminModal)