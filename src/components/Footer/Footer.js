import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import PartsModal from '../PartsModal/PartsModal'
import './Footer.css'
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
            <div className='footer-nav'>
    
                <div className='footer-nav-links'>
                    <Link to='/'><span><i class="fas fa-home"></i></span></Link>
                    <Link to='/login'><span><i class="fas fa-user"></i></span></Link>
                    <Link to='/cart'><span><i class="fas fa-shopping-cart"></i></span></Link>
                    <span className='menu'>Menu <i class="fas fa-bars"></i></span>
                    {/* <Link to='/about'><span>About</span></Link>
                    <Link to='/contact'><span>Contact Us</span></Link> */}
                    <PartsModal show={this.state.modalShow} onHide={modalClose}/>
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