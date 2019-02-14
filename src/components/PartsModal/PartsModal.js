import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './PartsModal.css'
import Tabs from './ModalTabs'


class PartsModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            year: 2017,
            model: 'Outback',
            trim: '2.5i Limited',
        }

    }
    handleUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Choose Your Vehicle
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Entering your vehicle information will help us find the right parts for your Subaru.</p>
                    <div className='selected-container'>
                        <span className='selected'>Selected Year: {this.state.year}</span>
                        <span className='selected'>Selected Model: {this.state.model}</span>
                        <span className='selected'>Selected Trim: {this.state.trim}</span>
                    </div>
                    <Tabs year={this.state.year} model={this.state.model} trim={this.state.trim} handleUpdate = {this.handleUpdate} />
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn-close' onClick={this.props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default PartsModal