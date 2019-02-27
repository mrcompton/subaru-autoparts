import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import PartsModal from '../PartsModal/PartsModal'
import './Footer.css'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'
import axios from 'axios'

class Footer extends Component{
    constructor(props){
        super(props)

        this.state = {
            modalShow: false
        }
    }  

    handleLogout = () => {
        axios.get('/api/logout')
            .then(res => {
                this.props.updateUser({})
                this.props.history.push('/')

            })
            .catch(err => {
                console.log(err)
            })
    }
    render(){
        let modalClose = () => this.setState({ modalShow: false }) 
        return (
            <div className='footer-nav'>
    
                <div className='footer-nav-links'>
                    <Link to='/'><span className='icons'><i className="fas fa-home"></i></span></Link>
                    {
                        !this.props.email
                        ?<Link to='/login'><span className='icons'><i className="fas fa-user"></i></span></Link>
                        : <span className='icons' onClick={this.handleLogout} role='button'><i className="fas fa-sign-in-alt"></i></span>
                    }
                    
                    
                    <Link to='/cart'><span className='icons'><i className="fas fa-shopping-cart"></i></span></Link>
                    <Link to='/'>
                        <span id='parts-icon'onClick={() => this.setState({ modalShow: true })}>
                            Parts<i className="fas fa-wrench"></i>

                        </span>
                    </Link>
                    {/* <Link to='/about'><span>About</span></Link>
                    <Link to='/contact'><span>Contact Us</span></Link> */}
                    <PartsModal show={this.state.modalShow} onHide={modalClose}/>
                </div>

    
            </div>
        )
    }
}

const mapToProps = (reduxState) => {
    const { year, model, trim, email } = reduxState
    return {
        year, model, trim, email
    }
}

export default withRouter(connect(mapToProps, {updateUser})(Footer))