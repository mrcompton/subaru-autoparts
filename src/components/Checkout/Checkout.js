import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Checkout.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Pay from './Pay'
import axios from 'axios'
import {emptyCart} from './../../ducks/reducer'


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
            zip: 0,
            grandTotal: 0,
            completed: '',
            orderNum: 0
        }
    }

    handleChange = (prop,val) => {
        this.setState({
            [prop]: val
        })
        console.log("state", this.state)
    }

    handlePostOrder = (grandTotal) => {
        this.handleChange('completed', true)
        console.log('fires')
        const {email, firstName, lastName, address1, address2, city, state, zip} = this.state
        axios.post('/api/order',{email, first_name:firstName, last_name:lastName, address_1: address1, address_2:address2, city, state, zip, total:grandTotal})
        .then(order => {
            console.log({order})
            this.handleGetOrderNum()
        })
    }

    handleGetOrderNum = () => {
        axios.get('/api/ordernum')
        .then(res => {
            this.setState({orderNum:res.data[0].max})
            console.log("orderNum", this.state.orderNum)
            this.handlePostOrderedParts(this.state.orderNum)
        })
    }

    handlePostOrderedParts = (num) => {
        this.props.cartItems.forEach((val) => {
            let id = val.id
            let quantity = val.quantity
            let reqArr = []
            reqArr.push(num)
            reqArr.push(id)
            reqArr.push(quantity)
            axios.post('/api/orderedparts', reqArr)
            .then(res => {
                console.log(res.data)


            })
        })
        
    }
    
    
    render() {
        console.log("state2", this.state)
        let {grandTotal} = this.state
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
                <div className='grand-total'>
                    Order Total: ${parseFloat(grandTotal).toFixed(2)}
                </div>
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
                        {
                            !this.state.completed
                            ?<button className='btn-purchase' label='Submit' onClick={()=>this.handlePostOrder(grandTotal)}>
                            Save shipping information
                            </button>
                            :<Pay grandTotal={grandTotal}/>
                        }
                        
                    </Form>


                </div>

                <div className='summary-container'>
                    <h5 className='order-summary'>Order Summary</h5>
                    {
                        this.props.cartItems
                        ?<div className='sum-cont'>{mappedCartItems}</div>
                        :null
                    }
                    
                    <div className='total'>
                        <div>TOTAL: </div>
                        <div>${parseFloat(grandTotal).toFixed(2)}</div>
                    </div>

                </div>
                {/* <div>

                    <Link><button onClick={()=> this.props.emptyCart([])}></button></Link>
                </div> */}




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
export default connect(mapToProps, {emptyCart})(Checkout)