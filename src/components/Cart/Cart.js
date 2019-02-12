import React, {Component} from 'react'

class Cart extends Component{
    constructor(props){
        super(props)

        this.state = {
            cartItems: {}
        }
    }

    render(){
        return(
            <div>I am Cart</div>
        )
    }
}

export default Cart