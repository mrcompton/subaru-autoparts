import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './PartsModal.css'
import Tabs from './ModalTabs'
import { connect } from 'react-redux'

class PartsModal extends React.Component {

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
                        Please select the year, model, and trim of your vehicle
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Tabs />

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn-close' onClick={this.props.onHide}>Close</button>
                    {this.props.trim ?
                        <button className='btn-save'>See Parts</button>
                        : null
                    }

                </Modal.Footer>
            </Modal>
        );
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim } = reduxState

    return {year, model, trim}
        
}
export default connect(mapToProps)(PartsModal)