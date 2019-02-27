import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Checkout.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class Checkout extends Component {
    render() {
        let grandTotal = 0

        let mappedCartItems = this.props.cartItems.map(item => {
            grandTotal += item.total
            return (

                <div >
                    <div className='name-price'>
                        <div>{item.name} ({item.quantity})</div>
                        <div>${parseFloat(item.total).toFixed(2)}</div>
                    </div>
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
                                {/* <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>AL</option>
                                    <option>AK</option>
                                    <option>AZ</option>
                                    <option>AR</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DE</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>HI</option>
                                    <option>ID</option>
                                    <option>IL</option>
                                    <option>IN</option>
                                    <option>IA</option>
                                    <option>KS</option>
                                    <option>KY</option>
                                    <option>LA</option>
                                    <option>ME</option>
                                    <option>MD</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                    <option>MA</option>
                                </Form.Control> */}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        {/* <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <button className='btn-purchase'>
                            Submit and pay
                        </button>
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