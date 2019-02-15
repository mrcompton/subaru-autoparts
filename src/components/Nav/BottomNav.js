import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import PartsModal from '../PartsModal/PartsModal'
import './BottomNav.css'
import { connect } from 'react-redux'

class BottomNav extends Component{
    constructor(props){
        super(props)

        this.state = {
            modalShow: false
        }
    }  

    handleUpdateParts(){

    }
    render(){
        let modalClose = () => this.setState({ modalShow: false })
        return (
            <div className='bottom-nav'>
    
                <div className='nav-links'>
                    <Link to='/'><span >Home</span></Link>
                    <Link to='/'><span onClick={() => this.setState({ modalShow: true })}>Parts</span></Link>
                    <Link to='/about'><span>About</span></Link>
                    <Link to='/contact'><span>Contact Us</span></Link>
                    <PartsModal show={this.state.modalShow} onHide={modalClose}/>
                </div>
                <div className='selected-v-container'>
                    <i className="fa fa-car" aria-hidden="true"></i>
                    <Link to='/'><div className='selected-v' onClick={() => this.setState({ modalShow: true })}>Selected Vehicle: {this.props.year} {this.props.model} {this.props.trim}</div></Link>
                </div>
    
    
            </div>
        )
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim } = reduxState
    return {
        year, model, trim
    }
}

export default withRouter(connect(mapToProps)(BottomNav))