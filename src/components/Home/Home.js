import React, {Component} from 'react'

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            year: null,
            model: '',
            trim: ''

        }
    }

    handleGetYears = () => {

    }
    handleGetModels = () => {

    }
    handleGetTrims = () => {

    }
    render(){
       return(
           <div>
               <div>
                <h4>choose vehicle</h4>
               <button>Year</button>
               <button>Model</button>
               <button>Trim</button>
               </div>

           </div>
       )
    }
}

export default Home