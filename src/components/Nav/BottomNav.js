import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './BottomNav.css'
import { connect } from 'react-redux'

const BottomNav = (props) => {
    return (
        <div className='bottom-nav'>

            <div className='nav-links'>
                <Link to='/'><span >Home</span></Link>
                <Link to='/parts'><span>Parts</span></Link>
                <Link to='/about'><span>About</span></Link>
                <Link to='/contact'><span>Contact Us</span></Link>

            </div>
            <div className='selected-v-container'>
                <i className="fa fa-car" aria-hidden="true"></i>
                <div className='selected-v'>Selected Vehicle: {props.year} {props.model} {props.trim}</div>
            </div>


        </div>
    )
}

const mapToProps = (reduxState) => {
    const { year, model, trim } = reduxState
    return {
        year, model, trim
    }
}

export default withRouter(connect(mapToProps)(BottomNav))