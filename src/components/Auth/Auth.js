import React, {Component} from 'react'

class Auth extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password:''
        }
    }

    render(){
        return(
            <div>I am Auth!</div>

        )
    }
}

export default Auth
