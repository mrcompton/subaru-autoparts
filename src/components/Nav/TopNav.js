import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateUser } from '../../ducks/reducer'
import './TopNav.css'

class TopNav extends Component {
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
    render() {
        return (
            <div className='outer-container'>
                <div >
                    <div className='inner-container'>
                        <div className='logo-container'>
                            <div>

                            </div>
                            <Link to='/' ><img className="store-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrqGR-Aa5PgrFQ1Y4uq_q2WqYCTADhHuJkGr2YtJKboeISDeNNw" alt="Logo"></img></Link>
                            <Link to='/' ><div className='logo-title'>Auto Parts Demo Site</div></Link>


                            <div className='button-container'>
                                {
                                    this.props.email
                                        ?
                                        <button className="btn-account" onClick={this.handleLogout}>Logout</button>
                                        :
                                        <Link to='/login'><button className="btn-account">My Account</button></Link>
                                }
                                <Link to='/cart'><button className='btn-cart'>My Cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapToProps = (reduxState) => {
    const { email } = reduxState
    return {
        email
    }
}

export default withRouter(connect(mapToProps, { updateUser })(TopNav))