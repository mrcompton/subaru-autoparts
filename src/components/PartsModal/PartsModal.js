import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './PartsModal.css'
import Tabs from './ModalTabs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PartsModal extends React.Component {
    constructor(props){
        super(props)

        this.state ={}
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
                        Please select the year, model, and trim of your vehicle
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Tabs />

                </Modal.Body>
                <Modal.Footer>
                    <button className='btn-close' onClick={this.props.onHide}>Close</button>
                    {this.props.trim ?
                      <Link to='/parts'><button className='btn-save' onClick={this.props.onHide}>View Parts</button></Link> 
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