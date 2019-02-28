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
            email: '',
            firstName: '',
            lastName: '',
            address1: '',
            address2:'',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleChange = (prop,val) => {
        this.setState({
            [prop]: val
        })
        console.log("state", this.state)
    }

    render() {
        console.log("state2", this.state)
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
                                <Form.Control placeholder="Email@email.com" onChange={(e)=>this.handleChange('email',e.target.value)} value={this.state.email}/>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name" onChange={(e)=>this.handleChange('firstName',e.target.value)} value={this.state.firstName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name" onChange={(e)=>this.handleChange('lastName',e.target.value)} value={this.state.lastName}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" onChange={(e)=>this.handleChange('address1',e.target.value)} value={this.state.address1}/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" onChange={(e)=>this.handleChange('address2',e.target.value)} value={this.state.address2}/>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={(e)=>this.handleChange('city',e.target.value)} value={this.state.city}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control onChange={(e)=>this.handleChange('state',e.target.value)} value={this.state.state}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={(e)=>this.handleChange('zip',e.target.value)} value={this.state.zip}/>
                            </Form.Group>
                        </Form.Row>

                        {/* <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                        <button className='btn-purchase' label='Submit'>
                            Save shipping information
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