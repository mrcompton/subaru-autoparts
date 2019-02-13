import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './BottomNav.css'

const BottomNav = (props) => {
    return (
        <div className='bottom-nav'>

            <div className='nav-links'>
                <Link to='/'><span>Home</span></Link>
                <Link to='/parts'><span>Parts</span></Link>
                <Link to='/about'><span>About</span></Link>
                <Link to='/contact'><span>Contact Us</span></Link>
            </div>



        </div>
    )
}

export default withRouter(BottomNav)