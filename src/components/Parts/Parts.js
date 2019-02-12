import React, {Component} from 'react'

class Parts extends Component{
    constructor(props){
        super(props)

        this.state = {
            parts: {}
        }
    }

    render(){
        return(
            <div>I am Parts</div>

        )
    }
}

export default Parts