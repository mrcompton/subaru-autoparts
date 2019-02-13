import React, {Component} from 'react'
import axios from 'axios'

class Parts extends Component{
    constructor(props){
        super(props)

        this.state = {
            parts: {}
        }
    }

    componentDidMount(){
        axios.get('/api/allparts')
        
    }

    render(){
        return(
            <div>I am Parts</div>

        )
    }
}

export default Parts