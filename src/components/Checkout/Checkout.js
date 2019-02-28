import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Checkout.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Pay from './Pay'


class Checkout extends Component {
    constructor(props){
        super(props)

        this.state={
            
        }
    }
    render() {
        let grandTotal = 0

        let mappedCartItems = this.props.cartItems.map(item => {
            grandTotal += item.total
            return (
                <div key={item.id} className='name-price'>
                    <div>{item.name} ({item.quantity})</div>
                    <div>${parseFloat(item.total).toFixed(2)}</div>
                </div>

            )
        })
        return (
            <div className='checkout'>
                <div className='pay-form'>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control placeholder="Email@email.com" />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        {/* <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <button className='btn-purchase' label='Submit'>
                            Submit shipping information
                        </button>
                        <Pay grandTotal={grandTotal} />
                    </Form>


                </div>

                <div className='summary-container'>
                    <h5 className='order-summary'>Order Summary</h5>
                    <div className='sum-cont'>{mappedCartItems}</div>
                    <div className='total'>
                        <div>TOTAL: </div>
                        <div>${grandTotal}</div>
                    </div>

                </div>



            </div>
        )
    }
}

const mapToProps = (reduxState) => {
    const { email, cartItems } = reduxState
    return {
        email,
        cartItems
    }
}
export default connect(mapToProps)(Checkout)